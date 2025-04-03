"use client";

import React from "react";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { reviews } from "@/constants";

import { ReviewStar } from "@/components/icon/icon";

export const Review = () => {
  return (
    <section className="container relative">
      <h1 className="center title56">REVIEW</h1>
      <h2 className="center text12 mb-[40px]">다양한 후기들을 만나보세요.</h2>
      <Swiper
        spaceBetween={10}
        slidesPerView={6}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        loop
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-[100%] h-[12vw] relative mb-[6px]">
              <Image
                src={item.img}
                alt={item.title}
                loading="eager"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="flex mb-[6px]">
              {Array.from({ length: 5 }).map((_, index) => (
                <ReviewStar key={index} className="#FF3EAF" width="14" />
              ))}
            </div>
            <div className="flex items-center gap-[6px] mb-[6px]">
              <p className="textBold12 bg-blue-300 text-white py-[2px] px-[4px]">
                BEST
              </p>
              <p className="text14">{item.user}</p>
            </div>
            <p
              className="text12"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {item.desc}
            </p>
            <p className="text12 text-gray-400">{item.date}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
