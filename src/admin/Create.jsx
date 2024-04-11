import React, { useState } from "react";
import Layout from "./Layout";
// import axios from "axios";

export default function CreateProduct() {
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    thumbnail: "",
    stock: 0,
    brand: "",
    category: "",
    colors: [],
    sizes: [],
    highlights: [],
    images: [],
    discountPrice: 0,
    deleted: false,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle file uploads
  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    // Assuming you're storing images in state as an array
    setProductData((prevData) => ({
      ...prevData,
      [name]: file,
    }));
  };

  // Function to handle array input changes
  const handleArrayChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value.split(",").map((item) => item.trim()), // Split string by comma and trim each item
    }));
  };

  return (
    <Layout>
      <div className="main md:ml-64">
        <div className="dashboard ">
          <div id="right-dashboard">
            <div className=" p-8 rounded shadow-md w-full">
              <h2 className="text-2xl font-bold mb-8 text-blue-500 text-center">
                📚 Create A Product 📚
              </h2>
              {/* Title */}
              <div className="mb-5">
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm text-gray-600"
                >
                  Product Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={productData.title}
                  onChange={handleChange}
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"
                  required
                />
              </div>

              {/* Description */}
              <div className="mb-5">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm text-gray-600"
                >
                  Description
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={productData.description}
                  onChange={handleChange}
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"
                  required
                />
              </div>

              {/* Price */}
              <div className="mb-5">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm text-gray-600"
                >
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={productData.price}
                  onChange={handleChange}
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"
                  required
                />
              </div>

              {/* Discount Percentage */}
              <div className="mb-5">
                <label
                  htmlFor="discountPercentage"
                  className="block mb-2 text-sm text-gray-600"
                >
                  Discount Percentage
                </label>
                <input
                  type="number"
                  id="discountPercentage"
                  name="discountPercentage"
                  value={productData.discountPercentage}
                  onChange={handleChange}
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"
                  required
                />
              </div>

              {/* Brand */}
              <div className="mb-5">
                <label
                  htmlFor="brand"
                  className="block mb-2 text-sm text-gray-600"
                >
                  Brand
                </label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  value={productData.brand}
                  onChange={handleChange}
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"
                  required
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="stock"
                  className="block mb-2 text-sm text-gray-600"
                >
                  Stock
                </label>
                <input
                  type="number"
                  id="stock"
                  name="stock"
                  value={productData.stock}
                  onChange={handleChange}
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"
                  required
                />
              </div>

              {/* Category */}
              <div className="mb-5">
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm text-gray-600"
                >
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={productData.category}
                  onChange={handleChange}
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"
                  required
                />
              </div>

              {/* Colors */}
              <div className="mb-5">
                <label
                  htmlFor="colors"
                  className="block mb-2 text-sm text-gray-600"
                >
                  Colors (Separate by commas)
                </label>
                <input
                  type="text"
                  id="colors"
                  name="colors"
                  value={productData.colors.join(", ")} // Join array into string
                  onChange={handleArrayChange}
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"
                  required
                />
              </div>

              {/* Sizes */}
              <div className="mb-5">
                <label
                  htmlFor="sizes"
                  className="block mb-2 text-sm text-gray-600"
                >
                  Sizes (Separate by commas)
                </label>
                <input
                  type="text"
                  id="sizes"
                  name="sizes"
                  value={productData.sizes.join(", ")} // Join array into string
                  onChange={handleArrayChange}
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"
                  required
                />
              </div>

              {/* Highlights */}
              <div className="mb-5">
                <label
                  htmlFor="highlights"
                  className="block mb-2 text-sm text-gray-600"
                >
                  Highlights (Separate by commas)
                </label>
                <input
                  type="text"
                  id="highlights"
                  name="highlights"
                  value={productData.highlights.join(", ")} // Join array into string
                  onChange={handleArrayChange}
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"
                  required
                />
              </div>

              <div className="flex">
                <div className="mb-5">
                  <label
                    htmlFor="thumbnail"
                    className="block mb-2 text-sm text-gray-600"
                  >
                    Thumbnail
                  </label>
                  <input
                    type="file"
                    id="thumbnail"
                    name="thumbnail"
                    onChange={handleFileChange}
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="images"
                    className="block mb-2 text-sm text-gray-600"
                  >
                    Images
                  </label>
                  <input
                    type="file"
                    id="images"
                    name="images"
                    onChange={handleFileChange}
                    multiple
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"
                    required
                  />
                </div>
              </div>

              <div className="flex  items-center justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
