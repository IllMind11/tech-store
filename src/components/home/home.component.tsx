import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import store1 from "../../../public/store1.jpg";
export function Home() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide className="h-96 w-96 bg-slate-300">
          <div>
            <div>image 1</div>
            <div>
              <h1>
                The 50 Coolest Tech Gadgets of 2023 Prove That the Future Is Now
              </h1>
              <p>
                The best tech products we tested in 2023 · Smartphones ·
                Smartwatches · Wireless earbuds · Headphones · Laptops · Tablets
                · VR headsets · Gaming ...
              </p>

              <button>shop now</button>
            </div>
            <div>
              <img src={store1} alt="$" width={"500"} height={"500"} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>

      <div>HOme</div>
    </div>
  );
}
