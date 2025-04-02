"use client";

import React from "react";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { reviews } from "@/constants";

import { ReviewStar } from "@/components/icon/icon";

import { outros } from "@/constants";

export const Outro = () => {
  return (
    <section className="container">
      <h1 className="center title56">취향 가이드,</h1>
      <h2 className="center text12 mb-[40px]">
        가장 많이 팔렸던 향수들을 만나보세요.
      </h2>
      <Swiper
        modules={[Pagination]}
        // navigation={{
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // }}
        spaceBetween={10}
        slidesPerView={3.4}
        // centeredSlides={true}
        pagination={{ el: ".custom-pagination", clickable: true }}
        autoplay={{ delay: 2500 }}
        loop
        grabCursor={true}
      >
        {outros.map((item, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="w-[100%] h-[35vw] relative mb-[6px]">
              <Image
                src={item.img}
                alt={item.title}
                loading="eager"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="absolute bottom-[7%] left-[7%]">
              <div className="flex items-center gap-[4px] mb-[12px]">
                <i className="w-[12px] h-[12px] bg-green-200"></i>
                <p
                  className="text12  text-gray-200"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {item.miniTitle}
                </p>
              </div>

              <p className="title24 text-white  w-[246px]">{item.title}</p>
            </div>
          </SwiperSlide>
        ))}
        {/* <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div> */}
      </Swiper>
      <div className="custom-pagination mt-6 center"></div>
    </section>
  );
};
