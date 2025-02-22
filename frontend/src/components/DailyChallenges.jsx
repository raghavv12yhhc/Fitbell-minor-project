import React from "react";
import { useNavigate } from "react-router-dom";

const DailyChallenges = () => {
  const navigate = useNavigate(); // To navigate back to the options page

  return (
    <div className="daily-challenges-page">
      {/* Inline CSS */}
      <style>
        {`
          /* Ensure the page takes full height and width */
           body {
           height:100%;
           padding:0;
           width:100%;
          }

          .center{
          
          }

          /* Back Button */
          .back-button {
            position: absolute;
            top: 20px;
            left: 20px;
            background-color: white;
            color: black;
            border: none;
            padding: 10px 20px;
            font-size: 1rem;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .back-button:hover {
            background-color: rgb(243, 239, 239);
          }

          h2 {
            font-size: 3rem;
            color: black;
            
          }

          p {
            font-size: 1.5rem;
            color: black;
            
          }
        `}
      </style>

      {/* Back Button */}
      <button className="back-button" onClick={() => navigate("/options")}>
        Back
      </button>

      <section>
        <div className="center">
      <h2>Coming Soon!</h2>
      <p>Stay tuned for exciting challenges ahead!</p>
      </div>
      </section>
    </div>
  );
};

export default DailyChallenges;
