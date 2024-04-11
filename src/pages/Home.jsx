import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Swiperjs from "../components/Swiper";
import { MdAddCall } from "react-icons/md";
import { LiaShippingFastSolid } from "react-icons/lia";
import { LiaMailBulkSolid } from "react-icons/lia";
import { CiFaceSmile } from "react-icons/ci";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];
const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: true },
    ],
  },
];

const products = [
  {
    name: "Magna Tiles Clear Colors 100 Piece Set",
    price: "Rs. 1299.00",
    image:
      "https://toycra.com/cdn/shop/files/Magna-Tiles-Clear-Colors-100-Piece-Set-Construction-Magna-Tiles-Toycra-2_291x291.png?v=1704296702",
  },
  {
    name: "Magna Tiles Clear Colors 100 Piece Set",
    price: "Rs. 1499.00",
    image:
      "https://toycra.com/cdn/shop/files/Magna-Tiles-Clear-Colors-100-Piece-Set-Construction-Magna-Tiles-Toycra-2_291x291.png?v=1704296702",
  },
  {
    name: "Magna Tiles Clear Colors 100 Piece Set",
    price: "Rs. 999.00",
    image:
      "https://toycra.com/cdn/shop/files/Magna-Tiles-Clear-Colors-100-Piece-Set-Construction-Magna-Tiles-Toycra-2_291x291.png?v=1704296702",
  },
  {
    name: "Magna Tiles Clear Colors 100 Piece Set",
    price: "Rs. 1299.00",
    image:
      "https://toycra.com/cdn/shop/files/Magna-Tiles-Clear-Colors-100-Piece-Set-Construction-Magna-Tiles-Toycra-2_291x291.png?v=1704296702",
  },
  {
    name: "Magna Tiles Clear Colors 100 Piece Set",
    price: "Rs. 1499.00",
    image:
      "https://toycra.com/cdn/shop/files/Magna-Tiles-Clear-Colors-100-Piece-Set-Construction-Magna-Tiles-Toycra-2_291x291.png?v=1704296702",
  },
  {
    name: "Magna Tiles Clear Colors 100 Piece Set",
    price: "Rs. 999.00",
    image:
      "https://toycra.com/cdn/shop/files/Magna-Tiles-Clear-Colors-100-Piece-Set-Construction-Magna-Tiles-Toycra-2_291x291.png?v=1704296702",
  },
  {
    name: "Magna Tiles Clear Colors 100 Piece Set",
    price: "Rs. 1299.00",
    image:
      "https://toycra.com/cdn/shop/files/Magna-Tiles-Clear-Colors-100-Piece-Set-Construction-Magna-Tiles-Toycra-2_291x291.png?v=1704296702",
  },
  {
    name: "Magna Tiles Clear Colors 100 Piece Set",
    price: "Rs. 1499.00",
    image:
      "https://toycra.com/cdn/shop/files/Magna-Tiles-Clear-Colors-100-Piece-Set-Construction-Magna-Tiles-Toycra-2_291x291.png?v=1704296702",
  },
  {
    name: "Magna Tiles Clear Colors 100 Piece Set",
    price: "Rs. 999.00",
    image:
      "https://toycra.com/cdn/shop/files/Magna-Tiles-Clear-Colors-100-Piece-Set-Construction-Magna-Tiles-Toycra-2_291x291.png?v=1704296702",
  },
  // ... add more products as needed
];

