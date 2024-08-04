import { Link, useParams } from "react-router-dom";

import "./Header.css";

export default function Header() {
  const { userId } = useParams();

  return (
    <div className="navbar">
      <Link to={`/users/${userId}/bookings`}>
        <button type="button" className="btn btn-outline-dark">
          My Bookings
        </button>
      </Link>

      <Link to="/">
        <button type="button" className="btn btn-outline-danger">
          Logout
        </button>
      </Link>
    </div>
  );
}
