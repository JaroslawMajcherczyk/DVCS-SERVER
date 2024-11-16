import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function MessagePopup({ onClose, onSendMessage, repositoryID, repositoryName }) {
  const [recipientUsername, setRecipientUsername] = useState('');

  const handleSend = () => {
    onSendMessage(recipientUsername, repositoryID, repositoryName);
    onClose(); // Close the popup after sending the message
  };

  return (
    <div className="messagePopup_wrapper">
      <h3 className='messagePopup_header'>Send Repository Access Invitation</h3>
      <input className='messagePopup_input'
        type="text"
        placeholder="Enter recipient username"
        value={recipientUsername}
        onChange={(e) => setRecipientUsername(e.target.value)}
      />
      <button className='messagePopup_buttonSend' onClick={handleSend}>Send Message</button>
      <button className='messagePopup_buttonClose' onClick={onClose}>Close</button>
    </div>
  );
}

export default MessagePopup;
