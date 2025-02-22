import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false); // To toggle profile dropdown

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfile = () => {
    setShowProfile(!showProfile); // Show/hide profile dropdown
  };

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="fitbell">
          <span>F</span>it<span>B</span>ell
        </div>

        {/* Profile Icon */}
        <div className="user-icon" onClick={toggleProfile}>
          👤
          {showProfile && (
            <ul className="profile-dropdown">
              <li>Profile</li>
              <li>Settings</li>
              <li>Log Out</li>
            </ul>
          )}
        </div>

        {/* Hamburger Menu */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
        <a href="/" onClick={toggleMenu}>
  Home
</a>

        </li>
        <li>
          <ScrollLink to="workouts" smooth={true} duration={500} onClick={toggleMenu}>
            Workouts
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="diet" smooth={true} duration={500} onClick={toggleMenu}>
            Diet
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="plans" smooth={true} duration={500} onClick={toggleMenu}>
            Plans
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="contact" smooth={true} duration={500} onClick={toggleMenu}>
            Contact
          </ScrollLink>
        </li>
      </ul>

      <style>{`
      
         html {
           scroll-behavior: smooth;
           }

        .navbar {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px 20px;
          background-color: #0a0a0a;
          color: white;
          width: 100%;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
        }

        .navbar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 1200px;
        }

        .fitbell {
          font-size: 2.5em;
          font-weight: bold;
          color: #ea0a0a; /* Red */
        }

        .user-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #ddd;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.5em;
          color: #333;
          margin-left: 20px;
        }

        .profile-dropdown {
          position: absolute;
          top: 50px;
          right: 20px;
          background-color: #fff;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 5px;
          overflow: hidden;
          width: 150px;
          z-index: 1000;
        }

        .profile-dropdown li {
          list-style: none;
          padding: 10px;
          cursor: pointer;
          text-align: left;
          transition: background-color 0.3s;
        }

        .profile-dropdown li:hover {
          background-color: #f5f5f5;
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 20px;
        }

        .nav-links li {
          text-align: center;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          font-size: 1.1em;
          cursor: pointer;
        }

        .nav-links a:hover {
          color: #ff3c78;
        }

        .hamburger-menu {
          display: none;
          cursor: pointer;
        }

        .hamburger-menu svg {
          font-size: 2em;
        }

        /* Mobile View */
        @media screen and (max-width: 768px) {
          .nav-links {
            display: none;
            flex-direction: column;
            gap: 10px;
            position: absolute;
            top: 60px;
            right: 0;
            background-color: #0a0a0a;
            padding: 20px;
            width: 200px;
          }

          .nav-links.active {
            display: flex;
          }

          .hamburger-menu {
            display: block;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
