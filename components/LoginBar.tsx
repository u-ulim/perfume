import React from "react";

import Link from "next/link";

export const LoginBar = () => {
  return (
    <div className="flex gap-4">
      <Link href="/login">LOGIN/JOIN US</Link>
      <Link href="/mybag">BAG-0</Link>
      <Link href="/user">
        <i>user</i>
      </Link>
      <i>cart</i>
    </div>
  );
};
