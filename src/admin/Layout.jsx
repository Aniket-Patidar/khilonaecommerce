import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

const Layout = ({ children }) => {

  return (
    <div>
      <Sidebar></Sidebar>
      <div className="page-content">{children}</div>
    </div>
  );
};

export default Layout;