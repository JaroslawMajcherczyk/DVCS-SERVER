/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { db, auth } from "./firebase";
import { Link, Outlet } from "react-router-dom";
import RepositoryDetails from "./components/RepositoryDetails";
import './style/dashboard.scss';

function Dashboard({ user, onLogout }) {
  const [username, setUsername] = useState(user);
  const [selectedRepoId, setSelectedRepoId] = useState(null); // Track selected repo for details view

  const testRef = ref(db, `users/${user.uid}/username`);
 console.log(testRef);


 useEffect(() => {
  const fetchUsername = async () => {
    try {
      const currentUser = auth.currentUser; // Get the current logged-in user
      if (currentUser) {
        const userUID = currentUser.uid; // Extract the UID
        console.log("Fetching username for user ID:", userUID);

        // Reference the username in Realtime Database
        const userRef = ref(db, `users/${userUID}/username`);
        const snapshot = await get(userRef);

        if (snapshot.exists()) {
          const fetchedUsername = snapshot.val();
          setUsername(fetchedUsername); // Update state with fetched username
        } else {
          console.log("No username found for this user.");
        }
      } else {
        console.error("No current user found. Please log in.");
      }
    } catch (error) {
      console.error("Error fetching username:", error);
    }
  };

  fetchUsername();
}, []);
  
  
 

  


  const handleLogout = () => {
    // Remove stored credentials from localStorage
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    onLogout();
  };

  const onSelectRepository = (repoId) => {
    setSelectedRepoId(repoId); // Set selected repo ID to show details
  };

  return (
    <div className="header">
      <div className="navbar">
      <h3 className="header_h3">Welcome <span className="user">{username}</span></h3>
      <nav className="nav">
        <ul className="ul">
          <li className="li"> 
            <Link className="link" to="/dashboard/profile" onClick={() => setSelectedRepoId(null)}>Profile</Link>
          </li>
          {/* <li>
            <Link to="/dashboard/create-repository" onClick={() => setSelectedRepoId(null)}>Create Repository</Link>
          </li> */}
          <li className="li">
            <Link className="link" to="/dashboard/search" onClick={() => setSelectedRepoId(null)}>Search</Link>
          </li>
          <li className="li">
          <Link className="link" to="/dashboard/messages" onClick={() => setSelectedRepoId(null)}>Messages</Link>
          </li>
          <li className="li">
            <button className="buton_logout" onClick={handleLogout}>Log Out</button>
          </li>
        </ul>
      </nav>
        </div>
      <div className="content">
        {selectedRepoId ? (
          <RepositoryDetails repoId={selectedRepoId} /> // Show RepositoryDetails if a repo is selected
        ) : (
          <Outlet context={{ onSelectRepository }} /> // Pass onSelectRepository to Outlet context
        )}
      </div>
    </div>
  );
}

export default Dashboard;