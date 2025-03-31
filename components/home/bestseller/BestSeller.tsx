import React from "react";
import { bestSellers } from "@/constants";

import Image from "next/image";

export const BestSeller = () => {
  return (
    <section className="container relative">
      <h1 className="center title56">BEST SELLER</h1>
      <h2 className="center text12 mb-[40px]">
        가장 많이 팔렸던 향수들을 만나보세요.
      </h2>
      <div className="flex gap-[120px]">
        {bestSellers.map((item, index) => {
          // 할인된 가격 계산: 할인율: discount

          const rawPrice = item.price
            .replace("원", "") // "44,900"으로 만듦
            .replaceAll(",", ""); // "44900"으로 만듦
          const priceNumber = Number(rawPrice); // 44900 (숫자)

          const discountNumber = Number(item.discount); // 예: 15
          const discountedPrice = Math.round(
            (priceNumber * (100 - discountNumber)) / 100
          );

          const formattedPrice = discountedPrice.toLocaleString(); // "38,165" 등

          return (
            <div key={index} className="flex-1 relative">
              {/* Next/Image의 fill을 사용할 경우, 부모 요소에 position relative와 명시적인 높이가 필요합니다 */}
              <div className="relative w-full h-64 mb-[20px]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <hr className="border-gray-200 mb-[10px]" />
              <h2 className="subTitleBold12">{item.title}</h2>
              <p className="text12">
                <span className="line-through">{item.price}</span>
              </p>
              <p className="text12">{formattedPrice}원</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