const Home = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <>
      <Layout>
        <div className="h-[60vh] md:h-[100vh]  text-white relative">
          <Swiperjs />
        </div>
        <div className="h-[fit-content] mt-2 md:mt-6 w-full flex-col space-y-8 md:space-y-0 md:flex md:flex-row flex-wrap justify-center items-start gap-[50px] ">
          <div className=" text-black flex flex-col  gap-1 items-center justify-center text-center leading-tight">
            <LiaShippingFastSolid className="text-[#3c8bb2] font-semibold text-[45px] md:text-[60px] mb-2" />
            <h1
              className="font-bold text-[16px] md:text-[20px] "
              style={{ fontWeight: 800 }}
            >
              Free Shipping
            </h1>
            <h6 className="leading-tight text-[14px]  text-[#4A4A4A]">
              On everything
            </h6>{" "}
          </div>
          <div className=" text-black flex flex-col gap-1 items-center justify-center text-center leading-tight">
            <MdAddCall className="text-[#3c8bb2] font-semibold text-[45px] md:text-[60px] mb-2" />
            <h1
              className="font-bold text-[16px] md:text-[20px]"
              style={{ fontWeight: 800 }}
            >
              Give Us A Call
            </h1>
            <h6 className="leading-tight text-[14px] text-[#4A4A4A]">
              {" "}
              Or Whatsapp on - 9638993429
            </h6>{" "}
          </div>
          <div className=" text-black flex flex-col gap-1  items-center justify-center text-center leading-tight">
            <LiaMailBulkSolid className="text-[#3c8bb2] font-semibold text-[45px] md:text-[60px] mb-2" />
            <h1
              className="font-bold text-[16px] md:text-[20px]"
              style={{ fontWeight: 800 }}
            >
              Bulk Inquiry
            </h1>
            <h6 className="leading-tight text-[14px] text-[#4A4A4A]">
              Email - Toycra@gmail.com
            </h6>{" "}
          </div>
          <div className=" text-black flex flex-col gap-1 items-center justify-center text-center leading-tight">
            <CiFaceSmile className="text-[#3c8bb2] font-semibold text-[45px] md:text-[60px] mb-2" />
            <h1
              className="font-bold text-[16px] md:text-[20px]"
              style={{ fontWeight: 800 }}
            >
              Toycra's Quality Assurance
            </h1>
            <h6 className="leading-tight text-[14px] text-[#4A4A4A]">
              Every product is original, fresh and of high quality
            </h6>{" "}
          </div>
        </div>
        <div className=" mt-10 bg-[url('https://uneno.madrasthemes.com/wp-content/uploads/2018/12/01_homepage_v1.jpg')] pt-6">
          <div className="text-center ">
            <h1 className="font-bold text-[30px] md:text-[40px] text-[#3A3A3A] ">
              Popular Products
            </h1>
            <p className="text-[16px] md:text-[20px] mt-2 px-2 font-[500]">
              Shoppers like you are looking at these Products. Let’s take a
              look!
            </p>
          </div>

          <div className="bg-white">
            <div>
              {/* Mobile filter dialog */}
              <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                <Dialog
                  as="div"
                  className="relative z-40 lg:hidden"
                  onClose={setMobileFiltersOpen}
                >
                  <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <div className="fixed inset-0 z-40 flex">
                    <Transition.Child
                      as={Fragment}
                      enter="transition ease-in-out duration-300 transform"
                      enterFrom="translate-x-full"
                      enterTo="translate-x-0"
                      leave="transition ease-in-out duration-300 transform"
                      leaveFrom="translate-x-0"
                      leaveTo="translate-x-full"
                    >
                      <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                        <div className="flex items-center justify-between px-4">
                          <h2 className="text-lg font-medium text-gray-900">
                            Filters
                          </h2>
                          <button
                            type="button"
                            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                            onClick={() => setMobileFiltersOpen(false)}
                          >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>

                        {/* Filters */}
                        <form className="mt-4 border-t border-gray-200">
                          <h3 className="sr-only">Categories</h3>
                          <ul
                            role="list"
                            className="px-2 py-3 font-medium text-gray-900"
                          >
                            {subCategories.map((category) => (
                              <li key={category.name}>
                                <a
                                  href={category.href}
                                  className="block px-2 py-3"
                                >
                                  {category.name}
                                </a>
                              </li>
                            ))}
                          </ul>

                          {filters.map((section) => (
                            <Disclosure
                              as="div"
                              key={section.id}
                              className="border-t border-gray-200 px-4 py-6"
                            >
                              {({ open }) => (
                                <>
                                  <h3 className="-mx-2 -my-3 flow-root">
                                    <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                      <span className="font-medium text-gray-900">
                                        {section.name}
                                      </span>
                                      <span className="ml-6 flex items-center">
                                        {open ? (
                                          <MinusIcon
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                          />
                                        ) : (
                                          <PlusIcon
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                          />
                                        )}
                                      </span>
                                    </Disclosure.Button>
                                  </h3>
                                  <Disclosure.Panel className="pt-6">
                                    <div className="space-y-6">
                                      {section.options.map(
                                        (option, optionIdx) => (
                                          <div
                                            key={option.value}
                                            className="flex items-center"
                                          >
                                            <input
                                              id={`filter-mobile-${section.id}-${optionIdx}`}
                                              name={`${section.id}[]`}
                                              defaultValue={option.value}
                                              type="checkbox"
                                              defaultChecked={option.checked}
                                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                            />
                                            <label
                                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                              className="ml-3 min-w-0 flex-1 text-gray-500"
                                            >
                                              {option.label}
                                            </label>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </Disclosure.Panel>
                                </>
                              )}
                            </Disclosure>
                          ))}
                        </form>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </Dialog>
              </Transition.Root>

              <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-10">
                  <h1 className="text-xl md:text-4xl font-bold tracking-tight text-gray-900">
                    New Arrivals
                  </h1>

                  <div className="flex items-center">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                          Sort
                          <ChevronDownIcon
                            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            {sortOptions.map((option) => (
                              <Menu.Item key={option.name}>
                                {({ active }) => (
                                  <a
                                    href={option.href}
                                    // className={classNames(
                                    //   option.current
                                    //     ? "font-medium text-gray-900"
                                    //     : "text-gray-500",
                                    //   active ? "bg-gray-100" : "",
                                    //   "block px-4 py-2 text-sm"
                                    // )}
                                  >
                                    {option.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>

                    <button
                      type="button"
                      className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                    >
                      <span className="sr-only">View grid</span>
                      <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                      onClick={() => setMobileFiltersOpen(true)}
                    >
                      <span className="sr-only">Filters</span>
                      <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                <section
                  aria-labelledby="products-heading"
                  className="pb-24 pt-6"
                >
                  <h2 id="products-heading" className="sr-only">
                    Products
                  </h2>

                  <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                    {/* Filters */}
                    <form className="hidden lg:block">
                      <h3 className="sr-only">Categories</h3>
                      <ul
                        role="list"
                        className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                      >
                        {subCategories.map((category) => (
                          <li key={category.name}>
                            <a href={category.href}>{category.name}</a>
                          </li>
                        ))}
                      </ul>

                      {filters.map((section) => (
                        <Disclosure
                          as="div"
                          key={section.id}
                          className="border-b border-gray-200 py-6"
                        >
                          {({ open }) => (
                            <>
                              <h3 className="-my-3 flow-root">
                                <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                  <span className="font-medium text-gray-900">
                                    {section.name}
                                  </span>
                                  <span className="ml-6 flex items-center">
                                    {open ? (
                                      <MinusIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <PlusIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel className="pt-6">
                                <div className="space-y-4">
                                  {section.options.map((option, optionIdx) => (
                                    <div
                                      key={option.value}
                                      className="flex items-center"
                                    >
                                      <input
                                        id={`filter-${section.id}-${optionIdx}`}
                                        name={`${section.id}[]`}
                                        defaultValue={option.value}
                                        type="checkbox"
                                        defaultChecked={option.checked}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      />
                                      <label
                                        htmlFor={`filter-${section.id}-${optionIdx}`}
                                        className="ml-3 text-sm text-gray-600"
                                      >
                                        {option.label}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </form>

                    {/* Product grid */}
                    <div className="lg:col-span-3">
                      <div className="products flex flex-wrap justify-center items-start gap-10 p-4">
                        {products.map((product, index) => (
                          <Link
                            to={`/productDetails/${index}`}
                            key={index}
                            className="bg-white w-[300px] md:w-[250px] shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4"
                          >
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-44 object-cover"
                            />
                            <div className="mt-4 flex-1 flex flex-col items-start justify-between">
                              <h1 className="font-bold text-lg">
                                {product.name}
                              </h1>
                              <p className="text-gray-700 mt-2 text-[15px] text-[#3A3A3A]">
                                {product.price}{" "}
                                <span class="line-through">2020</span>
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              </main>
            </div>
          </div>
        </div>
        <div className="page-3 ">
          <h1 className="text-center font-bold text-[20px] md:text-[40px] text-[#3A3A3A] mb-4">
            Highest Quality Wooden Toys
          </h1>
          <img
            src="https://toycra.com/cdn/shop/files/Smoby_1845x615.jpg?v=1639478171"
            alt=""
          />
          <div className="mt-14 flex flex-wrap justify-center gap-8">
            <div className="h-[180px] md:h-[300px] w-[260px] ">
              <div className="h-[90%] w-full overflow-hidden rounded-lg">
                <img
                  className="h-full w-full object-cover rounded-lg transform hover:scale-110 transition-transform duration-200"
                  src="https://toycra.com/cdn/shop/files/Play_Houses_40d4a0ed-c2d7-4919-98c6-fdd09ce538ea_432x432.jpg?v=1613518505"
                  alt=""
                />
              </div>
              <h4 className="text-center mt-2 font-semibold text-[#046173] text-[18px]">
                House
              </h4>
            </div>
            <div className="h-[180px] md:h-[300px] w-[260px] ">
              <div className="h-[90%] w-full overflow-hidden rounded-lg">
                <img
                  className="h-full w-full object-cover rounded-lg transform hover:scale-110 transition-transform duration-200"
                  src="https://toycra.com/cdn/shop/files/Slide_2cf92426-58b0-45d0-99e1-4b85f1c32f47_432x432.jpg?v=1613518505"
                  alt=""
                />
              </div>
              <h4 className="text-center mt-2 font-semibold text-[#046173] text-[18px]">
                Slides & Play Centers
              </h4>
            </div>
            <div className="h-[180px] md:h-[300px] w-[260px] ">
              <div className="h-[90%] w-full overflow-hidden rounded-lg">
                <img
                  className="h-full w-full object-cover rounded-lg transform hover:scale-110 transition-transform duration-200"
                  src="https://toycra.com/cdn/shop/files/Tram_432x432.jpg?v=1613518506"
                  alt=""
                />
              </div>
              <h4 className="text-center mt-2 font-semibold text-[#046173] text-[18px]">
                Trampoline & Outdoor Fun
              </h4>
            </div>
            <div className="h-[180px] md:h-[300px] w-[260px] ">
              <div className="h-[90%] w-full overflow-hidden rounded-lg">
                <img
                  className="h-full w-full object-cover rounded-lg transform hover:scale-110 transition-transform duration-200"
                  src="https://toycra.com/cdn/shop/files/Rolly1_74d66518-6216-4f40-8fa4-1cb5c22cc31f_432x432.jpg?v=1613518307"
                  alt=""
                />
              </div>
              <h4 className="text-center mt-2 font-semibold text-[#046173] text-[18px]">
                Ride Ons
              </h4>
            </div>
          </div>
        </div>

        <div className="page-4 mt-14">
          <h1 className="text-center font-bold text-[20px] md:text-[40px] text-[#3A3A3A] mb-4">
            Exclusive Wooden Toys
          </h1>
          <img
            src="https://toycra.com/cdn/shop/files/Wooden_Toys_1845x615.jpg?v=1681476513"
            alt=""
          />
        </div>

        <footer className="bg-[#F5F3ED] dark:bg-gray-900">
          <div className="mx-auto w-full max-w-screen-xl p-10 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Resources
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <a
                        href="https://flowbite.com/"
                        className="hover:underline"
                      >
                        Flowbite
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tailwindcss.com/"
                        className="hover:underline"
                      >
                        Tailwind CSS
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Follow us
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <a
                        href="https://github.com/themesberg/flowbite"
                        className="hover:underline "
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://discord.gg/4eeurUVvTy"
                        className="hover:underline"
                      >
                        Discord
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Legal
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Terms &amp; Conditions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2023{" "}
                <a href="https://flowbite.com/" className="hover:underline">
                  Flowbite™
                </a>
                . All Rights Reserved.
              </span>
              <div className="flex mt-4 sm:justify-center sm:mt-0">
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 8 19"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Facebook page</span>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 21 16"
                  >
                    <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                  </svg>
                  <span className="sr-only">Discord community</span>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 17"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Twitter page</span>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">GitHub account</span>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Dribbble account</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </Layout>
    </>
  );
};

export default Home;
