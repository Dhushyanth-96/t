import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./headerStyling.css";

const Header = ({ loggedIn, onLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false); // State to toggle dropdown visibility
  const authToken = localStorage.getItem("authToken");
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    localStorage.removeItem("authToken");
    localStorage.removeItem("userId");
    window.location.href = "/";
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown); // Toggle dropdown visibility
  };

  const registerPage = () => {
    navigate('/registrationForm');
  }

  return (
    <header className="header">
      <div className="logo">
        <h1>PlanYourTrip</h1>
      </div>
      <nav className="navbar">
        <span className="nav-link">
          <a href="/">Home</a>
        </span>
        <span className="nav-link">
          <a href="/tours">Tours</a>
        </span>
        <span>
          <button  className="login-button1" onClick={registerPage}>Register</button>
        </span>
        {loggedIn || authToken ? (
          <span className="nav-link">
            <div className="dropdown" onClick={toggleDropdown}>
              Account &#9660;
              {showDropdown && (
                <div className="dropdown-content">
                  <a href="/">Profile</a>
                  <a href="/bookingDetails">Booking Details</a>
                  <a href="/loginForm" onClick={handleLogout}>
                    Logout
                  </a>
                </div>
              )}
            </div>
          </span>
        ) : (
          <span className="nav-link">
            <a href="/loginForm">Login</a>
          </span>
        )}
      </nav>
    </header>
  );
};

export default Header;