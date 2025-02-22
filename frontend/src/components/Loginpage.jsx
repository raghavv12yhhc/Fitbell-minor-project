import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const toggleForm = () => setIsLogin(!isLogin);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? "/auth/login" : "/auth/register";

    try {
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // Store user details in localStorage
        if (!isLogin) {
          localStorage.setItem("username", formData.username);
        }
        localStorage.setItem("email", formData.email);

        // Success message
        alert(result.message);

        // Redirect to home
        navigate("/home");
      } else {
        alert(result.message); // Error message
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <style>
        {`
        * {
          margin: 0;
          padding: 0;
          width:100%;
          box-sizing: border-box;
          font-family: "Poppins", sans-serif;
        }
        .login-page {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f5f5f5;
        }
        .form-container {
          background: #ffffff;
          padding: 30px;
          width: 100%;
          max-width: 400px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          text-align: center;
        }
        .form-container h1 {
          margin-bottom: 20px;
          font-size: 1.8em;
          color: #333333;
        }
        .form-container form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .form-container input {
          padding: 12px;
          border-radius: 5px;
          border: 1px solid #ddd;
          font-size: 1em;
        }
        .form-container button {
          background-color: #ea0a0a;
          color: white;
          border: none;
          padding: 12px;
          font-size: 1em;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .form-container button:hover {
          background-color: #c50000;
        }
        .toggle-link {
          margin-top: 15px;
          font-size: 0.9em;
          color: #007bff;
          cursor: pointer;
          text-decoration: underline;
        }
        .toggle-link:hover {
          text-decoration: none;
        }
        `}
      </style>
      <div className="login-page">
        <div className="form-container">
          <h1>{isLogin ? "Log In" : "Sign Up"}</h1>
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <input
                type="text"
                name="username"
                placeholder="Choose a username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            )}
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <button type="submit">{isLogin ? "Log In" : "Sign Up"}</button>
          </form>
          <p className="toggle-link" onClick={toggleForm}>
            {isLogin
              ? "Don't have an account? Sign Up"
              : "Already have an account? Log In"}
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
