import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { getStorage, ref as storageRef, uploadBytes, listAll, deleteObject } from 'firebase/storage';
import { getDatabase, ref, set, onValue, remove } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';
import Popup from './Popup';
import RepoDeletePopup from './RepoDeletePopup';
import NewCommitPopup from './NewCommitPopup'; // Import the NewCommitPopup component
import { useOutletContext } from 'react-router-dom';

function Profile() {
  const [showPopup, setShowPopup] = useState(false);
  const [repositories, setRepositories] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showCommitPopup, setShowCommitPopup] = useState(false); // State for NewCommitPopup visibility
  const auth = getAuth();
  const db = getDatabase();

  const { onSelectRepository } = useOutletContext();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const userRepoRef = ref(db, `repositories`);
      onValue(userRepoRef, (snapshot) => {
        const data = snapshot.val() || {};
        const userRepos = Object.keys(data)
          .filter((key) => data[key].owner === user.uid)
          .map((key) => ({ id: key, ...data[key] }));
        setRepositories(userRepos);
      });
    }
  }, [auth.currentUser, db]);

  const handleCreateRepository = async (repositoryData) => {
    const user = auth.currentUser;
    if (!user) return;

    const repositoryID = selectedRepo ? selectedRepo.id : uuidv4();
    const repositoryDataWithOwner = {
      ...repositoryData,
      owner: user.uid,
      createdAt: new Date().toISOString(),
    };

    // Add repository data to the Realtime Database
    const repoRef = ref(db, `repositories/${repositoryID}`);
    await set(repoRef, repositoryDataWithOwner);


    await handleCreateCommit(repositoryID, "First Commit", [
      new Blob(["This is the initial commit for the repository."], { type: "text/plain" })
    ]);
  };

  const handleCreateCommit = async (repositoryID, commitMessage, commitFiles) => {
    const user = auth.currentUser;
    if (!user) return;

    const commitID = uuidv4();
    const commitData = {
      message: commitMessage,
      timestamp: new Date().toISOString(),
      userID: user.uid,
      files: commitFiles.map(file => file.name || "ReadMe.txt"),
    };

    const commitRef = ref(db, `repositories/${repositoryID}/commits/${commitID}`);
    await set(commitRef, commitData);

    const storage = getStorage();
    const commitStorageRef = storageRef(storage, `databases/${repositoryID}/commits/${commitID}`);

    try {
      for (const file of commitFiles) {
        await uploadBytes(storageRef(commitStorageRef, file.name || "ReadMe.txt"), file);
      }
      console.log("Commit files uploaded to Firebase Storage");
    } catch (error) {
      console.error("Error uploading commit files:", error);
    }
  };

  const handleOpenNewCommitPopup = (repo) => {
    setSelectedRepo(repo);
    setShowCommitPopup(true);
  };

  const handleSaveCommit = (commitMessage) => {
    if (selectedRepo) {
      handleCreateCommit(selectedRepo.id, commitMessage, [
        new Blob(["Commit file content"], { type: "text/plain" })
      ]);
    }
    setShowCommitPopup(false);
  };

  const handleEditRepository = (repo) => {
    setSelectedRepo(repo);
    setShowPopup(true);
  };

  const handleOpenDeletePopup = (repo) => {
    setSelectedRepo(repo);
    setShowDeletePopup(true);
  };

  const handleDeleteRepository = async () => {
    if (!selectedRepo) return;
  
    const storage = getStorage();
    const repoStorageRef = storageRef(storage, `databases/${selectedRepo.id}`);
    const repoRef = ref(db, `repositories/${selectedRepo.id}`);
  
    try {
      // Step 1: Recursively delete all files and folders within the repository in Firebase Storage
      const deleteAllInDirectory = async (directoryRef) => {
        const folderSnapshot = await listAll(directoryRef);
        
        // Delete all files in the current directory
        const deleteFiles = folderSnapshot.items.map((fileRef) => deleteObject(fileRef));
        await Promise.all(deleteFiles);
  
        // Recursively delete all subdirectories
        const deleteSubfolders = folderSnapshot.prefixes.map((subfolderRef) => deleteAllInDirectory(subfolderRef));
        await Promise.all(deleteSubfolders);
      };
      
      // Call the recursive deletion function on the main repository directory
      await deleteAllInDirectory(repoStorageRef);
  
      // Step 2: Delete the repository data from the Realtime Database
      await remove(repoRef);
  
      alert("Repository and all its commits deleted successfully from both Realtime Database and Storage.");
    } catch (error) {
      console.error("Error deleting repository:", error);
      alert("There was an error deleting the repository.");
    } finally {
      setShowDeletePopup(false);
      setSelectedRepo(null);
    }
  };
  

  return (
    <div>
      <h2>Repositories</h2>
      <button onClick={() => { setShowPopup(true); setSelectedRepo(null); }}>New Repository</button>
      
      {repositories.length > 0 ? (
        <ul>
          {repositories.map((repo) => (
            <li key={repo.id}>
              <button onClick={() => onSelectRepository(repo.id)}>{repo.repositoryName}</button>
              <button onClick={() => handleEditRepository(repo)}>Edit</button>
              <button onClick={() => handleOpenDeletePopup(repo)}>Delete</button>
              <button onClick={() => handleOpenNewCommitPopup(repo)}>New Commit</button>
              <ul>
                {repo.commits && Object.entries(repo.commits).map(([commitID, commit]) => (
                  <li key={commitID}>
                    <span>{commit.message} - {new Date(commit.timestamp).toLocaleString()}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>No repositories created yet.</p>
      )}

      {showPopup && (
        <Popup
          onClose={() => setShowPopup(false)}
          onSave={handleCreateRepository}
          repositoryData={selectedRepo}
        />
      )}

      {showDeletePopup && (
        <RepoDeletePopup
          onClose={() => setShowDeletePopup(false)}
          onDelete={handleDeleteRepository}
          repoName={selectedRepo.repositoryName}
        />
      )}

      {showCommitPopup && (
        <NewCommitPopup
          onClose={() => setShowCommitPopup(false)}
          onSave={handleSaveCommit}
        />
      )}
    </div>
  );
}

export default Profile;
