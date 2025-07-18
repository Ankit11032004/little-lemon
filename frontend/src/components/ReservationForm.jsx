import React, { useState } from "react";
import "../styles.css";

function ReservationForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/auth/ReservataionForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
    alert(`Reservation made for ${name} on ${date} at ${time}`);
  };

  return (
    <div className="reservation-form">
      <h2>Reserve a Table</h2>
      <form onSubmit={handleSubmit}>
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
