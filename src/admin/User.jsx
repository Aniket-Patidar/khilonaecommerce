import React, { useState } from "react";
import Layout from "./Layout";
import { RiSearchLine } from "react-icons/ri";

const User = () => {
  const userData = [
    {
      username: "JohnDoe123",
      email: "john.doe@example.com",
      totalOrders: 5,
      mobile: "1234567890",
    },
    {
      username: "JaneSmith456",
      email: "jane.smith@example.com",
      totalOrders: 3,
      mobile: "9876543210",
    },
    {
      username: "AliceJohnson789",
      email: "alice.johnson@example.com",
      totalOrders: 7,
      mobile: "5551234567",
    },
    // Add more user data as needed
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = userData.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="md:ml-64 p-4">
      <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2">
        <RiSearchLine className="text-gray-500" />
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search..."
          className="ml-2 outline-none bg-transparent placeholder-gray-500"
        />
      </div>

      <div className="overflow-x-auto mt-8">
        <table className="min-w-full border rounded-lg overflow-hidden">
          <thead className="bg-sky-800 text-white">
            <tr>
              <th className="py-2 px-4 font-semibold">Username</th>
              <th className="py-2 px-4 font-semibold">Email</th>
              <th className="py-2 px-4 font-semibold">Total Orders</th>
              <th className="py-2 px-4 font-semibold">Mobile Number</th>
            </tr>
          </thead>
          <tbody className="bg-orange-100">
            {filteredUsers.map((user, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-orange-100" : "bg-white"}
              >
                <td className="py-2 px-4 text-center">{user.username}</td>
                <td className="py-2 px-4 text-center">{user.email}</td>
                <td className="py-2 px-4 text-center">{user.totalOrders}</td>
                <td className="py-2 px-4 text-center">{user.mobile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </Layout>
  );
};

export default User;
