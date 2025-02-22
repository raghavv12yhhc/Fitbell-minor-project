import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <div>
      <h1>Welcome to FitBell</h1>
      {username && (
        <div>
          <p>Welcome back, {username}!</p>
          <p>Email: {email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
