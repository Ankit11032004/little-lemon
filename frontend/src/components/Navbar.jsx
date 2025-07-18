import React from "react";
import "../Navbar.css";
import Logo from "../img/Logo.svg"; // adjust path if needed
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={Logo} alt="Little Lemon Logo" className="logo" />
      <ul>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/reserve">Reserve a Table</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
