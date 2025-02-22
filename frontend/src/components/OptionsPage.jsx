import React from "react";
import { useNavigate } from "react-router-dom";

const OptionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="options-page">
      {/* Inline CSS */}
      <style>
        {`
          .options-page {
            background: #000;
            color: white;
            font-family: "Arial", sans-serif;
            min-height: 100vh;
            padding: 20px;
            overflow-y: auto;
          }

          .fitbell-header {
            text-align: center;
            padding: 20px 0;
            background-color: black;
            font-size: 3rem;
            color: rgb(255,0,0);
            font-weight: bold;
            letter-spacing: 2px;
          }

          .options-title {
            text-align: center;
            font-size: 2rem;
            margin: 20px 0;
            color: #ffffff;
          }

          .options-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin: 0 auto;
            max-width: 1200px;
          }

          .option {
            background-color: #2c2c2c;
            border-radius: 10px;
            padding: 20px;
            text-align: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            transition: transform 0.2s, box-shadow 0.2s;
          }

          .option:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
          }

          .option img {
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: 10px;
          }

          .option h2 {
            font-size: 1.8rem;
            margin: 15px 0;
            color: #ff3b3b;
          }

          .option p {
            font-size: 1rem;
            color: #ccc;
            line-height: 1.5;
            margin: 15px 0;
          }

          .option button {
            background-color: #ff3b3b;
            border: none;
            padding: 12px 25px;
            color: white;
            font-size: 1rem;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
            transition: background-color 0.3s, transform 0.2s;
          }

          .option button:hover {
            background-color: #ff6161;
            transform: scale(1.05);
          }

          @media (max-width: 768px) {
            .fitbell-header {
              font-size: 2.5rem;
            }

            .options-title {
              font-size: 1.5rem;
            }

            .option p {
              font-size: 0.9rem;
            }

            .option button {
              padding: 10px 20px;
              font-size: 0.9rem;
            }
          }
        `}
      </style>

      <div className="fitbell-header">FITBELL</div>
      <h2 className="options-title">Choose Your Fitness Path</h2>
      <div className="options-container">
        {/* Home Workout Option */}
        <div className="option">
          <img src="homeworkout.jpg" alt="Home Workout" />
          <h2>Home Workout</h2>
          <p>
            Stay fit at home with easy-to-follow workout plans. These plans are
            designed to help you maintain your fitness goals in the comfort of
            your own home.
          </p>
          <button onClick={() => navigate("/home-workout")}>Start Here</button>
        </div>

        {/* Gym Workout Option */}
        <div className="option">
          <img src="gym.jpg" alt="Gym Workout" />
          <h2>Gym Workout</h2>
          <p>
            Explore intense workout routines for the gym, designed to build
            strength, muscle, and endurance with expert guidance.
          </p>
          <button onClick={() => navigate("/gym-workout")}>Start Here</button>
        </div>

        {/* Yoga Option */}
        <div className="option">
          <img src="yoga.jpg" alt="Yoga" />
          <h2>Yoga</h2>
          <p>
            Relax and strengthen your body and mind with guided yoga sessions,
            perfect for all skill levels.also provide peace to your body.
          </p>
          <button onClick={() => navigate("/yoga")}>Start Here</button>
        </div>

        {/* Diet Plan Option */}
        <div className="option">
          <img src="diet.jpg" alt="Diet Plan" />
          <h2>Diet Plan</h2>
          <p>
            Get personalized diet plans (veg and non-veg) tailored to your
            fitness goals. Stay on track with a nutritious and balanced diet.
          </p>
          <button onClick={() => navigate("/DietPlan")}>Start Here</button>
        </div>

        {/* Daily Challenges Option */}
        <div className="option">
          <img src="dailychallenges.jpg" alt="Daily Challenges" />
          <h2>Daily Challenges</h2>
          <p>
            Take part in daily fitness challenges designed to push your limits
            and keep you motivated. Compete with friends and track your progress
            as you conquer each challenge.
          </p>
          <button onClick={() => navigate("/daily-challenges")}>
          Coming Soon
          </button>
        </div>

        {/* FITBELL Products Option */}
        <div className="option">
          <img src="fitnessproduct.jpg" alt="FITBELL Products" />
          <h2>FITBELL Products</h2>
          <p>
            Explore high-quality fitness gear, supplements, and equipment
            recommended by FITBELL. Everything you need to support your fitness
            journey is just a click away.
          </p>
          <button onClick={() => navigate("/fitbell-products")}>
            Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
};

export default OptionPage;
