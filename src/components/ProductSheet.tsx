"use client";

import { useState } from "react";
import { Sheet } from "./Sheet";
import { FlavorGlass } from "./icons/FlavorGlass";
import { MinusGlyph, PlusGlyph } from "./icons/Misc";
import { flavors, mixers, formatCOP, type MenuItem } from "@/data/menu";
import { useCart } from "@/lib/cart-context";

function ProductForm({
  item,
  onClose,
  onAdded,
}: {
  item: MenuItem;
  onClose: () => void;
  onAdded: (message: string) => void;
}) {
  const { addLine } = useCart();
  const [flavorId, setFlavorId] = useState(item.flavor?.id ?? flavors[0].id);
  const [mixerId, setMixerId] = useState(mixers[0].id);
  const [qty, setQty] = useState(1);

  const flavor = flavors.find((f) => f.id === flavorId) ?? flavors[0];
  const mixer = mixers.find((m) => m.id === mixerId) ?? mixers[0];
  const isEspecial = item.productId === "especial";
  const isNinos = item.productId === "ninos";
  const unitPrice = isEspecial ? mixer.price : item.productId === "sencilla" ? 10000 : 7000;

  function handleAdd() {
    addLine({
      productId: item.productId,
      productName:
        item.productId === "especial"
          ? "Michelada Especial"
          : item.productId === "sencilla"
            ? "Michelada Sencilla"
            : "Michelada para Niños",
      flavorLabel: flavor.label,
      flavorColor: flavor.colorVar,
      mixerLabel: isEspecial ? mixer.label : null,
      alcohol: isEspecial ? mixer.alcohol : false,
      unitPrice,
      qty,
    });
    onAdded(`${qty} × ${flavor.label} agregada al pedido`);
    onClose();
  }

  return (
    <>
      <p className="mb-4 text-[13.5px] text-crema/60">{item.description}</p>

      {isNinos && (
        <div className="mb-5 grid gap-2.5">
          <p className="mb-0.5 text-[12.5px] tracking-wide text-crema/50 uppercase">Sabor</p>
          {flavors.map((f) => (
            <label
              key={f.id}
              className={`flex cursor-pointer items-center gap-3 rounded-[14px] border-[1.5px] px-4 py-3.5 transition-colors ${
                flavorId === f.id ? "border-agua bg-agua/10" : "border-crema/10 bg-white/[0.03]"
              }`}
            >
              <input
                type="radio"
                name="flavor"
                className="h-[19px] w-[19px] accent-agua"
                checked={flavorId === f.id}
                onChange={() => setFlavorId(f.id)}
              />
              <FlavorGlass color={f.colorVar} className="h-8 w-8 shrink-0" />
              <span className="flex-1 text-[15px] font-medium">{f.label}</span>
            </label>
          ))}
        </div>
      )}

      {isEspecial && (
        <div className="mb-5 grid gap-2.5">
          <p className="mb-0.5 text-[12.5px] tracking-wide text-crema/50 uppercase">Elige el mixer</p>
          {mixers.map((m) => (
            <label
              key={m.id}
              className={`flex cursor-pointer items-center gap-3 rounded-[14px] border-[1.5px] px-4 py-3.5 transition-colors ${
                mixerId === m.id ? "border-agua bg-agua/10" : "border-crema/10 bg-white/[0.03]"
              }`}
            >
              <input
                type="radio"
                name="mixer"
                className="h-[19px] w-[19px] accent-agua"
                checked={mixerId === m.id}
                onChange={() => setMixerId(m.id)}
              />
              <span className="flex-1 text-[15px] font-medium">
                {m.label}
                {m.alcohol && (
                  <span className="ml-1.5 rounded-full bg-sol px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-noche">
                    +18
                  </span>
                )}
              </span>
              <span className="font-display text-[15.5px] font-bold">{formatCOP(m.price)}</span>
            </label>
          ))}
        </div>
      )}

      <div className="my-1 mb-5 flex items-center justify-center gap-3.5">
        <button
          type="button"
          aria-label="Quitar una"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-crema/20 transition-transform active:scale-90"
        >
          <MinusGlyph />
        </button>
        <span
          key={qty}
          className="font-display animar-pop min-w-[34px] text-center text-2xl font-extrabold"
        >
          {qty}
        </span>
        <button
          type="button"
          aria-label="Agregar una"
          onClick={() => setQty((q) => Math.min(20, q + 1))}
          className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-crema/20 transition-transform active:scale-90"
        >
          <PlusGlyph />
        </button>
      </div>

      <button
        type="button"
        onClick={handleAdd}
        className="w-full rounded-full bg-gradient-to-br from-rosa to-rosa-2 py-3.5 text-[15.5px] font-semibold text-white shadow-[0_8px_26px_rgba(255,46,154,.34)] transition-transform active:scale-[0.98]"
      >
        Agregar al pedido · {formatCOP(unitPrice * qty)}
      </button>
    </>
  );
}

export function ProductSheet({
  item,
  onClose,
  onAdded,
}: {
  item: MenuItem | null;
  onClose: () => void;
  onAdded: (message: string) => void;
}) {
  const [displayItem, setDisplayItem] = useState<MenuItem | null>(item);
  if (item && item !== displayItem) {
    setDisplayItem(item);
  }

  return (
    <Sheet open={!!item} onClose={onClose} title={displayItem?.name ?? ""}>
      {displayItem && (
        <ProductForm key={displayItem.id} item={displayItem} onClose={onClose} onAdded={onAdded} />
      )}
    </Sheet>
  );
}
