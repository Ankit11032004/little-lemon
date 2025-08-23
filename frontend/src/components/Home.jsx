// Import necessary libraries and components
import React from "react";
import Slider from "react-slick"; // ✅ You missed this
import lemonDessert from "../img/lemon_dessert.jpg";
import greekSalad from "../img/greek_salad.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./DishCard.css"; 
import "../styles.css"; // Custom styling

// Optional: If you want to use your own card component
// import DishCard from "./DishCard"; 

// Sample data for dishes
const dishes = [
  {
    name: "Lemon Dessert",
    img: lemonDessert,
    },
   {
    name: "Paneer Sabji",
    img: "/paneer.jpg", // Update the path as per your image location
  },
  {
    name: "Pani Puri",
    img: "pani-puri.jpg", // Update the path as per your image location
  },
   {
    name: "Greek Salad",
    img: greekSalad,
    },
   {
    name: "Punjabi Thali",
    img: "/punjabi-thali.jpg", // Update the path as per your image location
  },
  {
    name: "Rasmalai",
    img: "/rasmalai.jpg", // Update the path as per your image location
  },
   {
    name: "Idli Dosa",
    img: "/idli-dosa.jpg", // Update the path as per your image location
  },
];

function Home() {
  // Settings for the react-slick carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 1100,
    autoplay: true,
    autoplaySpeed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container dish-cards">
      <h2><b>Popular Dishesb</b></h2>

      {/* Carousel */}
      <Slider {...settings}>
        {dishes.map((dish, index) => (
          <div key={index} className="carousel-slide">
            <img
              src={dish.img}
              alt={dish.name}
              style={{
                width: "100%",
                height: "225px",
                objectFit: "cover",
                borderRadius: "10px"
              }}
            />
            <h3><b>{dish.name}</b></h3>
            </div>
        ))}
      </Slider>
    </div>
  );
}

export default Home;
