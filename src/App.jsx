import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import Dashboard from "./Dashboard";
//import CreateRepository from "./components/CreateRepository";
import Profile from "./components/Profile";
import Search from "./components/Search";
import Messages from "./components/Messages"; 
import RepositoryDetails from "./components/RepositoryDetails"; // Import the RepositoryDetails component

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setIsAuthenticated(true);
    setUser(username);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <Router>
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/register" element={<RegisterPage />} />
            {/* Redirect all other routes to login if not authenticated */}
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            {/* Protected Routes */}
            <Route path="/dashboard" element={<Dashboard user={user} onLogout={handleLogout} />}>
              {/* Nested routes within the dashboard */}
              <Route path="profile" element={<Profile />} />
              <Route path="search" element={<Search />} />
              <Route path="messages" element={<Messages />} />
            </Route>
            {/* Repository Details Route */}
            <Route path="/repository/:repoId" element={<RepositoryDetails />} />
            {/* Redirect all other routes to dashboard if authenticated */}
            <Route path="*" element={<Navigate to="/dashboard/profile" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;