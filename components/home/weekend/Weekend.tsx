"use client";
import React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper/modules";

const categories = ["전체", "우디", "시트러스", "머스크", "플로럴", "스위트"];

import { weekends } from "@/constants";
const perfumeData = [
  {
    category: "우디",
    name: "#69 로드 트립",
    brand: "사랑해요",
    price: 168000,
    discount: 0,
    rating: 4.5,
    reviews: 2,
    image: "/img/1.jpg",
  },
  {
    category: "우디",
    name: "로 드 세비뉴",
    brand: "스테파니 브루진",
    price: 250000,
    discount: 30,
    rating: 5,
    reviews: 1,
    image: "/img/2.jpg",
  },
  {
    category: "시트러스",
    name: "#71 시리즈 에이",
    brand: "사랑해요",
    price: 168000,
    discount: 0,
    rating: 4.5,
    reviews: 2,
    image: "/img/3.jpg",
  },
  // ...더 많은 향수들
];

export const Weekend = () => {
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const filteredPerfumes =
    selectedCategory === "전체"
      ? weekends
      : weekends.filter((item) => item.category === selectedCategory);

  const router = useRouter();
  const handleClick = (item: any) => {
    router.push(`/detail?id=${item.id}`);
  };

  return (
    <section className="container h-[20vw] mb-[400px]">
      <h1 className="center title56">WEEKEND BEST</h1>
      <h2 className="center text12 mb-[80px]">
        이번 주 가장 인기가 많았던 향수들
      </h2>
      {/* 카테고리 필터 탭 */}
      <div className="flex gap-2 mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1 rounded-full text-sm ${
              cat === selectedCategory ? "bg-black text-white" : "bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 슬라이드 */}
      <Swiper
        modules={[Grid]}
        grid={{
          rows: 2,
          fill: "row", // 또는 'column'
        }}
        spaceBetween={16}
        slidesPerView={6} // 한 줄에 3개씩
      >
        {filteredPerfumes.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-white rounded-xl shadow p-2 text-sm  cursor-pointer min-h-[280px] h-[17vw]"
              onClick={() => handleClick(item)}
            >
              <img
                src={item.img}
                alt={item.title}
                className="rounded-md mb-2"
              />
              <h4 className="text17 font-semibold">{item.brand}</h4>
              <p className="text-gray-500 text12">{item.title}</p>
              {item.sale > 0 ? (
                <p className="text-red-500 font-bold">
                  {item.sale}% {item.price.toLocaleString()}
                </p>
              ) : (
                <p className="font-bold">{item.price.toLocaleString()}</p>
              )}
              <div className="flex gap-[4px] items-center">
                {item.review && item.review.length > 0 && (
                  <p className="text12 text-yellow-500">
                    ★{item.review[0].reviewStar}{" "}
                    <span className="text-gray-400 font-semibold">
                      리뷰 {item.review[0].reviews}
                    </span>
                  </p>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
