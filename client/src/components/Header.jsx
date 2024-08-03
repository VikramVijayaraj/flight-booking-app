import { Link, useParams } from "react-router-dom";

export default function Header() {
  const { userId } = useParams();

  return (
    <div>
      <Link to={`/users/${userId}/bookings`}>
        <button type="button" className="btn btn-outline-dark">
          My Bookings
        </button>
      </Link>

      <Link to="/">
        <button type="button" className="btn btn-outline-dark">
          Logout
        </button>
      </Link>
    </div>
  );
}
