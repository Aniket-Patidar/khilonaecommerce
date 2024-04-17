import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div className="page-content">{children}</div>
    </div>
  );
};

export default Layout;
