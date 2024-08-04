import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./Login.css";

export default function Signup() {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [creds, setCreds] = useState({
    email: "",
    password: "",
    retypePassword: "",
  });

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

    if (creds.password === creds.retypePassword) {
      await axios
        .post(API_URL + "/signup", creds)
        .then((response) => {
          navigate("/");
          console.log(response.data);
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <form className="login-form" method="POST" onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input
          onChange={handleChange}
          type="email"
          className="form-control"
          name="email"
          placeholder="name@example.com"
          value={creds.email}
          required
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
          required
        />
        <label htmlFor="password">Password</label>
      </div>
      <div className="form-floating mb-3">
        <input
          onChange={handleChange}
          type="password"
          className="form-control"
          name="retypePassword"
          placeholder="Password"
          value={creds.retypePassword}
          required
        />
        <label htmlFor="retypePassword">Retype Password</label>
      </div>
      <button type="submit" className="btn btn-success">
        Create Account
      </button>
      <div>
        <Link to="/">Already have a account? Login here</Link>
      </div>
    </form>
  );
}
