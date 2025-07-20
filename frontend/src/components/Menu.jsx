import React from "react";
import DishCard from "./DishCard"; // Create this component
import "../Menu.css"; // Optional: custom styles
//Images
import KhirImg from "../img/khir.jpg";
import Jalebi from "../img/Jalebi.jpg";
import salad from "../img/greek_salad.jpg";
import bruschetta from "../img/bruchetta.svg";
import italian from "../img/lemon_dessert.jpg";
const dishes = [
   {
    name: "Khir",
    description: "Traditional Indian rice pudding slow-cooked with milk, sugar, cardamom, and garnished with nuts.",
    price: "₹299",
    image: KhirImg,
  },
  {
    name: "Paneer Sabji",
    description: "Cottage cheese cooked in a rich, spiced tomato gravy with fresh herbs.",
    price: "₹279",
    image: "/paneer.jpg", // Update the path as per your image location
  },
  {
    name: "Pani Puri",
    description: "Crispy hollow puris filled with spicy, tangy water, potatoes, and chickpeas—a classic Indian street snack.",
    price: "₹149",
    image: "pani-puri.jpg", // Update the path as per your image location
  },
   {
    name: "Punjabi Thali",
    description: "A wholesome platter featuring a variety of Punjabi dishes, including dal, sabji, roti, rice, salad, and dessert.",
    price: "₹399",
    image: "/punjabi-thali.jpg", // Update the path as per your image location
  },
  {
    name: "Rasmalai",
    description: "Soft cottage cheese dumplings soaked in sweet, saffron-flavored milk and garnished with pistachios.",
    price: "₹199",
    image: "/rasmalai.jpg", // Update the path as per your image location
  },
   {
    name: "Idli Dosa",
    description: "A South Indian combo of soft steamed idlis and crispy dosas, served with chutney and sambar.",
    price: "₹249",
    image: "/idli-dosa.jpg", // Update the path as per your image location
  },
  {
    name: "Thali",
    description: "A classic Indian thali featuring paneer sabji and Lachha paratha.",
    price: "₹359",
    image: "/Thali.jpg", // Update the path as per your image location
  },
   {
    name: "Jalebi",
    description: "Crispy, golden spirals soaked in fragrant sugar syrup—a popular Indian sweet.",
    price: "₹129",
    image: Jalebi, // Uses the imported Jalebi image
  },
    {name: "Fresh Greek Salad",
    description: "Crunchy veggies with feta and olives, dressed in olive oil.",
    price: "₹199",
    image: salad,
  },
   {
    name: "Bruschetta",
    description: "Grilled bread topped with fresh tomatoes, garlic, basil, and olive oil.",
    price: "₹179",
    image: bruschetta, // Update the path as per your image location
  },
   {
    name: "Classic Italian Pastries",
    description: "A delightful assortment of traditional Italian pastries, perfect for dessert lovers.",
    price: "₹249",
    image: italian, // Update the path as per your image location
  },
  ]

const Menu = () => {
  return (
    <main className="menu-container">
      <h1 className="menu-heading">Our Menu</h1>
      <div className="dish-list">
        {dishes.map((dish, index) => (
          <DishCard key={index} dish={dish} />
        ))}
      </div>
    </main>
  );
};

export default Menu;
