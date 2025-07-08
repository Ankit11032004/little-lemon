import React from "react";
import lemonDessert from "../img/lemon_dessert.jpg";
import greekSalad from "../img/greek_salad.jpg";
import "../styles.css";

function Home() {
  return (
    <div className="home">
      <h2>Welcome to Little Lemon</h2>
      <p>Experience the best dining with us.</p>

      <div className="card-container">
        {/* Card 1 */}
        <div className="card" height="100px" width="100px">
          <img src={lemonDessert} alt="lemon" className="card-img" />
          <h3>Classic Italian Pasta</h3>
          <p>Rich, creamy Alfredo sauce over perfectly cooked fettuccine.</p>
        </div>

        {/* Card 2 */}
        <div className="card" height="100px" width="100px">
          <img src={greekSalad} alt="Greek Salad" className="card-img" />
          <h3>Fresh Greek Salad</h3>
          <p>Crunchy veggies with feta and olives, dressed in olive oil.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
