
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Intro = ({ onFinish }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Call onFinish after intro animation is complete
    setTimeout(() => {
      onFinish();  // Calls the parent's handler to stop intro
      navigate("/main");  // Navigates to the main page after intro
    }, 3000); // Assuming intro lasts for 5 seconds (adjust as needed)
  }, [onFinish, navigate]);

  return (
    <div className="intro-container">
      <h1 className="split-text">
        <span className="red">F</span>
        <span className="red">B</span>
        <span className="white">ITELL</span>
      </h1>
      {/* Your animation and intro content here */}
    </div>
  );
};

export default Intro;
