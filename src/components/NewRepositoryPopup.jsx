import { getAuth } from 'firebase/auth';
import { ref, set, getDatabase, onValue } from 'firebase/database';

function Popup({ onClose, onSave, repositoryData, owner }) {
  const [repoName, setRepoName] = useState(repositoryData?.repositoryName || '');
  const [isPublic, setIsPublic] = useState(repositoryData?.isPublic ?? true);
  const [cooperators, setCooperators] = useState(repositoryData?.cooperators?.join(', ') || '');
  const db = getDatabase();
  const auth = getAuth();

  const handleSave = async () => {
    const cooperatorUsernames = cooperators.split(',').map(coop => coop.trim()).filter(Boolean);
    const validCooperators = [];

    for (let username of cooperatorUsernames) {
      const userRef = ref(db, `users`);
      let userFound = false;

      // Check if the username exists
      onValue(userRef, (snapshot) => {
        snapshot.forEach((userSnapshot) => {
          const data = userSnapshot.val();
          if (data.username === username) {
            userFound = true;
            // Prepare the invitation message
            const messageID = uuidv4();
            const messageRef = ref(db, `messages/${messageID}`);
            set(messageRef, {
              toUser: userSnapshot.key,
              fromUser: owner.uid,
              repositoryID: repositoryData.id,
              repositoryName: repoName,
              status: 'pending',
              message: `You have been added to repository ${repoName} as a cooperator. Confirm to gain access for commits.`,
            });
            validCooperators.push(userSnapshot.key);
          }
        });

        if (!userFound) {
          alert(`User ${username} does not exist.`);
        }
      });
    }

    // Save the repository with valid cooperators in the database
    onSave({
      repositoryName: repoName,
      isPublic: isPublic,
      cooperators: validCooperators,
    });
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
