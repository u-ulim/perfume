// icon/Icon.tsx
import React from "react";

interface IconProps {
  className?: string;
  width?: string;
  height?: string;
}

export const RightArrow = ({ className = "", width = "6px" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`fill-current ${className}`}
      width={width}
      style={{ aspectRatio: "6 / 11" }} // width:height 비율 6:11
      viewBox="0 0 6 11"
    >
      <path d="M0.21967 10.5303C-0.0732231 10.2374 -0.0732231 9.76256 0.21967 9.46967L4.18934 5.5L0.21967 1.53033C-0.0732231 1.23744 -0.0732231 0.762563 0.21967 0.46967C0.512563 0.176777 0.987437 0.176777 1.28033 0.46967L5.78033 4.96967C6.07322 5.26256 6.07322 5.73744 5.78033 6.03033L1.28033 10.5303C0.987437 10.8232 0.512563 10.8232 0.21967 10.5303Z" />
    </svg>
  );
};
