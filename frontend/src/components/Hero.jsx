import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="content">
        <div className="title">
          <h1>STEP</h1>
          <h1>INTO</h1>
          <h1>STRENGTH</h1>
        </div>
        <div className="sub-title">
          <p>Your Journey to Fitness Starts Here</p>
        </div>
        <div className="buttons">
          <button onClick={() => navigate("/options")}>Start Your Journey</button>
          <button onClick={() => navigate("/login")}>Log In</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
