import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import Dashboard from "./Dashboard";
import CreateRepository from "./components/CreateRepository";
import Profile from "./components/Profile";
import Search from "./components/Search";


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
          </>
        ) : (
          <>
            <Route
              path="/dashboard/*" // Important to use * to handle sub-routes within Dashboard
              element={<Dashboard user={user} onLogout={handleLogout} />}
            >
              {/* Nested routes inside the dashboard */}
              <Route path="profile" element={<Profile />} />
              <Route path="create-repository" element={<CreateRepository />} />
              <Route path="search" element={<Search />} />
            </Route>
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
