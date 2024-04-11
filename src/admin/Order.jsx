import React, { useState } from "react";
import Layout from "./Layout";
import { RiSearchLine } from "react-icons/ri";

const Order = () => {
  const data = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      job: "Software Engineer",
      status: "Pending",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      job: "Data Analyst",
      status: "Accepted",
    },
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      job: "Web Developer",
      status: "Rejected",
    },
    {
      name: "Michael Brown",
      email: "michael.brown@example.com",
      job: "UI/UX Designer",
      status: "Pending",
    },
    {
      name: "Emma Wilson",
      email: "emma.wilson@example.com",
      job: "Marketing Specialist",
      status: "Accepted",
    },
    {
      name: "David Miller",
      email: "david.miller@example.com",
      job: "Project Manager",
      status: "Rejected",
    },
    {
      name: "Olivia White",
      email: "olivia.white@example.com",
      job: "Content Writer",
      status: "Pending",
    },
    {
      name: "Robert Harris",
      email: "robert.harris@example.com",
      job: "Network Administrator",
      status: "Accepted",
    },
    {
      name: "Sophia Clark",
      email: "sophia.clark@example.com",
      job: "Financial Analyst",
      status: "Rejected",
    },
    {
      name: "William Martinez",
      email: "william.martinez@example.com",
      job: "Database Administrator",
      status: "Pending",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = data.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
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
              <th className="py-2 px-4 font-semibold">Name</th>
              <th className="py-2 px-4 font-semibold">Email</th>
              <th className="py-2 px-4 font-semibold">Job Applied</th>
              <th className="py-2 px-4 font-semibold">Status</th>
              <th className="py-2 px-4 font-semibold">Update Status</th>
            </tr>
          </thead>
          <tbody className="bg-orange-100">
            {filteredProducts.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-orange-100" : "bg-white"}
              >
                <td className="py-2 px-4 text-center">{item.name}</td>
                <td className="py-2 px-4 text-center">{item.email}</td>
                <td className="py-2 px-4 text-center">{item.job}</td>
                <td className="py-2 px-4 text-center">{item.status}</td>
                <td className="py-2 px-4 text-center">
                  <select className="bg-white border rounded-md py-1 px-2">
                    <option value="Pending">Pending</option>
                    <option value="Accepted">Accept</option>
                    <option value="Rejected">Reject</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </Layout>
  );
};

export default Order;
