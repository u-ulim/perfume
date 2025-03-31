import React from "react";

import Link from "next/link";

import { logout } from "@/app/logout/actions";

export const LoginBar = () => {
  return (
    <div className="flex gap-4">
      <Link href="/login">LOGIN/JOIN US</Link>
      <Link href="/mybag">BAG-0</Link>
      <form action={logout}>
        <button type="submit">logout</button>
      </form>
      <i>cart</i>
    </div>
  );
};
