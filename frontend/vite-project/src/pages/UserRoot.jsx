import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function UserRoot() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
