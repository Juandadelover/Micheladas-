"use client";

import { useEffect, type ReactNode } from "react";
import { CloseGlyph } from "./icons/Misc";

export function Sheet({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    document.body.classList.add("bloqueado");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("bloqueado");
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <>
      <div
        className={`fixed inset-0 z-[80] bg-[rgba(2,10,13,.72)] transition-opacity duration-250 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={`fixed inset-x-0 bottom-0 z-[90] max-h-[92dvh] overflow-y-auto overscroll-contain rounded-t-[26px] border-t border-agua/30 bg-noche-2 px-[18px] pb-[calc(26px+env(safe-area-inset-bottom))] transition-transform duration-300 ease-[cubic-bezier(.2,.8,.3,1)] ${
          open ? "translate-y-0" : "translate-y-[105%]"
        }`}
      >
        <div className="mx-auto mt-2.5 h-1 w-10 rounded-full bg-crema/25" />
        <div className="sticky top-0 z-[2] mb-4 flex items-center gap-3 border-b border-crema/10 bg-noche-2 py-4">
          <h2 className="font-display flex-1 text-[22px] font-extrabold tracking-tight">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-crema/10 text-crema"
          >
            <CloseGlyph />
          </button>
        </div>
        {children}
      </div>
    </>
  );
}
