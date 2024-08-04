import { useLocation } from "react-router-dom";

import "./Card.css";

export default function Card({ flight, action }) {
  const location = useLocation();
  const currentPath = location.pathname.split("/").at(-1);

  function handleBooking() {
    action(flight.id);
  }

  function handleDelete() {
    action(flight.id);
  }

  return (
    <div>
      <div className="card">
        <div className="header card-header">
          <h5>{flight.flight_name}</h5>
          {currentPath === "dashboard" && <p onClick={handleDelete}>Delete</p>}
        </div>
        <div className="card-body">
          <div className="split">
            <div>
              <p>
                <small>Departure</small>
              </p>
              <h5 className="card-title">{flight.departure_airport}</h5>
              <p className="card-text">{flight.departure_time}</p>
            </div>
            <div>
              <p>
                <small>Arrival</small>
              </p>
              <h5 className="card-title">{flight.arrival_airport}</h5>
              <p className="card-text">{flight.arrival_time}</p>
            </div>
          </div>
          {currentPath === "bookings" ? undefined : (
            <p>{flight.total_seats} seat(s) available</p>
          )}
          {currentPath === "bookings" ||
          currentPath === "dashboard" ? undefined : flight.total_seats === 0 ? (
            <button
              onClick={handleBooking}
              className="btn btn-primary disabled"
            >
              Book
            </button>
          ) : (
            <button onClick={handleBooking} className="btn btn-primary">
              Book
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
