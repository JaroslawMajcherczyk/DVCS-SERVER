import { useState } from 'react';

function NewCommitPopup({ onClose, onSave }) {
  const [commitMessage, setCommitMessage] = useState("");

  const handleSave = () => {
    if (commitMessage.trim()) {
      onSave(commitMessage); // Pass the commit message to the onSave function
      onClose(); // Close the popup after saving
    } else {
      alert("Please enter a commit message.");
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3>Create a New Commit</h3>
        <input
          type="text"
          placeholder="Enter commit message"
          value={commitMessage}
          onChange={(e) => setCommitMessage(e.target.value)}
        />
        <div className="popup-buttons">
          <button onClick={handleSave}>Save Commit</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default NewCommitPopup;
