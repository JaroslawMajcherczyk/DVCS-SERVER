import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database"; // Import functions from Realtime Database
import { auth, db } from "./firebase"; // Import Firebase authentication and database

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create a user using Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save additional user data in Realtime Database
      await set(ref(db, 'users/' + user.uid), {
        email: email
      });

      console.log("User registered:", user);
      navigate("/"); // Redirect to login after registration
    } catch (error) {
      setError("Registration failed: " + error.message);
    }
  };

  // Function for logging out and redirecting to the home page
  const handleLogout = () => {
    // Call the logout function
    navigate("/"); // Redirect to the home page
  };

  return (
    <div>
      <div>
        <h1>Registration</h1>
        <form onSubmit={handleSubmit}>
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
