import React from "react";
import "../Navbar.css";
import Logo from "../img/Logo.svg"; // adjust path if needed


const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={Logo} alt="Little Lemon Logo" className="logo" />
      <ul>
  <li><a href="/home">Home</a></li>
  <li><a href="/menu">Menu</a></li>
  <li><a href="/reserve">Reserve a Table</a></li>
  <li><a href="/contact">Contact</a></li>
</ul>

    </nav>
  );
};

export default Navbar;
