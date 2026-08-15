"use client";

import { useEffect, useRef, useState } from "react";
import { CartProvider } from "@/lib/cart-context";
import { SiteHeader } from "./SiteHeader";
import { Hero } from "./Hero";
import { CategoryFilters, type FilterValue } from "./CategoryFilters";
import { MenuSection } from "./MenuSection";
import { SiteFooter } from "./SiteFooter";
import { CartBar } from "./CartBar";
import { ProductSheet } from "./ProductSheet";
import { CartSheet } from "./CartSheet";
import { Toast } from "./Toast";
import type { MenuItem } from "@/data/menu";

function StorefrontInner() {
  const [filter, setFilter] = useState<FilterValue>("todas");
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  function showToast(message: string) {
    setToast(message);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setToast(null), 2600);
  }

  return (
    <>
      <SiteHeader />
      <main className="flex-1 pb-24">
        <Hero />
        <CategoryFilters active={filter} onChange={setFilter} />
        <MenuSection filter={filter} onSelect={setActiveItem} />
        <SiteFooter />
      </main>

      <CartBar onOpen={() => setCartOpen(true)} />
      <ProductSheet item={activeItem} onClose={() => setActiveItem(null)} onAdded={showToast} />
      <CartSheet open={cartOpen} onClose={() => setCartOpen(false)} onOrdered={showToast} />
      <Toast message={toast} />
    </>
  );
}

export function Storefront() {
  return (
    <CartProvider>
      <StorefrontInner />
    </CartProvider>
  );
}
