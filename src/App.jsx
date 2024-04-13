import React from "react";
import { useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Nav from "./pages/Nav";
import Cart from "./pages/Cart";
import CheckoutPage from "./pages/CheckOutPage";
import Details from "./pages/Details";

/* admin */
import Dashboard from "./admin/Dashboard";
import User from "./admin/User";
import Products from "./admin/Products";
import Create from "./admin/Create";
import Order from "./admin/Order";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/nav" element={<Nav />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/productDetails/:id" element={<Details />} />
          <Route path="/profile" element={<Profile />} />

          {/* Admin */}
          <Route path="/admin/" element={<Dashboard />} />
          <Route path="/admin/users" element={<User />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/create-product" element={<Create />} />
          <Route path="/admin/orders" element={<Order />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
