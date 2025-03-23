import React from "react";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="container text12">
      <div className="flex justify-between">
        <div>
          <p>
            COMPANY: 향수주식회사 OWNER: 김도경 CALL: 1234-4023 FAX:
            0507-56-1234
          </p>
          <p>ADDRESS: 15123 서울특별시 관악구 한양대학로 55-15</p>
          <p>ONLINE OREDER LICENSE: 1999-한국특별-1234 </p>
          <p>Copyright 향수핏프로그램. All right reserved</p>
        </div>
        <div className="flex gap-[10px]">
          <Link href="#">YOUTUBE</Link>
          <Link href="#">INSTARGRAM</Link>
          <Link href="#">FACEBOOK</Link>
        </div>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
