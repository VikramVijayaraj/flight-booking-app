import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import NotFoundPage from "./components/NotFoundPage.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import LoggedUser from "./components/LoggedUser.jsx";
import Bookings from "./components/Bookings.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/users/:userId",
    element: <LoggedUser />,
  },
  {
    path: "/users/:userId/bookings",
    element: <Bookings />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
