import axios from "axios";
import { useState } from "react";

import "./AddFlight.css";
import { useNavigate } from "react-router-dom";

export default function AddFlight() {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [flightData, setFlightData] = useState({
    flight_name: "",
    arrival_date: "",
    arrival_time: "",
    departure_date: "",
    departure_time: "",
    arrival_airport: "",
    departure_airport: "",
    total_seats: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFlightData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const arrival_datetime = `${flightData.arrival_date} ${flightData.arrival_time}`;
    const departure_datetime = `${flightData.departure_date} ${flightData.departure_time}`;

    const newFlight = {
      flight_name: flightData.flight_name,
      arrival_time: arrival_datetime,
      departure_time: departure_datetime,
      arrival_airport: flightData.arrival_airport,
      departure_airport: flightData.departure_airport,
      total_seats: flightData.total_seats,
    };

    try {
      await axios.post(`${API_URL}/add-flight`, newFlight);
      alert("Flight added successfully");
      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Error adding flight:", error);
    }
  }

  return (
    <form className="add-flight" onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          name="flight_name"
          placeholder="Flight Name"
          value={flightData.flight_name}
          required
        />
        <label htmlFor="flight_name">Flight Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          onChange={handleChange}
          type="date"
          className="form-control"
          name="arrival_date"
          placeholder="Arrival Date"
          value={flightData.arrival_date}
          required
        />
        <label htmlFor="arrival_date">Arrival Date</label>
      </div>
      <div className="form-floating mb-3">
        <input
          onChange={handleChange}
          type="time"
          className="form-control"
          name="arrival_time"
          placeholder="Arrival Time"
          value={flightData.arrival_time}
          required
        />
        <label htmlFor="arrival_time">Arrival Time</label>
      </div>
      <div className="form-floating mb-3">
        <input
          onChange={handleChange}
          type="date"
          className="form-control"
          name="departure_date"
          placeholder="Departure Date"
          value={flightData.departure_date}
          required
        />
        <label htmlFor="departure_date">Departure Date</label>
      </div>
      <div className="form-floating mb-3">
        <input
          onChange={handleChange}
          type="time"
          className="form-control"
          name="departure_time"
          placeholder="Departure Time<"
          value={flightData.departure_time}
          required
        />
        <label htmlFor="departure_time">Departure Time</label>
      </div>
      <div className="form-floating mb-3">
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          name="arrival_airport"
          placeholder="Arrival Airport"
          value={flightData.arrival_airport}
          required
        />
        <label htmlFor="arrival_airport">Arrival Airport</label>
      </div>
      <div className="form-floating mb-3">
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          name="departure_airport"
          placeholder="Departure Airport"
          value={flightData.departure_airport}
          required
        />
        <label htmlFor="departure_airport">Departure Airport</label>
      </div>
      <div className="form-floating mb-3">
        <input
          onChange={handleChange}
          type="number"
          className="form-control"
          name="total_seats"
          placeholder="Total Seats"
          value={flightData.total_seats}
          required
        />
        <label htmlFor="total_seats">Total Seats</label>
      </div>

      <button type="submit" className="btn btn-primary">
        Add Flight
      </button>
    </form>
  );
}
