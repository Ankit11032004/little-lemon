import React from "react";
import "../Navbar.css";
import Logo from "../img/Logo.svg"; // adjust path if needed
import ProfileImg from "../img/profile.webp"; // Add your profile image here
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear login info (if stored in localStorage or sessionStorage)
    localStorage.removeItem("user");
    // Navigate to login page
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <img src={Logo} alt="Little Lemon Logo" className="logo" />
      
      <ul className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/reservationform">Reserve a Table</Link>
        <Link to="/contact">About Us</Link>
      </ul>

      <div className="profile-section">
        <img src={ProfileImg} alt="Profile" className="profile-img" />
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
