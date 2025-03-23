"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { mainSlides } from "@/constants";

import Link from "next/link";
import Image from "next/image";

export const MainSlider = () => {
  // extendedSlides: 앞뒤에 클론 추가
  // 예를 들어 mainSlides가 [A, B, C]라면 extendedSlides는 [C, A, B, C, A]
  const extendedSlides = [
    mainSlides[mainSlides.length - 1],
    ...mainSlides,
    mainSlides[0],
  ];
  // 실제 첫 슬라이드는 extendedSlides[1]이므로 초기 인덱스는 1
  const [currentIndex, setCurrentIndex] = useState(1);
  // 애니메이션 진행 여부 상태
  const [isAnimating, setIsAnimating] = useState(false);

  const controls = useAnimation();

  const moveSlide = async (newIndex: number) => {
    if (isAnimating) return; // 애니메이션 중이면 실행 안 함
    setIsAnimating(true);
    setCurrentIndex(newIndex);
    await controls
      .start({
        x: `-${newIndex * 100}%`,
        transition: { type: "tween", duration: 0.8, ease: "easeInOut" },
      })
      .then(() => {
        // 오른쪽 끝 가짜 슬라이드에 도달하면 실제 첫 슬라이드로 즉시 이동
        if (newIndex === extendedSlides.length - 1) {
          controls.set({ x: "-100%" });
          setCurrentIndex(1);
        }
        // 왼쪽 끝 가짜 슬라이드에 도달하면 실제 마지막 슬라이드로 즉시 이동
        if (newIndex === 0) {
          controls.set({ x: `-${mainSlides.length * 100}%` });
          setCurrentIndex(mainSlides.length);
        }
        setIsAnimating(false);
      });
  };

  const nextSlide = () => {
    moveSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    moveSlide(currentIndex - 1);
  };

  // 초기 위치 설정
  useEffect(() => {
    controls.set({ x: `-${currentIndex * 100}%` });
  }, []);

  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* 슬라이드 컨테이너 */}
      <motion.div className="flex w-full h-full" animate={controls}>
        {extendedSlides.map((slide, index) => (
          <div key={index} className="relative w-full h-full flex-shrink-0">
            {slide.type === "video" ? (
              <video
                src={slide.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center"
              />
            ) : (
              <Image
                src={slide.src}
                alt={slide.text}
                fill
                className="object-cover object-center"
              />
            )}
          </div>
        ))}
      </motion.div>

      {/* 좌우 버튼 - 애니메이션 중에는 비활성화 */}
      <button
        onClick={prevSlide}
        disabled={isAnimating}
        className={`absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white px-4 py-3 rounded-full ${
          isAnimating ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        disabled={isAnimating}
        className={`absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white px-4 py-3 rounded-full ${
          isAnimating ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        ▶
      </button>
    </main>
  );
};

export default MainSlider;
