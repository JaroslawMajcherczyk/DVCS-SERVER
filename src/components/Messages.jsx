import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, get, update } from 'firebase/database';

function Messages() {
  const [messages, setMessages] = useState([]);
  const auth = getAuth();
  const db = getDatabase();

  useEffect(() => {
    const fetchMessages = async () => {
      const user = auth.currentUser;
      const messagesRef = ref(db, `users/${user.uid}/messages`);
      const snapshot = await get(messagesRef);

      if (snapshot.exists()) {
        const messagesData = [];
        snapshot.forEach((childSnapshot) => {
          messagesData.push({ id: childSnapshot.key, ...childSnapshot.val() });
        });
        setMessages(messagesData);
      }
    };

    fetchMessages();
  }, [auth.currentUser, db]);

  const handleAcceptMessage = async (message) => {
    const db = getDatabase();
    const auth = getAuth();
    const currentUserID = auth.currentUser.uid;
  
    // Update message status to accepted
    const messageRef = ref(db, `users/${currentUserID}/messages/${message.id}`);
    await update(messageRef, { status: 1 });
  
    // Grant access to the repository as a collaborator with similar permissions
    const userRepoRef = ref(db, `repositories/${message.repositoryID}/cooperators`);
    await update(userRepoRef, {
      [currentUserID]: {
        accessLevel: "true",  // Assuming "full" provides the same access as the creator
        grantedBy: message.fromUser, // Logs who granted access
        timestamp: new Date().toISOString(), // Log the time of granting access
      },
    });
  
    console.log(`Access granted to repository ${message.repositoryName} for user ${currentUserID}`);
  };

  const handleRejectMessage = async (message) => {
    const messageRef = ref(db, `users/${auth.currentUser.uid}/messages/${message.id}`);
    await update(messageRef, { status: 2 }); // Update status to rejected
    console.log(`Message rejected for repository ${message.repositoryName}`);
  };

  return (
    <div className='message_wrapper'>
      <h2 className='message_header'>Messages</h2>
      {messages.length > 0 ? (
        <ul className='message_container'>
          {messages.map((message) => (
            <li className='message_messageWrapper' key={message.id}>
              <p className='message_userMessage'>{message.message}</p>
              <p className='message_Status'>Status: {message.status === 0 ? "Not Read" : message.status === 1 ? "Accepted" : "Rejected"}</p>
              {message.status === 0 && (
                <div className='message_buttonsContainer'>
                  <button className='message_buttonAccept' onClick={() => handleAcceptMessage(message)}>Accept</button>
                  <button className='message_buttonReject' onClick={() => handleRejectMessage(message)}>Reject</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className='message_error'>No messages.</p>
      )}
    </div>
  );
}

export default Messages;
