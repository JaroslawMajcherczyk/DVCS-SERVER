import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { getStorage, ref as storageRef, uploadBytes, listAll, deleteObject  } from 'firebase/storage'; // Import Firebase Storage functions
import { getDatabase, ref, set, onValue, remove } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';
import Popup from './Popup';
import RepoDeletePopup from './RepoDeletePopup';
import { useOutletContext } from 'react-router-dom';

function Profile() {
  const [showPopup, setShowPopup] = useState(false);
  const [repositories, setRepositories] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
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

// Inside Profile component
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

  // Create a corresponding folder in Firebase Storage
  const storage = getStorage();
  const repoStorageRef = storageRef(storage, `databases/${repositoryID}`);

  try {
    // Upload a dummy file to create the folder structure
    const dummyFile = new Blob(["You have created a new repository."], { type: "text/plain" });
    await uploadBytes(storageRef(repoStorageRef, "ReadMe.txt"), dummyFile);
    console.log("New repository folder created in Firebase Storage");
  } catch (error) {
    console.error("Error creating repository folder in Storage:", error);
  }
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
    const storage = getStorage();
    const repoStorageRef = storageRef(storage, `databases/${selectedRepo.id}`);
  
    try {
      // Step 1: Delete all files within the storage folder
      const folderSnapshot = await listAll(repoStorageRef);
      const deletePromises = folderSnapshot.items.map((fileRef) => deleteObject(fileRef));
      await Promise.all(deletePromises);
  
      // Step 2: Delete the repository data from the Realtime Database
      const repoRef = ref(db, `repositories/${selectedRepo.id}`);
      await remove(repoRef);
  
      alert("Repository deleted successfully from both Realtime Database and Storage.");
    } catch (error) {
      console.error("Error deleting repository:", error);
      alert("There was an error deleting the repository.");
    } finally {
      setShowDeletePopup(false);
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
    </div>
  );
}

export default Profile;
