"use client";

import { useEffect, useRef, useState } from "react";
import { useCart } from "@/lib/cart-context";
import { formatCOP } from "@/data/menu";

export function CartBar({ onOpen }: { onOpen: () => void }) {
  const { totalCount, totalPrice } = useCart();
  const visible = totalCount > 0;
  const prevCount = useRef(totalCount);
  const [bump, setBump] = useState(false);

  useEffect(() => {
    if (totalCount > prevCount.current) {
      setBump(true);
      const t = setTimeout(() => setBump(false), 400);
      prevCount.current = totalCount;
      return () => clearTimeout(t);
    }
    prevCount.current = totalCount;
  }, [totalCount]);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-[70] border-t border-agua/25 bg-noche-2/95 px-[18px] pt-3 pb-[calc(12px+env(safe-area-inset-bottom))] backdrop-blur-xl transition-transform duration-300 ease-[cubic-bezier(.2,.8,.3,1)] ${
        visible ? "translate-y-0" : "translate-y-[130%]"
      }`}
    >
      <div className="mx-auto flex max-w-[760px] items-center gap-3.5">
        <div className={`min-w-0 flex-1 origin-left ${bump ? "animar-bump" : ""}`}>
          <strong className="font-display block text-[19px] font-extrabold">
            {formatCOP(totalPrice)}
          </strong>
          <span className="text-[12.5px] text-crema/60">
            {totalCount} {totalCount === 1 ? "michelada" : "micheladas"}
          </span>
        </div>
        <button
          type="button"
          onClick={onOpen}
          className="rounded-full bg-gradient-to-br from-rosa to-rosa-2 px-[22px] py-3.5 text-[15px] font-semibold whitespace-nowrap text-white shadow-[0_6px_22px_rgba(255,46,154,.34)] transition-transform active:scale-95"
        >
          Ver pedido
        </button>
      </div>
    </div>
  );
}
