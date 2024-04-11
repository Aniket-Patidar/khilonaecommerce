import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Swiperjs = () => {
  return (
    <>
      <div className=" h-full pt-20">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-full"
        >
          {/* Smaller Device Image for Swiper */}
          <SwiperSlide className="flex justify-center items-center md:hidden">
            <img
              className="object-cover block md:hidden"
              src="https://toycra.com/cdn/shop/files/Web_Banner_1800X1000_b6e77d70-be00-4b0a-85d2-2ae83a65b9a5_1084x603.jpg?v=1711700891"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center md:hidden">
            <img
              className="object-cover block md:hidden"
              src="https://toycra.com/cdn/shop/files/Web_Banner_01_12b145fd-4623-4ae4-92c2-785c1c408f50_1085x603.jpg?v=1712140445"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center md:hidden">
            <img
              className="object-cover block md:hidden"
              src="https://toycra.com/cdn/shop/files/Toycra_Lego2024_1e4704b9-171a-40a7-afef-baee03d2eefc_1085x603.jpg?v=1711521627"
              alt=""
            />
          </SwiperSlide>
          {/* Larger Device Image for Swiper */}
          <SwiperSlide className="flex justify-center items-center hidden md:flex">
            <img
              className="h-full object-cover hidden md:block"
              src="https://toycra.com/cdn/shop/files/Smoby_1845x615.jpg?v=1639478171"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center hidden md:flex">
            <img className="h-full object-cover hidden md:block"
              src="https://toycra.com/cdn/shop/files/33-01_1845x615.png?v=1681838940"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center hidden md:flex">
            <img className="h-full object-cover hidden md:block"
              src="https://toycra.com/cdn/shop/files/Toycra_Lego_24_499baaa5-86c2-4d3f-afb1-48706ad0198f_1895x632.jpg?v=1711521603"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center hidden md:flex">
            <img className="h-full object-cover hidden md:block"
              src="https://toycra.com/cdn/shop/files/Web_Banner_3000X1000_b588b814-dfc8-4c34-94bc-837b51a6e4cb_1895x632.jpg?v=1711700869"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center hidden md:flex">
            <img className="h-full object-cover hidden md:block"
              src="https://toycra.com/cdn/shop/files/WebBanner_02_1841x614.jpg?v=1707972021"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center hidden md:flex">
            <img className="h-full object-cover hidden md:block"
              src="https://toycra.com/cdn/shop/files/Wooden_Toys_1845x615.jpg?v=1681476513"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Swiperjs;
