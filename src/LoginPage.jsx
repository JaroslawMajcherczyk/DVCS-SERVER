/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"; // Import Firebase authentication

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if email and password are in localStorage and auto-login if present
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if (savedEmail && savedPassword) {
      // Auto-login with saved credentials
      signInWithEmailAndPassword(auth, savedEmail, savedPassword)
        .then((userCredential) => {
          onLogin(userCredential.user.email); // Log user in and pass email to parent component
          navigate("/dashboard"); // Redirect to dashboard on successful login
        })
        .catch((error) => {
          console.error("Auto-login failed:", error);
          localStorage.removeItem("email");
          localStorage.removeItem("password");
        });
    }
  }, [navigate, onLogin]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      // Store email and password in localStorage for persistent login
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

      onLogin(userCredential.user.email); // Pass email to parent component
      navigate("/dashboard");
    } catch (error) {
      setError("Login failed: " + error.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
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
        <button type="submit">Login</button>
      </form>
      <button onClick={() => navigate("/register")}>Register</button>
    </div>
  );
}

export default LoginPage;
