import axios from "axios";
import { useEffect, useState } from "react";

export default function Flights() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [flightsData, setFlightsData] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL + "/all-flights")
      .then((response) => setFlightsData(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ul>
        {flightsData.map((flight, index) => (
          <li key={index}>{flight}</li>
        ))}
      </ul>
    </div>
  );
}
