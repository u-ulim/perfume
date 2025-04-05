"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { weekends } from "@/constants";

import React from "react";
import { DetailDelivery } from "@/components/icon/icon";

import fiveImage from "@/src/assets/detail/five.png";

export default function ProductPage() {
  const searchParams = useSearchParams();
  const id = Number(searchParams.get("id"));

  const perfume = weekends.find((item) => item.id === id);

  if (!perfume) {
    return <div className="p-10">해당 상품을 찾을 수 없습니다 😭</div>;
  }

  const {
    brand,
    title,
    price,
    img,
    sale,
    review,
    concentration,
    mainAccords,
    mainNotes,
    scentDescription,
  } = perfume;

  //할인 가격 계산
  const priceNumber = Number(price.replace(/[^0-9]/g, ""));
  const discountedPrice = sale
    ? Math.floor(priceNumber * (1 - sale / 100))
    : priceNumber;

  return (
    <section className="max-w-4xl mx-auto p-6 pt-[120px]">
      <div className="flex gap-8 flex-col md:flex-row">
        {/* 향수 이미지 */}
        <div className="w-full md:w-1/2">
          <Image
            src={img}
            alt={title}
            width={500}
            height={500}
            className="rounded-xl shadow"
          />
        </div>

        {/* 상세 정보 */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold">{brand}</h2>
          <p className="text-xl text-gray-600">{title}</p>

          {/* 가격 */}
          {sale ? (
            <div className="text-red-500 text-xl font-bold">
              {sale}%{" "}
              <span className="line-through text-gray-400 mr-2">{price}</span>
              {discountedPrice.toLocaleString()}원
            </div>
          ) : (
            <div className="text-xl font-bold">{price}</div>
          )}

          {/* 리뷰 */}
          {review?.[0] && (
            <div className="text-yellow-500 text-sm mb-[40px]">
              ★ {review[0].reviewStar} / 리뷰 {review[0].reviews}개
            </div>
          )}

          {/* 상세설명 */}
          <ol className="flex flex-col gap-[30px] mb-[40px]">
            <li>
              <h2>[부향률]</h2>
              <p className="text-gray-500 text14">- {concentration}</p>
            </li>
            <li>
              <h2>[메인 어코드]</h2>
              <p className="text-gray-500 text14">- {mainAccords}</p>
            </li>
            <li>
              <h2>[메인 노트]</h2>
              <p className="text-gray-500 text14">- {mainNotes.topNotes}</p>
              <p className="text-gray-500 text14">- {mainNotes.middleNotes}</p>
              <p className="text-gray-500 text14">- {mainNotes.baseNotes}</p>
            </li>
            <li>
              <h2>[향 설명]</h2>
              <p className="text-gray-500 text14">- {scentDescription}</p>
            </li>
          </ol>

          {/* 배송관련  */}
          <div className="flex items-center gap-[16px] mb-[20px]">
            <div>
              <DetailDelivery width="56" />
            </div>
            <div className="text14 flex flex-col gap-[6px]">
              <p>✈️ 해외배송비 10,000원</p>
              <p>🚚 예상배송일 3-5일</p>
            </div>
          </div>

          {/* 보상 및 보증 */}
          <div>
            <div className="flex items-center mb-[20px]">
              <div className="w-[40px] h-[40px] relative">
                <Image
                  src={fiveImage.src}
                  alt="환불"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div>
                <p>100% 정품 보증</p>
                <p>
                  " "에서 검수한 상품이 정품이 아닐 경우, 구매가의 5배를
                  보상해요
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[16px] mb-[20px]">
              <div className="w-[40px] h-[40px] relative">
                <Image
                  src={fiveImage.src}
                  alt="환불"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <p>엄격한 다중 검수</p>
                <p>
                  모든 상품은 검수센터에 도착한 후, 상품별 전문가 그룹의
                  체계적인 시스템을 거쳐 검수를 진행해요.
                </p>
              </div>
            </div>
          </div>
          <button className="mt-6 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
            장바구니에 담기
          </button>
        </div>
      </div>

      {/* 설명 추가 영역 */}
      <div className="mt-16">
        <h3 className="text-xl font-semibold mb-4">제품 설명</h3>
        <p className="text-gray-600">
          이 향수는 {brand}의 인기 라인 중 하나로, {title}이라는 이름처럼 특별한
          향을 선사합니다. 당신의 주말을 더 빛나게 해줄 완벽한 선택이 될 거예요.
        </p>
      </div>
    </section>
  );
}
