import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Nav";
import Layout from "../components/Layout";

const Cart = () => {
  const [open, setOpen] = useState(true);
  const [items, setItems] = useState([]); // Dummy data for items
  const [loadingCart, setLoadingcart] = useState(true); // Dummy loading state

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      // Define your dummy data here
      const dummyData = [
        {
          id: 1,
          product: {
            title: "Sample Product 1",
            thumbnail:
              "https://imgs.search.brave.com/Z7O1PkMEgfZf6uxKqok4a0JsCzWq-RDDkDE3JHX8_7g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjI0/MzkzMTQwL3Bob3Rv/L2dpZnRzLWluLXRo/ZS1iYWcuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPW9KVWJv/eHZ4c3FtdnZQak5u/WHlRRFdqS0ZINnBw/bUhYeE1fTTNJWTlV/Qmc9",
            price: 20,
            stock: 10,
          },
          color: "Red",
          quantity: 2,
        },
        {
          id: 2,
          product: {
            title: "Sample Product 2",
            thumbnail:
              "https://imgs.search.brave.com/iCpU8cmgecw7r5l4IptjLn7arRn58bWEFCNf3iH4eak/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzc0LzQ0LzI4/LzM2MF9GXzc0NDQy/ODUwX0MwUHNUV1BG/bE9md2NQQTNBeWJZ/ZWZYREJtbldWc1dY/LmpwZw",
            price: 30,
            stock: 5,
          },
          color: "Blue",
          quantity: 1,
        },
        // Add more dummy data as needed
      ];

      setItems(dummyData);
      setLoadingcart(false); // Set loading to false after dummy data is loaded
    }, 1500); // Simulate loading delay of 1.5 seconds

    // Clear timeout to prevent memory leaks
    return () => clearTimeout(timer);
  }, []);

  const totalItem = items.reduce((accumulator, currentValue) => {
    return accumulator + 1 * currentValue.quantity;
  }, 0);

  const totalPrice = items.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity * currentValue.product.price;
  }, 0);

  // Function to handle removing an item from the cart
  function handleRemoveItem(itemToRemove) {
    setItems(items.filter((item) => item.id !== itemToRemove.id));
  }

  // Function to handle updating quantity of an item
  function handleUpdateQuantity(type, itemToUpdate) {
    const updatedItems = items.map((item) => {
      if (item.id === itemToUpdate.id) {
        if (type === "add" && item.quantity < item.product.stock) {
          return { ...item, quantity: item.quantity + 1 };
        } else if (type === "sub" && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });

    setItems(updatedItems);
  }

  return (
    <>
      {/* <Navbar></Navbar> */}
      <Layout>
        {loadingCart && (
          <div className="w-full flex items-center justify-center pt-[140px] md:pt-[130px]">
            {/* <GridLoader color="#36d7b7"></GridLoader> */}
            <p>Loading...</p>
          </div>
        )}

        {items.length ? (
          <div className="mx-auto max-w-5xl  px-4 sm:px-6 sm:py-20  lg:px-8 pt-[140px] md:pt-[130px]">
            <div className="border-gray-200 px-4 py-6 md:py-0 sm:px-6">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 p-4">
                    Cart
                  </h1>
                  {items.map((product) => (
                    <li key={product.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={product.product.thumbnail}
                          alt={product.product.title}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a to={product.to}>{product.product.title}</a>
                              <span
                                className={`ml-2 ${
                                  product.product.stock
                                    ? "bg-green-200 text-green-600 py-1"
                                    : "bg-red-200 text-red-600 py-1"
                                }  px-3 rounded-full text-xs`}
                              >
                                stock : {product.product.stock}
                              </span>
                            </h3>
                            <p className="ml-4">
                              ${product.product.price * product.quantity}
                            </p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {product.color}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <div className="text-gray-500">
                            <button
                              className="p-2 text-2xl"
                              onClick={() =>
                                handleUpdateQuantity("sub", product)
                              }
                            >
                              -
                            </button>
                            <span>{product.quantity}</span>
                            <button
                              className="px-2 text-2xl"
                              onClick={() =>
                                handleUpdateQuantity("add", product)
                              }
                            >
                              +
                            </button>
                          </div>
                          <div className="flex">
                            <button
                              type="button"
                              onClick={() => handleRemoveItem(product)}
                              className="font-medium text-[#F38E33] hover:text-[#E75655]"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p className="capitalize">Total Item</p>
                <p>{totalItem}</p>
              </div>
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p className="capitalize">Total Price</p>
                <p>${totalPrice}</p>
              </div>
              <div className="mt-6">
                <Link
                  to="/checkout"
                  className="flex items-center justify-center rounded-md border border-transparent bg-[#F38E33] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#da8235]"
                >
                  Checkout
                </Link>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or
                  <Link to="/">
                    <button
                      type="button"
                      className=" ml-2 font-medium text-[#E75655] hover:text-indigo-500"
                      onClick={() => setOpen(false)}
                    >
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <img className="w-[450px]" src="./empty.webp" alt="" />
            <Link to={"/"}>Continue Shopping</Link>
          </div>
        )}
      </Layout>
    </>
  );
};

export default Cart;
