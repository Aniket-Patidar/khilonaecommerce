import React, { useState } from "react";
import Layout from "./Layout";
import { RiDeleteBin6Line, RiSearchLine } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";

// Dummy product data
const products = [
  {
    id: 1,
    name: "Product One",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 99.99,
    image:
      "https://imgs.search.brave.com/vIHRmOFTcU6iKaCuY1WyN5g_0G_9Is3l9AZ9QgVo9zw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY4/NjI5ODEzL3Bob3Rv/L2RvbmF0aW9uLWJv/eC1mdWxsLW9mLXRv/eXMtYW5kLXN0dWZm/ZWQtYW5pbWFscy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/azRnQjQ5SE5meV9L/UU1vZ3psVHAwZjc5/YVA1T3hBMTFxVGNZ/bE5iRXZLaz0",
  },
  {
    id: 2,
    name: "Product Two",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 129.99,
    image:
      "https://imgs.search.brave.com/8GIEEeptLudS27wqy7FKDF1QbwARgaWki8GQdI2Q19w/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODU1/NzYzMzE2L3Bob3Rv/L2h1Z2UtcGlsZS1v/Zi10b3lzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz01SmVu/b0VGbmNaVnFuQlhX/WHZra25ZRjNpSFl2/SzFFYU1zemVpUjMy/QTZrPQ",
  },
  {
    id: 3,
    name: "Product Three",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 149.99,
    image:
      "https://imgs.search.brave.com/AdlO15FB_eXkKchIK_A81lXQPpDKV5LsMz7eXXl8Dmk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE3/ODIwNzY2Ny9waG90/by9zZXQtb2Yta2lk/cy10b3lzLW9uLWJs/dWUtYmFja2dyb3Vu/ZC53ZWJwP2I9MSZz/PTYxMng2MTImdz0w/Jms9MjAmYz12QXhC/SjNxRTJLTWs0VEYz/RVNKc251S0cwcG12/Zm1QT2NMR0F4WXpY/ZDI0PQ",
  },
  {
    id: 4,
    name: "Product Four",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 79.99,
    image: "https://i.imgur.com/xdbHo4E.png",
  },
  {
    id: 5,
    name: "Product Five",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 109.99,
    image: "https://i.imgur.com/xdbHo4E.png",
  },
  {
    id: 6,
    name: "Product Six",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 159.99,
    image: "https://i.imgur.com/xdbHo4E.png",
  },
  // Add more products as needed
];

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="md:ml-64 p-4 flex flex-col items-center">
        <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2 w-full sm:w-auto">
          <RiSearchLine className="text-gray-500" />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search..."
            className="ml-2 outline-none bg-transparent placeholder-gray-500 w-full"
          />
        </div>
        <div className="flex flex-wrap justify-center items-start">
          {filteredProducts.map((product) => (
            <>
              <Link to={"/product-details"}>
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden w-full sm:w-72 mx-4 my-4"
                >
                  <div className="flex justify-center items-center h-40 bg-gray-200">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="px-4 py-3">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center mt-3">
                      <div className="text-base font-semibold text-gray-800">
                        ${product.price}
                      </div>
                      <div className="flex gap-[1px]">
                        <button className="px-3 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 text-base">
                          <CiEdit />
                        </button>
                        <button className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 text-base">
                          <RiDeleteBin6Line />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
    </Layout>
  );
}
