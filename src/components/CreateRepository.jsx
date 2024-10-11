import { useState, useEffect } from "react";
import { db } from '../firebase'; 
import { v4 as uuidv4 } from 'uuid'; 
import { getAuth, onAuthStateChanged } from 'firebase/auth'; 
import { doc, setDoc, Timestamp } from "firebase/firestore";  // Import Firestore functions

function CreateRepository() { 

  const [showModal, setShowModal] = useState(false);  // State for controlling the popup visibility
  const [projectName, setProjectName] = useState(""); // State for the project name
  const [user, setUser] = useState(null); // State for storing the logged-in user

  // Monitor authentication state
  useEffect(() => {
    const auth = getAuth(); 
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log("Logged in as:", currentUser.email); // Log user email
      } else {
        setUser(null);
        console.log("No user is logged in");
      }
    });
  
    return () => unsubscribe();
  }, []);

  // Handle project creation in Firebase Firestore
  const handleCreateProject = async () => {
    if (!projectName) {
      alert("Please enter a project name");
      return;
    }

    if (!user) {
      alert("No user is logged in.");
      return;
    }

    const repoId = uuidv4(); // Generate unique ID for the project
    const creationTime = Timestamp.now(); // Use Firestore Timestamp for the current time

    try {
      const projectRef = doc(db, "repository", repoId); // Reference to the Firestore document

      await setDoc(projectRef, {
        projectName,
        userName: user.email, // Use the user's email from Firebase Auth
        creationTime,
        repoId,
      });

      alert("Project created successfully!");
      setShowModal(false); // Close the modal after success
      setProjectName(""); // Reset project name input field
    } catch (error) {
      console.error("Error creating project:", error); // Log detailed error
      alert(`Error creating project: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Create a new repository</h2>

      <button onClick={() => setShowModal(true)}>Add Project</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Enter Project Name</h3>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="Project Name"
            />
            <button onClick={handleCreateProject}>Create Project</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateRepository;
