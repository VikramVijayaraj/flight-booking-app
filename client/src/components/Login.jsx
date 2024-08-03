import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setCreds((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (creds.email && creds.password) {
      try {
        const response = await axios.post(API_URL + "/login", creds);
        let userId = response.data;
        if (userId) {
          navigate(`/users/${userId}`);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input
          onChange={handleChange}
          type="email"
          className="form-control"
          name="email"
          placeholder="name@example.com"
          value={creds.email}
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
          value={creds.password}
        />
        <label htmlFor="password">Password</label>
      </div>
      <button type="submit" className="btn btn-success">
        Login
      </button>
      <Link to="/signup">Create a new account</Link>
    </form>
  );
}
