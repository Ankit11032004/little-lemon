import React from "react";
import "../Header.css";
import heroImage from "../img/restauranfood.jpg"; // Replace with your actual image

function Header() {
  return (
    <header className="header-section">
      <div className="header-text">
        <h1 className="restaurant-name">Little Lemon</h1>
        <h2 className="location">Kolkata</h2>
        <p className="description">
          We are a family-owned Mediterranean restaurant focused on traditional
          recipes served with a modern twist.
        </p>
        <button className="reserve-button">Reserve a Table</button>
      </div>

      <div className="header-image-container">
        <img src={heroImage} alt="Restaurant Dish" className="header-image" />
      </div>
    </header>
  );
}

export default Header;
