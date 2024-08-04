import axios from "axios";
import { useEffect, useState } from "react";

import "./AdminDashboard.css";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [flightsData, setFlightsData] = useState([]);

  async function fetchAllFlights() {
    const response = await axios.get(API_URL + "/get-all-flights");
    setFlightsData(response.data);
  }

  useEffect(() => {
    fetchAllFlights();
  }, []);

  async function deleteFlight(flight_id) {
    await axios.get(`${API_URL}/remove-flight/${flight_id}`);
    alert("Flight deleted!");
    await fetchAllFlights();
  }

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="admin-heading">
        <Link to="/admin/dashboard/all-bookings">
          <button className="btn btn-outline-dark">All Bookings</button>
        </Link>
        <Link to="/admin/login">
          <button className="btn btn-outline-danger">Logout</button>
        </Link>
      </div>
      <Link to="/admin/dashboard/add-flight">
        <button className="add-btn btn btn-primary">+ Add Flight</button>
      </Link>
      <ul>
        {flightsData.map((flight) => (
          <li key={flight.id}>
            <Card flight={flight} action={deleteFlight} />
          </li>
        ))}
      </ul>
    </div>
  );
}
