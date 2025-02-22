import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css"; // Import your CSS file here

// Importing Components
import MainPage from "./components/MainPage"; // Main page component
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkoutSessions from "./components/WorkoutSessions";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import BMICalculator from "./components/BMICalculator";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage"; // Import Login Page
import OptionsPage from "./components/OptionsPage"; // Import Options Page

// Import new components for specific pages
import HomeWorkout from "./components/HomeWorkout";
import GymWorkout from "./components/GymWorkout";
import Yoga from "./components/Yoga";
import DietPlan from "./components/DietPlan";
import DailyChallenges from "./components/DailyChallenges";
import FitbellProducts from "./components/FitbellProducts";

const App = () => {
  return (
    <Router>
      <ToastContainer theme="dark" position="top-center" />

      <Routes>
        {/* Directly render MainPage as the starting page */}
        <Route path="/" element={<MainPage />} />

        {/* Route for Login Page */}
        <Route path="/login" element={<LoginPage />} />

        {/* Route for the actual website */}
        <Route
          path="/home"
          element={
            <div>
              <Navbar />
              <Hero />
              <WorkoutSessions />
              <Gallery />
              <Pricing />
              <Contact />
              <BMICalculator />
              <Footer />
            </div>
          }
        />

        {/* Route for the Options Page */}
        <Route path="/options" element={<OptionsPage />} />

        {/* Routes for all specific options pages */}
        <Route path="/home-workout" element={<HomeWorkout />} />
        <Route path="/gym-workout" element={<GymWorkout />} />
        <Route path="/yoga" element={<Yoga />} />
        <Route path="/DietPlan" element={<DietPlan />} />
        <Route path="/daily-challenges" element={<DailyChallenges />} />
        <Route path="/fitbell-products" element={<FitbellProducts />} />

        {/* New Route for Contact Page */}
        <Route
          path="/contact"
          element={
            <div>
              <Navbar />
              <Contact />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
