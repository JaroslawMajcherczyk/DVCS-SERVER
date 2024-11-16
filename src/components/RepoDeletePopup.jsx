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
    <div className="repoDelete_wrapper">
      <h3 className='repoDelete_header'>Delete Repository</h3>
      <p className='repoDelete_info'>To delete this repository, type its name: <strong className='repoDelete_name'>{repoName}</strong></p>
      <input className='repoDelete_input'
        type="text"
        placeholder="Repository Name"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <button className='repoDelete_buttonDelete' onClick={handleDelete}>Delete</button>
      <button className='repoDelete_buttonClose' onClick={onClose}>Close</button>
    </div>
  );
}

export default RepoDeletePopup;
