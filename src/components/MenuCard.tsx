import { FlavorGlass } from "./icons/FlavorGlass";
import type { MenuItem } from "@/data/menu";

export function MenuCard({
  item,
  onSelect,
}: {
  item: MenuItem;
  onSelect: (item: MenuItem) => void;
}) {
  return (
    <article
      className="group relative flex items-center gap-3.5 overflow-hidden rounded-[18px] border border-crema/[0.09] bg-gradient-to-b from-white/[0.05] to-white/[0.02] py-4 pr-4 pl-[22px]"
      style={{ ["--tono" as string]: item.colorVar }}
    >
      <span
        className="absolute inset-y-0 left-0 w-1.5"
        style={{ background: item.colorVar, boxShadow: `0 0 16px ${item.colorVar}` }}
      />
      <span
        className="pointer-events-none absolute -top-10 -right-10 h-[150px] w-[150px] rounded-full opacity-[0.14] blur-[28px]"
        style={{ background: item.colorVar }}
      />

      <FlavorGlass color={item.colorVar} className="h-12 w-12 shrink-0" />

      <div className="min-w-0 flex-1">
        <h3 className="font-display text-[17px] font-bold tracking-tight">{item.name}</h3>
        <p className="mt-0.5 text-[13px] leading-[1.45] text-crema/60">{item.description}</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {item.badges.map((b) => (
            <span
              key={b}
              className="rounded-full border px-2 py-0.5 text-[10px] font-medium tracking-wide uppercase"
              style={{ borderColor: item.colorVar, color: item.colorVar }}
            >
              {b}
            </span>
          ))}
        </div>
      </div>

      <div className="flex shrink-0 flex-col items-end gap-2">
        <span className="font-display text-[17px] font-extrabold tracking-tight whitespace-nowrap">
          {item.priceLabel}
        </span>
        <button
          type="button"
          onClick={() => onSelect(item)}
          className="rounded-full bg-agua px-3.5 py-2 text-[13px] font-semibold whitespace-nowrap text-noche transition-transform active:scale-90"
        >
          Agregar
        </button>
      </div>
    </article>
  );
}
