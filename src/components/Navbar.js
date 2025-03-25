import React from "react";
import "../Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Little Lemon</h1>
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
