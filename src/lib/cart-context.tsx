"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export interface CartLine {
  key: string;
  productId: string;
  productName: string;
  flavorLabel: string;
  flavorColor: string;
  mixerLabel: string | null;
  alcohol: boolean;
  unitPrice: number;
  qty: number;
}

interface CartContextValue {
  lines: CartLine[];
  addLine: (line: Omit<CartLine, "key">) => void;
  removeLine: (key: string) => void;
  clear: () => void;
  totalCount: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);

  const addLine = useCallback((line: Omit<CartLine, "key">) => {
    const key = [line.productId, line.flavorLabel, line.mixerLabel ?? "sin-mixer"].join("::");
    setLines((prev) => {
      const existing = prev.find((l) => l.key === key);
      if (existing) {
        return prev.map((l) => (l.key === key ? { ...l, qty: l.qty + line.qty } : l));
      }
      return [...prev, { ...line, key }];
    });
  }, []);

  const removeLine = useCallback((key: string) => {
    setLines((prev) => prev.filter((l) => l.key !== key));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const totalCount = useMemo(() => lines.reduce((sum, l) => sum + l.qty, 0), [lines]);
  const totalPrice = useMemo(
    () => lines.reduce((sum, l) => sum + l.qty * l.unitPrice, 0),
    [lines],
  );

  const value = useMemo(
    () => ({ lines, addLine, removeLine, clear, totalCount, totalPrice }),
    [lines, addLine, removeLine, clear, totalCount, totalPrice],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de CartProvider");
  return ctx;
}
