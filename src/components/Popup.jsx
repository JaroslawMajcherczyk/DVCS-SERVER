import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { ref, update,  set, get, getDatabase } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';

function Popup({ onClose, onSave, repositoryData }) {
  const [repoName, setRepoName] = useState(repositoryData?.repositoryName || '');
  const [isPublic, setIsPublic] = useState(repositoryData?.isPublic ?? true);
  const [cooperators, setCooperators] = useState(repositoryData?.cooperators ? Object.keys(repositoryData.cooperators).join(', ') : '');
  const db = getDatabase();
  const auth = getAuth();


  const handleSave = async () => {
    const cooperatorUsernames = cooperators.split(',').map(coop => coop.trim()).filter(Boolean);
    const validCooperators = {};
  
    // Validate each cooperator by their username (as in your original code)
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
            invitedBy: auth.currentUser.uid
          };
  
          // Send an invitation message (as in your original code)
          const messageID = uuidv4();
          const messageRef = ref(db, `users/${userID}/messages/${messageID}`);
          set(messageRef, {
            fromUser: auth.currentUser.uid,
            repositoryID: repositoryData ? repositoryData.id : uuidv4(),
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
  
    // Prepare data to be updated
    const updates = {
      repositoryName: repoName,
      isPublic: isPublic,
    };
  
    // Update only the specified fields in the database
    const repoRef = ref(db, `repositories/${repositoryData.id}`);
    await update(repoRef, updates);
  
    // Close the popup
    onClose();
  };
  

  return (
    <div className="popup">
      <h3>{repositoryData ? 'Edit Repository' : 'New Repository'}</h3>
      <input
        type="text"
        placeholder="Repository Name"
        value={repoName}
        onChange={(e) => setRepoName(e.target.value)}
      />
      <div>
        <label>
          <input
            type="radio"
            name="visibility"
            value="public"
            checked={isPublic}
            onChange={() => setIsPublic(true)}
          />
          Public
        </label>
        <label>
          <input
            type="radio"
            name="visibility"
            value="private"
            checked={!isPublic}
            onChange={() => setIsPublic(false)}
          />
          Private
        </label>
      </div>
      <input
        type="text"
        placeholder="Cooperators (comma-separated)"
        value={cooperators}
        onChange={(e) => setCooperators(e.target.value)}
      />
      <button onClick={handleSave}>{repositoryData ? 'Update Repository' : 'Create Repository'}</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default Popup;
