import React from "react";

type LetterLogoProps = {
  className?: string; // className의 타입을 명확히 지정
};

const LetterLogo: React.FC<LetterLogoProps> = ({ className = "" }) => (
  <div>LOGO</div>
);

export default LetterLogo;
