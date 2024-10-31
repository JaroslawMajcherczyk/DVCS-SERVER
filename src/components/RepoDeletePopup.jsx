import { useState } from 'react';

function RepoDeletePopup({ onClose, onDelete, repoName }) {
  const [inputName, setInputName] = useState('');

  const handleDelete = () => {
    if (inputName === repoName) {
      onDelete(); // Calls the delete function passed as a prop
    } else {
      alert("The repository name did not match. Deletion canceled.");
    }
  };

  return (
    <div className="popup">
      <h3>Delete Repository</h3>
      <p>To delete this repository, type its name: <strong>{repoName}</strong></p>
      <input
        type="text"
        placeholder="Repository Name"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default RepoDeletePopup;
