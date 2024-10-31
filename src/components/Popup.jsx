import { useState} from 'react';

function Popup({ onClose, onSave, repositoryData }) {
  const [repoName, setRepoName] = useState(repositoryData?.repositoryName || '');
  const [isPublic, setIsPublic] = useState(repositoryData?.isPublic || true);
  const [cooperators, setCooperators] = useState(repositoryData?.cooperators.join(', ') || '');

  const handleSave = () => {
    const cooperatorsArray = cooperators.split(',').map(coop => coop.trim());
    onSave({
      repositoryName: repoName,
      isPublic: isPublic,
      cooperators: cooperatorsArray,
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
