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

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <Link to="/admin/dashboard/add-flight">
        <button className="btn btn-primary">+ Add Flight</button>
      </Link>
      <ul>
        {flightsData.map((flight) => (
          <li key={flight.id}>
            <Card flight={flight} />
          </li>
        ))}
      </ul>
    </div>
  );
}
