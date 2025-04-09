"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { supabase } from "@/utils/supabase/client";

interface CartItem {
  id: number;
  product_id: number;
  brand: string;
  title: string;
  price: string;
  img: string;
  quantity: number;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      // 실제 환경에서는 사용자 식별에 따른 필터링이 필요합니다.
      const { data, error } = await supabase.from("cart").select("*");
      if (error) {
        console.error("장바구니 데이터 불러오기 오류: ", error.message);
      } else {
        setCartItems(data as CartItem[]);
      }
      setLoading(false);
    };

    fetchCart();
  }, []);

  // 풍목 삭제 함수
  const handleRemoveItem = async (id: number) => {
    try {
      const { error } = await supabase.from("cart").delete().eq("id", id);
      if (error) {
        console.error("품목 삭제 오류: ", error.message);
        alert("품목 삭제 중 오류가 발생했습니다. 다시 시도해주세요.");
        return;
      }
      // 삭제 성공 시, 로컬 상태 업데이트
      setCartItems(cartItems.filter((item) => item.id !== id));
    } catch (err) {
      console.error("예상치 못한 오류: ", err);
      alert("예상치 못한 오류가 발생했습니다.");
    }
  };

  if (loading) {
    return <div className="p-10">장바구니를 불러오는 중...</div>;
  }

  return (
    <section className="max-w-4xl mx-auto p-6 pt-[120px]">
      <h1 className="text-3xl font-bold mb-6">장바구니</h1>
      {cartItems.length === 0 ? (
        <div className="border border-gray-300 rounded p-4">
          <p className="text-gray-600">장바구니에 담긴 상품이 없습니다.</p>
        </div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center border-b border-gray-200 py-4"
            >
              <div className="w-24 h-24 relative mr-4">
                <Image
                  src={item.img}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <div className="flex-1">
                <h2 className="font-bold">{item.title}</h2>
                <p className="text-gray-600">{item.brand}</p>
                <p className="text-sm">
                  가격: <span className="font-semibold">{item.price}</span>
                </p>
                <p className="text-sm">수량: {item.quantity}</p>
              </div>
              <div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-lg"
                >
                  ❌
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <Link
        href="/"
        className="mt-6 inline-block px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
      >
        쇼핑 계속하기
      </Link>
    </section>
  );
}
