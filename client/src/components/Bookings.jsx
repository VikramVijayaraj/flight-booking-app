import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import "./Bookings.css";
import Card from "./Card";

export default function Bookings() {
  const API_URL = import.meta.env.VITE_API_URL;
  const { userId } = useParams();
  const location = useLocation();
  const pathname = location.pathname.split("/").at(-1);

  const [bookings, setBookings] = useState([]);

  async function fetchBookings() {
    if (pathname === "all-bookings") {
      const response = await axios.get(API_URL + "/all-bookings");
      setBookings(response.data);
    } else {
      const response = await axios.get(`${API_URL}/bookings/${userId}`);
      setBookings(response.data);
    }
  }

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div>
      <h2 className="heading">
        {pathname === "all-bookings" ? "All Bookings" : "My Bookings"}
      </h2>
      {bookings.length > 0 ? (
        <ul>
          {bookings.map((booking) => (
            <li key={booking.id}>
              <Card flight={booking} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="not-found">No bookings found!</p>
      )}
    </div>
  );
}
