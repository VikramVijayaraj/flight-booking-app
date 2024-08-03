import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <h1 className="text-5xl">404 Page Not Found!</h1>
      <Link to="/">Back to Home page</Link>
    </>
  );
}

export default NotFoundPage;
