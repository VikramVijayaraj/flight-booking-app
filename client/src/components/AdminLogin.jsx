import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [adminCreds, setAdminCreds] = useState({
    email: "admin@company.com",
    password: "admin",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setAdminCreds((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      adminCreds.email === "admin@company.com" &&
      adminCreds.password === "admin"
    ) {
      navigate("/admin/dashboard");
    }
  }

  return (
    <>
      <form method="POST" onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            onChange={handleChange}
            type="email"
            className="form-control"
            name="email"
            placeholder="name@example.com"
            value={adminCreds.email}
          />
          <label htmlFor="email">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            onChange={handleChange}
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            value={adminCreds.password}
          />
          <label htmlFor="password">Password</label>
        </div>
        <button type="submit" className="btn btn-success">
          Login
        </button>
      </form>
    </>
  );
}
