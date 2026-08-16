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
      className="group relative flex items-center gap-3.5 overflow-hidden rounded-2xl border border-crema/[0.09] bg-gradient-to-b from-white/[0.05] to-white/[0.02] py-4 pr-4 pl-[22px] transition-[transform,border-color,background] duration-200 hover:-translate-y-0.5 hover:border-[color:var(--tono)]/45 hover:from-white/[0.07]"
      style={{ ["--tono" as string]: item.colorVar }}
    >
      <span
        className="absolute inset-y-0 left-0 w-1.5"
        style={{ background: item.colorVar, boxShadow: `0 0 16px ${item.colorVar}` }}
      />
      <span
        className="pointer-events-none absolute -top-10 -right-10 h-[150px] w-[150px] rounded-full opacity-[0.14] blur-[28px] transition-opacity duration-200 group-hover:opacity-[0.22]"
        style={{ background: item.colorVar }}
      />

      <span
        className="grid h-14 w-14 shrink-0 place-items-center rounded-full"
        style={{
          background: `color-mix(in srgb, ${item.colorVar} 16%, transparent)`,
          boxShadow: `inset 0 0 0 1px color-mix(in srgb, ${item.colorVar} 40%, transparent)`,
        }}
      >
        <FlavorGlass color={item.colorVar} className="h-8 w-8" />
      </span>

      <div className="min-w-0 flex-1">
        <h3 className="font-display text-[17px] font-bold tracking-tight">{item.name}</h3>
        <p className="mt-0.5 text-[13px] leading-[1.45] text-crema/60">{item.description}</p>
        <div className="mt-2 flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
          {item.badges.map((badge, i) => (
            <span key={badge} className="flex items-center gap-1.5">
              {i > 0 && <span className="text-crema/30">·</span>}
              <span
                className="text-[11px] font-medium tracking-wide whitespace-nowrap uppercase"
                style={{ color: item.colorVar }}
              >
                {badge}
              </span>
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
