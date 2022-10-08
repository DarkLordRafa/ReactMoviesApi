import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import "./app.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

