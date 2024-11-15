import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { getStorage, ref as storageRef, uploadBytes, listAll, deleteObject } from 'firebase/storage';
import { getDatabase, ref, set, onValue, get, remove } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';
import Popup from './NewRepositoryPopup';
import RepoDeletePopup from './RepoDeletePopup';
import NewCommitPopup from './NewCommitPopup'; // Import the NewCommitPopup component
import MessagePopup from './MessagePopup'; 
import { useOutletContext } from 'react-router-dom';
import '../style/profile.scss';

function Profile() {
  const [showPopup, setShowPopup] = useState(false);
  const [repositories, setRepositories] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showCommitPopup, setShowCommitPopup] = useState(false); // State for NewCommitPopup visibility
  const [showMessagePopup, setShowMessagePopup] = useState(false); 
  const auth = getAuth();
  const db = getDatabase();

  const { onSelectRepository } = useOutletContext();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const userRepoRef = ref(db, `repositories`);
      onValue(userRepoRef, (snapshot) => {
        const data = snapshot.val() || {};

              // Filter repositories where the user is the owner or has full access as a cooperator
              const userRepos = Object.keys(data).filter((key) => {
                const repo = data[key];
                return (
                  repo.owner === user.uid ||
                  (repo.cooperators &&
                    repo.cooperators[user.uid] &&
                    (repo.cooperators[user.uid].accessLevel === 'full' ||
                      repo.cooperators[user.uid].accessLevel === 'true'))
                );
              }).map((key) => ({ id: key, ...data[key] }));

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
  
  const handleCreateMessage = async (recipientEmail, repositoryID, repositoryName) => {
    const auth = getAuth();
    const db = getDatabase();
    const senderID = auth.currentUser.uid;

      // Fetch the sender's username
    const senderRef = ref(db, `users/${senderID}`);
    const senderSnapshot = await get(senderRef);
    let senderUsername = "Unknown User"; // Default in case username is not found

    if (senderSnapshot.exists()) {
      senderUsername = senderSnapshot.val().username || senderUsername;
    }
    
    // Find the recipient user ID by email
    const usersRef = ref(db, 'users');
    const userSnapshot = await get(usersRef);
    let recipientID = null;
  
    if (userSnapshot.exists()) {
      userSnapshot.forEach((childSnapshot) => {
        const userData = childSnapshot.val();
        console.log(`Checking user: ${userData.email}`); // Debugging log
        if (userData.email === recipientEmail) {
          recipientID = childSnapshot.key;
        }
      });
    }
  
    if (!recipientID) {
      alert("Recipient user not found.");
      return;
    }
  
    // Create a new message for the recipient
    const messageID = uuidv4();
    const messageRef = ref(db, `users/${recipientID}/messages/${messageID}`);
    await set(messageRef, {
      fromUser: senderID,
      repositoryID,
      repositoryName,
      status: 0, // 0 = Not Read
      message: `You've been invited to view and collaborate on the repository: ${repositoryName} by user: ${senderUsername}.`,
      timestamp: new Date().toISOString(),
    });
  
    console.log(`Message sent to ${recipientEmail} for repository access.`);
  };
  

  // Function to open the MessagePopup for a specific repository
  const handleOpenMessagePopup = (repo) => {
    setSelectedRepo(repo);
    setShowMessagePopup(true);
  };


  return (
    <div className='profile'>
      <button className='addRepo_button' onClick={() => { setShowPopup(true); setSelectedRepo(null); }}>New Repository</button>
      <h1 className='profile_header'>Repositories</h1>
      
      {repositories.length > 0 ? (
        <ul>
          {repositories.map((repo) => (
            <li className='li_horizontal' key={repo.id}>
              <button className='repoName_button' onClick={() => onSelectRepository(repo.id)}>{repo.repositoryName}</button>

              {/* Conditional Rendering based on User Role */}
              {auth.currentUser.uid === repo.owner ? (
                <>
                  <button className='usage_button' onClick={() => handleEditRepository(repo)}>Edit</button>
                  <button className='usage_button' onClick={() => handleOpenDeletePopup(repo)}>Delete</button>
                  <button className='usage_button' onClick={() => handleOpenNewCommitPopup(repo)}>NewCommit</button>
                  <button className='usage_button' onClick={() => handleOpenMessagePopup(repo)}>AddUserToRepo</button>
                </>
              ) : (
                repo.cooperators && repo.cooperators[auth.currentUser.uid] ? (
                  <button className='usage_button' onClick={() => handleOpenNewCommitPopup(repo)}>New Commit</button>
                ) : null
              )}
              
              <ul className='commit_direction'>
                {repo.commits && Object.entries(repo.commits).map(([commitID, commit]) => (
                  <li className='li_nodecoration' key={commitID}>
                    <span className='commit'>{commit.message} - {new Date(commit.timestamp).toLocaleString()}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p className='error'>No repositories created yet.</p>
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
        {showMessagePopup && selectedRepo && (
        <MessagePopup
          onClose={() => setShowMessagePopup(false)}
          onSendMessage={handleCreateMessage}
          repositoryID={selectedRepo.id}
          repositoryName={selectedRepo.repositoryName}
        />
      )}
    </div>
  );
}

export default Profile;