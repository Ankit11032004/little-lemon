import { useState } from "react";
import "../styles.css";

function ReservationForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user")).user;
    const _id = user?._id;
    console.log(name, _id, date, time);

    if (!name || !_id || !date || !time) {
      console.log(name, _id, date, time);
      alert("All fields are required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/reservationForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id, name, date, time }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      alert("Reservation successful!");
      setName("");
      setDate("");
      setTime("");

    } catch (err) {
      console.error("Reservation error:", err);
      alert(err.message);
    }
  };

  return (
    <div className="reservation-form"  
     style={{
    backgroundImage: "url('restaurant.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "50vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }}>
      
      <form onSubmit={handleSubmit} style={{ background: "rgba(255, 255, 255, 0.85)", padding: "4rem", borderRadius: "10px" }}>
       <h2><b>Reserve a Table</b></h2>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="bg-white text-black p-2 rounded"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="bg-white text-black p-2 rounded"
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          className="bg-white text-black p-2 rounded"
        />
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
}

export default ReservationForm;
