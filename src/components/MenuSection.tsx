import { MenuCard } from "./MenuCard";
import { Reveal } from "./Reveal";
import { categoryLabels, menuItems, type MenuItem, type ProductCategory } from "@/data/menu";
import type { FilterValue } from "./CategoryFilters";

const sectionNotes: Record<ProductCategory, string> = {
  sencillas: "Fruta fresca, sal escarchada y chamoy. La michelada de siempre.",
  especiales: "Más fruta, perlas explosivas y pincho de gomitas. Elige el mixer que quieras.",
  ninos: "Sin alcohol ni picante, para que los peques también disfruten.",
};

const order: ProductCategory[] = ["sencillas", "especiales", "ninos"];

export function MenuSection({
  filter,
  onSelect,
}: {
  filter: FilterValue;
  onSelect: (item: MenuItem) => void;
}) {
  const categories = filter === "todas" ? order : order.filter((c) => c === filter);

  return (
    <div className="mx-auto max-w-[760px] px-[18px]">
      {categories.map((cat) => {
        const items = menuItems.filter((i) => i.category === cat);
        return (
          <section key={cat} className="scroll-mt-[100px] py-[26px] pt-2">
            <Reveal>
              <div className="mb-1 flex items-baseline gap-3">
                <h2 className="font-display text-[clamp(28px,7vw,40px)] leading-none font-extrabold tracking-tight">
                  {categoryLabels[cat]}
                </h2>
              </div>
              <p className="mb-[18px] max-w-[44ch] text-[13px] text-crema/60">{sectionNotes[cat]}</p>
            </Reveal>
            <div className="grid gap-3 sm:grid-cols-2">
              {items.map((item, i) => (
                <Reveal key={item.id} delay={(i % 4) * 70}>
                  <MenuCard item={item} onSelect={onSelect} />
                </Reveal>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
