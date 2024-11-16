import { useState } from 'react';

// eslint-disable-next-line react/prop-types
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
    <div className="newCommitPopup_wrapper">
      <div className="newCommitPopup_container">
        <h3 className='newCommitPopup_header' >Create a New Commit</h3>
        <input className='newCommitPopup_input'
          type="text"
          placeholder="Enter commit message"
          value={commitMessage}
          onChange={(e) => setCommitMessage(e.target.value)}
        />
        <div className="newCommitPopup_bottonsContainer">
          <button className='newCommitPopup_buttonSave' onClick={handleSave}>Save Commit</button>
          <button className='newCommitPopup_buttonCancel' onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default NewCommitPopup;
