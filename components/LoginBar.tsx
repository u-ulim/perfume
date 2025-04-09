import React, { useEffect, useState } from "react";
import { User as SupabaseUser, Session } from "@supabase/supabase-js";

import Link from "next/link";

import { logout } from "@/app/logout/actions";
import { supabase } from "@/utils/supabase/client";

// 로컬에서 선언하는 타입 이름을 MyUser 등으로 변경
type MyUser = {
  id: string;
  email: string;
};

export const LoginBar = () => {
  // 상태를 'User | null'로 선언
  const [user, setUser] = useState<SupabaseUser | null>(null);

  useEffect(() => {
    const getUser = async () => {
      // 세션 정보 가져오기
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();
      if (error) {
        console.error(error);
      }

      // session.user가 존재하면 user 상태에 저장, 없으면 null
      setUser(session?.user ?? null);
    };

    getUser();

    // onAuthStateChange를 통해 로그인/로그아웃 등 상태가 변하면 user를 업데이트
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="flex gap-4">
      <Link href="/login">LOGIN/JOIN US</Link>
      <Link href="/mybag">BAG-0</Link>

      <form action={logout}>
        <button type="submit">logout</button>
      </form>

      <Link href="/cart">BAG-0</Link>
    </div>
  );
};
