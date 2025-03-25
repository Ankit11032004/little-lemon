import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReservationForm from "./components/ReservationForm";
import Home from "./components/Home";
import "./styles.css";

function App() {
  return (
    <div className="app">
     <Navbar/>
      <Header />
      <Home />
      <ReservationForm />
      <Footer />
    </div>
  );
}

export default App;
