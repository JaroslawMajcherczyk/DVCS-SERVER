import { useState } from 'react';

function MessagePopup({ onClose, onSendMessage, repositoryID, repositoryName }) {
  const [recipientUsername, setRecipientUsername] = useState('');

  const handleSend = () => {
    onSendMessage(recipientUsername, repositoryID, repositoryName);
    onClose(); // Close the popup after sending the message
  };

  return (
    <div className="popup">
      <h3>Send Repository Access Invitation</h3>
      <input
        type="text"
        placeholder="Enter recipient username"
        value={recipientUsername}
        onChange={(e) => setRecipientUsername(e.target.value)}
      />
      <button onClick={handleSend}>Send Message</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default MessagePopup;
