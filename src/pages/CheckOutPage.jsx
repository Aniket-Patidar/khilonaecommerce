import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../components/Layout";

const CheckoutPage = () => {
  const [open, setOpen] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [items, setItems] = useState([
    {
      id: 1,
      product: {
        title: "Sample Product 1",
        thumbnail:
          "https://imgs.search.brave.com/Ii74UDcaDxC1yrkqEgGo9ggOs1AwB2HIGWUMvhjmhHc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDU4/NzE5NTY1L3Bob3Rv/L3BsYXN0aWMtdG95/cy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9VEVkaHB0c0ZM/UnhIazhtemU1M3Nv/LWloYkpxbXJJMi1I/b0Nqal94WEFOTT0",
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
          "https://imgs.search.brave.com/kT7Wz8jgdWlx2cOWcOgwAZpvx3OAV15L9HZFPFygJWM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQx/MjAyNTAwMC9waG90/by90b2RkbGVyLWFj/dGl2aXR5LWZvci1t/b3Rvci1hbmQtc2Vu/c29yeS1kZXZlbG9w/bWVudC1iYWJ5LWhh/bmRzLXdpdGgtY29s/b3JmdWwtd29vZGVu/LXRveXMtb24ud2Vi/cD9iPTEmcz02MTJ4/NjEyJnc9MCZrPTIw/JmM9UzN6Wm5hQkg4/MkJWS2tCazJuLXE3/MUJrd3NNRHkyeWtG/LXlPd0pLWlNyST0",
        price: 30,
        stock: 5,
      },
      color: "Blue",
      quantity: 1,
    },
  ]);

  const totalItem = items.reduce((accumulator, currentValue) => {
    return accumulator + 1 * currentValue.quantity;
  }, 0);
  const totalPrice = items.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity * currentValue.product.price;
  }, 0);

  const handelUpdate = (type, item) => {
    const updatedItems = items.map((currentItem) => {
      if (currentItem.id === item.id) {
        if (type === "add" && item.quantity < item.product.stock) {
          return { ...currentItem, quantity: item.quantity + 1 };
        } else if (type === "sub" && item.quantity > 1) {
          return { ...currentItem, quantity: item.quantity - 1 };
        }
      }
      return currentItem;
    });

    setItems(updatedItems);
  };

  const handelRemover = (e, item) => {
    e.preventDefault();
    setItems(items.filter((currentItem) => currentItem.id !== item.id));
  };

  const paymentHandler = async () => {
    // Your payment handler logic goes here
  };

  const handelOrder = (e) => {
    // Your order handling logic goes here
  };

  return (
    <>
<Layout>
      <div className="">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-[150px] md:pt-[140px]  ">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
            {/* Left Column */}
            <div className="lg:col-span-3 ">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-2xl font-bold leading-7 text-gray-900">
                  Personal Information
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Use a permanent address where you can receive mail.
                </p>
                {/* Address form */}
                <form onSubmit={() => {}} className="mt-10 space-y-6">
                  {/* First Name */}
                  <div className="grid grid-cols-6 gap-x-6">
                    <div className="col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-5 text-gray-900"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        {...register("firstName", {
                          required: "Please enter first name",
                        })}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-[40px] outline-none border-2 px-3"
                        placeholder="First Name"
                      />

                      {errors.firstName && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                    {/* Last Name */}
                    <div className="col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium leading-5 text-gray-900"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        {...register("lastName", {
                          required: "Please enter last name",
                        })}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-[40px] outline-none border-2 px-3"
                        placeholder="Last Name"
                      />
                      {errors.lastName && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-5 text-gray-900"
                    >
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                          message: "Please enter a valid email address",
                        },
                      })}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-[40px] outline-none border-2 px-3"
                      placeholder="Email Address"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone">Phone number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      {...register("phone", {
                        required: "Phone number is required",
                      })}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-[40px] outline-none border-2 px-3"
                      placeholder="Phone Number"
                    />

                    {errors.phone && (
                      <p className="mt-2 text-sm text-red-500">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  {/* Street Address */}
                  <div>
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium leading-5 text-gray-900"
                    >
                      Street address
                    </label>
                    <input
                      type="text"
                      name="street-address"
                      id="street-address"
                      {...register("streetAddress", {
                        required: "Street address is required",
                      })}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-[40px] outline-none border-2 px-3"
                      placeholder="Street Address"
                    />
                    {errors.streetAddress && (
                      <p className="mt-2 text-sm text-red-500">
                        {errors.streetAddress.message}
                      </p>
                    )}
                  </div>
                  {/* City, State/Province, Postal Code */}
                  <div className="grid grid-cols-6 gap-x-6">
                    {/* City */}
                    <div className="col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium leading-5 text-gray-900"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        {...register("city", {
                          required: "City is required",
                        })}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-[40px] outline-none border-2 px-3"
                        placeholder="City"
                      />
                      {errors.city && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.city.message}
                        </p>
                      )}
                    </div>
                    {/* State/Province */}
                    <div className="col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium leading-5 text-gray-900"
                      >
                        State / Province
                      </label>
                      <input
                        type="text"
                        name="region"
                        id="region"
                        {...register("region", {
                          required: "State/Province is required",
                        })}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-[40px] outline-none border-2 px-3"
                        placeholder="State / Province"
                      />
                      {errors.region && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.region.message}
                        </p>
                      )}
                    </div>
                    {/* Postal Code */}
                    <div className="col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium leading-5 text-gray-900"
                      >
                        ZIP / Postal code
                      </label>
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        {...register("postalCode", {
                          required: "Postal code is required",
                        })}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-[40px] outline-none border-2 px-3"
                        placeholder="ZIP / Postal code"
                      />
                      {errors.postalCode && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.postalCode.message}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* Buttons */}
                  <div className="mt-6 flex items-center justify-end">
                    <button
                      type="button"
                      className="px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150 "
                      onClick={() => {}}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="ml-3 inline-flex justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 bg-blue-900 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                    >
                      Continue to Shipping
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* Right Column */}
            <div className="lg:col-span-2">
              {items.length ? (
                <div>
                  <div className=" border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="-my-6 divide-y divide-gray-200"
                      >
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
                                    <a to={product.to}>
                                      {product.product.title}
                                    </a>
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
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
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
                        to="/checkoutPage"
                        className="block w-full rounded-md border border-gray-300 bg-blue-900 text-white py-3 text-center font-medium hover:bg-gray-800 transition duration-300 ease-in-out"
                      >
                        Proceed to Checkout
                      </Link>
                    </div>

                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or
                        <Link to="/">
                          <button
                            type="button"
                            className="ml-1 font-medium text-[#E75655] hover:text-indigo-500"
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
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
      </Layout>
    </>
  );
};

export default CheckoutPage;