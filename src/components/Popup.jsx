import { useState, useEffect } from 'react';

function Popup({ onClose, onSave, repositoryData }) {
  // Initialize form fields with repository data if editing, or with defaults if creating a new repository
  const [repoName, setRepoName] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const [cooperators, setCooperators] = useState('');

  useEffect(() => {
    if (repositoryData) {
      setRepoName(repositoryData.repositoryName || '');
      setIsPublic(repositoryData.isPublic ?? true);
      setCooperators((repositoryData.cooperators || []).join(', '));
    }
  }, [repositoryData]);

  const handleSave = () => {
    const cooperatorsArray = cooperators.split(',').map(coop => coop.trim()).filter(Boolean);
    
    // Call onSave with new or updated repository data
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
