import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Card from "./Card";
import Header from "./Header";

export default function LoggedUser() {
  const API_URL = import.meta.env.VITE_API_URL;
  const { userId } = useParams();
  const [flightsData, setFlightsData] = useState([]);

  async function fetchAllFlights() {
    const response = await axios.get(API_URL + "/get-all-flights");
    setFlightsData(response.data);
  }

  useEffect(() => {
    fetchAllFlights();
  }, []);

  async function bookFlight(flightId) {
    const data = {
      user_id: userId,
      flight_id: flightId,
    };
    const response = await axios.post(API_URL + "/book-flight", data);
    const newData = response.data[0];
    const updatedFlights = flightsData.map((flight) =>
      flight.id === newData.id
        ? { ...flight, total_seats: newData.total_seats }
        : flight
    );
    setFlightsData(updatedFlights);
  }

  return (
    <div>
      <Header />
      <ul>
        {flightsData.map((flight) => (
          <li key={flight.id}>
            <Card flight={flight} bookFlight={bookFlight} />
          </li>
        ))}
      </ul>
    </div>
  );
}
