import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/home"); // Redirects to the home/main website
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Poppins", sans-serif;
        }

        body {
          background: url("back.jpg") no-repeat center center fixed;
          background-size: cover;
          color: #fff; /* White text */
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .main-page-container {
          text-align: center;
          width: 100%;
          max-width: 600px; /* Optional: Controls max width */
        
          padding: 50px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
        }

        .main-page-container h1 {
          font-size: 3em;
          margin-bottom: 20px;
        }

        .main-page-container p {
          font-size: 1.5em;
          margin-bottom: 40px;
        }

        button {
          background-color: #ff3c78;
          color: #fff;
          font-size: 1.2em;
          padding: 15px 30px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        button:hover {
          background-color: #ff1744;
        }
      `}</style>
      <div className="main-page-container">
        <h1>Welcome to FitBell!</h1>
        <p>Your fitness journey starts here.</p>
        <button onClick={handleStart}>Start</button>
      </div>
    </>
  );
};

export default MainPage;
