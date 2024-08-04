import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./LoggedUser.css";
import Card from "./Card";
import Header from "./Header";

export default function LoggedUser() {
  const API_URL = import.meta.env.VITE_API_URL;
  const { userId } = useParams();
  const [flightsData, setFlightsData] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  async function fetchAllFlights() {
    const response = await axios.get(API_URL + "/get-all-flights");
    console.log(response.data);
    setOriginalData(response.data);
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
    alert("Flight booked!");
    const updatedFlights = flightsData.map((flight) =>
      flight.id === newData.id
        ? { ...flight, total_seats: newData.total_seats }
        : flight
    );
    setOriginalData(updatedFlights);
    setFlightsData(updatedFlights);
  }

  function handleDate(event) {
    const { value } = event.target;
    if (!value) {
      setFlightsData(originalData);
      return;
    }

    const filteredData = originalData.filter((d) => {
      const oldDate = new Date(d.departure_time);
      const newDate = new Date(value);

      // Convert newD to UTC for comparison
      const newDateUTC = new Date(
        newDate.getTime() - newDate.getTimezoneOffset() * 60000
      );
      return oldDate.getTime() === newDateUTC.getTime();
    });
    setFlightsData(filteredData);
  }

  return (
    <div>
      <Header />
      <div className="search">
        <h6 className="text-body-secondary">
          Search by departure data and time
        </h6>
        <input
          className="form-control"
          onChange={handleDate}
          type="datetime-local"
          name="date"
        />
      </div>

      <ul>
        {flightsData.map((flight) => (
          <li key={flight.id}>
            <Card flight={flight} action={bookFlight} />
          </li>
        ))}
      </ul>
    </div>
  );
}
