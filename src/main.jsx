import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import Login from "./login.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./dashboard.jsx";
import Register from './register.jsx';

const router = createBrowserRouter([
  {

    path: "/login",
    element: <Login />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/register",
    element: <Register />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
