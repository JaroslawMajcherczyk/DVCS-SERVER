/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { ref, get } from "firebase/database"; // Import the method to read data from Realtime Database
import { db } from "./firebase"; // Import Firebase database
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Dashboard({ user, onLogout }) {
  const [username, setUsername] = useState(user); // State for the username
  const navigate = useNavigate(); // Hook for navigation

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

  // Function for logging out and redirecting to the home page
  const handleLogout = () => {
    onLogout(); // Call the logout function
    navigate("/"); // Redirect to the home page
  };

  return (
    <div>
      <h1>Welcome {username}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
