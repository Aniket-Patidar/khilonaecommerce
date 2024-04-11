import React, { useState } from "react";
import Layout from "./Layout";

import { FaRegUser } from "react-icons/fa";
import { LiaProductHunt } from "react-icons/lia";
import { FiShoppingCart } from "react-icons/fi";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

const data = [
  { date: "Day 1", users: 10, productsSold: 5 },
  { date: "Day 2", users: 15, productsSold: 8 },
  { date: "Day 3", users: 20, productsSold: 10 },
  { date: "Day 4", users: 18, productsSold: 7 },
  { date: "Day 5", users: 25, productsSold: 12 },
  { date: "Day 6", users: 22, productsSold: 9 },
  { date: "Day 7", users: 28, productsSold: 15 },
];

function Dashboard() {
  return (
    <Layout>
      <>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n        .admin-content .cart {\n            background: linear-gradient(to right, #007BFF 50%, #fff 50%);\n            background-size: 200% 100%;\n            background-position: right bottom;\n            transition: all 0.5s ease-out;\n        }\n\n        .admin-content .cart:hover {\n            background-position: left bottom;\n        }\n\n        .admin-content .cart h2 {\n            margin-top: 5px;\n        }\n\n        @media screen and (max-width: 854px) {\n            .admin-content .cart h2 {\n                font-size: 14px;\n            }\n        }\n\n        table {\n            width: 100%;\n            border-collapse: collapse;\n            margin-top: 20px;\n        }\n\n        table,\n        th,\n        td {\n            border: 1px solid #ddd;\n        }\n\n        th,\n        td {\n            text-align: left;\n            padding: 8px;\n        }\n\n        th {\n            background-color: #303956;\n            color: white;\n        }\n\n        tr:nth-child(even) {\n            background-color: #f2f2f2;\n        }\n    ",
          }}
        />
        <div className="main  md:ml-64">
          <div className="dashboard">
            <div id="right-dashboard ">
              <div className="nav flex items-center justify-between w-full py-4 px-6 border-b-2 border-gray-200 	">
                <div className="left flex items-center gap-3">
                  <img
                    className="h-[40px]"
                    src="/images/tcps logo.jpeg"
                    alt=""
                  />
                  <h1 className="font-semibold"> Admin Panel</h1>
                </div>
              </div>
              <div className="flex  items-center justify-center">
                <div className="admin-content p-6 flex flex-col sm:flex-row gap-6">
                  <div className="cart h-[150px] w-[250px] md:w-[280px] flex items-center justify-center flex-col sm:w-[300px] bg-[#fff] border-l-2 border-sky-500 rounded-lg text-center hover:text-[#fff]">
                    <LiaProductHunt className="mx-auto h-[40px] w-[40px] " />
                    <h2>Total Product : 28</h2>
                  </div>
                  <div className="cart h-[150px] w-[250px] md:w-[280px] flex items-center justify-center flex-col bg-[#fff] border-l-2 border-sky-500 rounded-lg text-center hover:text-[#fff]">
                    <FaRegUser className="mx-auto h-[40px] w-[40px] " />
                    <h2>Total User : 15</h2>
                  </div>
                  <div className="cart h-[150px] w-[250px] md:w-[280px] flex items-center justify-center flex-col bg-[#fff] border-l-2 border-sky-500 rounded-lg text-center hover:text-[#fff]">
                    <FiShoppingCart className="mx-auto h-[40px] w-[40px] " />
                    <h2>All Orders : 42738 ₹</h2>
                  </div>
                </div>
              </div>
              <ResponsiveContainer
                className="mt-16 mx-auto lg:w-[80%] w-full"
                width="80%"
                height={300}
              >
                <BarChart
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="users" fill="#4080ED" name="Users" />
                  <Bar
                    dataKey="productsSold"
                    fill="#82ca9d"
                    name="Products Sold"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}

export default Dashboard;