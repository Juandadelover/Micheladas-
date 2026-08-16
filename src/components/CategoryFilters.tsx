"use client";

import { categoryLabels, type ProductCategory } from "@/data/menu";

export type FilterValue = "todas" | ProductCategory;

const options: { value: FilterValue; label: string }[] = [
  { value: "todas", label: "Todas" },
  { value: "sencillas", label: categoryLabels.sencillas },
  { value: "especiales", label: categoryLabels.especiales },
  { value: "ninos", label: categoryLabels.ninos },
];

export function CategoryFilters({
  active,
  onChange,
}: {
  active: FilterValue;
  onChange: (v: FilterValue) => void;
}) {
  return (
    <nav
      id="carta"
      className="sticky top-[52px] z-[50] scroll-mt-[52px] bg-gradient-to-b from-noche from-[72%] to-transparent py-3"
      aria-label="Filtrar carta"
    >
      <div className="chip-scroll mx-auto flex max-w-[760px] gap-2 overflow-x-auto px-[18px]">
        {options.map((opt) => {
          const pressed = active === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              aria-pressed={pressed}
              onClick={() => onChange(opt.value)}
              className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-all duration-200 active:scale-95 ${
                pressed
                  ? "scale-[1.04] border-agua bg-agua text-noche font-semibold"
                  : "border-crema/15 text-crema/65 hover:border-crema/30"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
