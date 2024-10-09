import { useState, useEffect } from "react";
import { db } from '../firebase'; 
import { v4 as uuidv4 } from 'uuid'; 
import { ref as dbRef, set } from 'firebase/database'; 
import { getAuth, onAuthStateChanged } from 'firebase/auth'; 
function CreateRepository() { 

  const [showModal, setShowModal] = useState(false);  // State for controlling the popup visibility
  const [projectName, setProjectName] = useState(""); // State for the project name
  const [user, setUser] = useState(null); // State for storing the logged-in user

  // Monitor authentication state
  useEffect(() => {
    const auth = getAuth(); // Get Firebase Auth instance
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Set user data when logged in
        console.log("Logged in as:", currentUser.email); // Output user email to console
      } else {
        setUser(null); // Set to null when not logged in
        console.log("No user is logged in");
      }
    });

    return () => unsubscribe(); // Cleanup subscription on component unmount
  }, []);

  // Handle project creation in Firebase Realtime Database
  const handleCreateProject = async () => {
    if (!projectName) {
      alert("Please enter a project name");
      return;
    }

    if (!user) {
      alert("No user is logged in.");
      return;
    }

    const projectId = uuidv4(); // Generate unique ID for the project
    const creationTime = new Date().toISOString(); // Get the current date and time

    try {
      // Create a new reference in Firebase Database for the project in the path `repository/project`
      const projectRef = dbRef(db, `repository/projects/${projectId}`);
      await set(projectRef, {
        projectName,
        userName: user.email, // Use the user's email from Firebase Auth
        creationTime,
        projectId,
      });

      alert("Project created successfully!");
      setShowModal(false); // Close the modal after success
    } catch (error) {
      console.error("Error creating project:", error);
    }

    console.log("Project Name:", projectName);
    console.log("User Email:", user.email);
    console.log("Project ID:", projectId);
    console.log("Creation Time:", creationTime);
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
