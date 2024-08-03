import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Card from "./Card";

export default function Bookings() {
  const API_URL = import.meta.env.VITE_API_URL;
  const { userId } = useParams();
  const [bookings, setBookings] = useState([]);

  async function fetchBookings() {
    const response = await axios.get(`${API_URL}/bookings/${userId}`);
    setBookings(response.data);
  }

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div>
      <h2>My Bookings</h2>
      {bookings.length > 0 ? (
        <ul>
          {bookings.map((booking) => (
            <li key={booking.id}>
              <Card flight={booking} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No bookings found!</p>
      )}
    </div>
  );
}
