import React from "react";
import "./DishCard.css"; // Optional: card styling

const DishCard = ({ dish }) => {
  return (
    <div className="dish-card">
      <img src={dish.image} alt={dish.name} className="dish-image" />
      <h3><b>{dish.name}</b></h3>
      <p>{dish.description}</p>
      <p className="dish-price">{dish.price}</p>
    </div>
  );
};

export default DishCard;
