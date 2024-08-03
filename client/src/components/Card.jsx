import "./Card.css";

export default function Card({ flight, bookFlight }) {
  function handleBooking() {
    bookFlight(flight.id);
  }

  return (
    <div>
      <div className="card">
        <h5 className="card-header">{flight.flight_name}</h5>
        <div className="card-body">
          <div className="split">
            <div>
              <p>From:</p>
              <h5 className="card-title">{flight.departure_airport}</h5>
              <p className="card-text">{flight.departure_time}</p>
            </div>
            <div>
              <p>To:</p>
              <h5 className="card-title">{flight.arrival_airport}</h5>
              <p className="card-text">{flight.arrival_time}</p>
            </div>
          </div>
          <p>{flight.total_seats} seat(s) available</p>
          <button onClick={handleBooking} className="btn btn-primary">
            Book
          </button>
        </div>
      </div>
    </div>
  );
}
