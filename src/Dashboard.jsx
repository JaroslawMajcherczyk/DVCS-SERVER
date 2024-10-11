/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ref, get, set } from "firebase/database";
import { db } from "./firebase";
import { Link, Outlet } from "react-router-dom"; // Import Outlet to handle nested routes


function Dashboard({ user, onLogout }) {
  const [username, setUsername] = useState(user);

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
    onLogout();
  };
  const saveDataToRealtimeDatabase = async () => {
    try {
      await set(ref(db, 'users/' + user.uid), {
        username: username,
        email: user.email
      });
      console.log('Dane zostały zapisane do Realtime Database');
    } catch (error) {
      console.error('Błąd podczas zapisu danych:', error);
    }
  };

  return (
    <div>
      <h1>Welcome {username}</h1>

      {/* Static navigation that remains visible on all pages */}
      <nav>
        <ul>
          <li>
            <Link to="/dashboard/profile">Profile</Link>
          </li>
          <li>
            <Link to="/dashboard/create-repository">Create Repository</Link>
          </li>
          <li>
            <Link to="/dashboard/search">Search</Link>
          </li>
          <li>
            <button onClick={saveDataToRealtimeDatabase}>Save Data to Firestore</button>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>

      {/* Outlet renders the nested routes */}
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
