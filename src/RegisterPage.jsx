import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { auth, db } from "./firebase";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create a new user with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store user data in the Realtime Database under `users` with the UID as the key
      const userRef = ref(db, `users/${user.uid}`);
      await set(userRef, {
        uid: user.uid,        // Store the user's UID
        username: username,   // Store the username
        email: email          // Store the email
      });

      console.log("User registered:", user);
      navigate("/"); // Redirect to home or login after registration
    } catch (error) {
      setError("Registration failed: " + error.message);
    }
  };

  // Function to handle logout (redirects to home)
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div>
      <div>
        <h1>Registration</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit">Register</button>
        </form>
      </div>
      <div>
        <button onClick={handleLogout}>Return to Login</button>
      </div>
    </div>
  );
}

export default RegisterPage;
