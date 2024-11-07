/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { db } from "./firebase";
import { Link, Outlet } from "react-router-dom";
import RepositoryDetails from "./components/RepositoryDetails";

function Dashboard({ user, onLogout }) {
  const [username, setUsername] = useState(user);
  const [selectedRepoId, setSelectedRepoId] = useState(null); // Track selected repo for details view

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userRef = ref(db, 'users/' + user.uid);
        const snapshot = await get(userRef);

        if (snapshot.exists()) {
          const data = snapshot.val();
          setUsername(data.username);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [user]);

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
    <div>
      <h1>Welcome {username}</h1>

      <nav>
        <ul>
          <li>
            <Link to="/dashboard/profile" onClick={() => setSelectedRepoId(null)}>Profile</Link>
          </li>
          {/* <li>
            <Link to="/dashboard/create-repository" onClick={() => setSelectedRepoId(null)}>Create Repository</Link>
          </li> */}
          <li>
            <Link to="/dashboard/search" onClick={() => setSelectedRepoId(null)}>Search</Link>
          </li>
          <li>
          <Link to="/dashboard/messages" onClick={() => setSelectedRepoId(null)}>Messages</Link> {/* New Messages Link */}
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>

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