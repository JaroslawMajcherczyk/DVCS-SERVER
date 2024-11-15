import { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { ref, update, set, get, getDatabase } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';
import '../style/newRepoPopup.scss';

// eslint-disable-next-line react/prop-types
function NewRepositoryPopup({ onClose, repositoryData }) {
  // eslint-disable-next-line react/prop-types
  const [repoName, setRepoName] = useState(repositoryData?.repositoryName || '');
  // eslint-disable-next-line react/prop-types
  const [isPublic, setIsPublic] = useState(repositoryData?.isPublic ?? true);
  // eslint-disable-next-line react/prop-types
  const [cooperators, setCooperators] = useState(repositoryData?.cooperators ? Object.keys(repositoryData.cooperators).join(', ') : '');
  const db = getDatabase();
  const auth = getAuth();

  // Function to create a new repository
  const handleCreateRepository = async () => {
    const cooperatorUsernames = cooperators.split(',').map(coop => coop.trim()).filter(Boolean);
    const validCooperators = {};

    // Validate each cooperator by their username
    for (const username of cooperatorUsernames) {
      const usersRef = ref(db, `users`);
      const usersSnapshot = await get(usersRef);

      let userFound = false;
      usersSnapshot.forEach((userSnapshot) => {
        const userData = userSnapshot.val();
        if (userData.username === username) {
          const userID = userSnapshot.key;
          validCooperators[userID] = {
            accessLevel: 'pending', // Initial access level until the user accepts
            invitedBy: auth.currentUser.uid,
          };

          // Send an invitation message
          const messageID = uuidv4();
          const messageRef = ref(db, `users/${userID}/messages/${messageID}`);
          set(messageRef, {
            fromUser: auth.currentUser.uid,
            repositoryID: uuidv4(),
            repositoryName: repoName,
            status: 'pending',
            message: `You have been invited to the repository ${repoName} as a cooperator. Please accept the invitation to gain access.`,
            timestamp: new Date().toISOString(),
          });
          userFound = true;
        }
      });

      if (!userFound) {
        alert(`User ${username} does not exist.`);
      }
    }

    // Create a new repository in the database
    const repositoryID = uuidv4(); // Generate a new ID for the repository
    const newRepositoryData = {
      repositoryName: repoName,
      isPublic: isPublic,
      cooperators: validCooperators,
      owner: auth.currentUser.uid, // Set the current user as the owner
      createdAt: new Date().toISOString(),
    };

    const repoRef = ref(db, `repositories/${repositoryID}`);
    await set(repoRef, newRepositoryData); // Use set to create the repository

    // Close the popup
    onClose();
  };

  // Function to update an existing repository
  const handleUpdateRepository = async () => {
    // eslint-disable-next-line react/prop-types
    if (!repositoryData || !repositoryData.id) {
      console.error("No repository data provided for update.");
      return;
    }

    // Prepare the data to be updated
    const updates = {
      repositoryName: repoName,
      isPublic: isPublic,
    };

    // eslint-disable-next-line react/prop-types
    const repoRef = ref(db, `repositories/${repositoryData.id}`);
    await update(repoRef, updates); // Use update to modify specific fields

    // Close the popup
    onClose();
  };

  return (
    <div className="newRepoPopup">
      <h3 className='newRepoPopup_header'>{repositoryData ? 'Edit Repository' : 'New Repository'}</h3>
      <input className='newRepoPopup_inputText'
        type="text"
        placeholder="Repository Name"
        value={repoName}
        onChange={(e) => setRepoName(e.target.value)}
      />
      <div className='newRepoPopup_div'>
        <label className='newRepoPopup_label'>
          <input className='newRepoPopup_inputRadio'
            type="radio"
            name="visibility"
            value="public"
            checked={isPublic}
            onChange={() => setIsPublic(true)}
          />
          Public
        </label>
        <label className='newRepoPopup_label'>
          <input className='newRepoPopup_inputRadio'
            type="radio"
            name="visibility"
            value="private"
            checked={!isPublic}
            onChange={() => setIsPublic(false)}
          />
          Private
        </label>
      </div>
      <input className='newRepoPopup_inputText'
        type="text"
        placeholder="Cooperators (comma-separated)"
        value={cooperators}
        onChange={(e) => setCooperators(e.target.value)}
      />
      <button className='newRepoPopup_create' onClick={repositoryData ? handleUpdateRepository : handleCreateRepository}>
        {repositoryData ? 'Update Repository' : 'Create Repository'}
      </button>
      <button className='newRepoPopup_close' onClick={onClose}>Close</button>
    </div>
  );
}

export default NewRepositoryPopup;
