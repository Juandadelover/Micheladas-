import { NeonGlasses } from "./icons/NeonGlasses";
import { Flamingo } from "./icons/Flamingo";
import { siteInfo } from "@/data/menu";

const chips = [
  "🛵 Domicilio",
  "🥤 Perlas explosivas",
  "🍬 Pincho de gomitas",
  "🧒 Versión para niños",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-11 pb-8 text-center">
      <div
        className="pointer-events-none absolute -inset-x-[30%] -top-[30%] h-[420px]"
        style={{ background: "radial-gradient(circle at 30% 30%, rgba(255,46,154,.22), transparent 62%)" }}
      />
      <div
        className="pointer-events-none absolute -inset-x-[30%] -top-[20%] left-[40%] h-[420px]"
        style={{ background: "radial-gradient(circle at 60% 20%, rgba(58,221,230,.2), transparent 60%)" }}
      />
      <Flamingo className="pointer-events-none absolute -left-2 bottom-2 w-14 opacity-70 animar-flotar hidden sm:block" />
      <Flamingo className="pointer-events-none absolute -right-2 bottom-8 w-14 opacity-70 animar-flotar hidden sm:block [animation-delay:1.4s] scale-x-[-1]" />

      <div className="relative z-10 mx-auto max-w-[760px] px-[18px]">
        <NeonGlasses className="mx-auto mb-5 h-[92px] w-auto animar-flotar" />

        <p className="mb-4 text-[11.5px] font-medium uppercase tracking-[0.22em] text-crema/60">
          {siteInfo.neighborhood} · {siteInfo.address}
        </p>

        <h1 className="font-script leading-[0.98] text-[clamp(46px,15vw,84px)]">
          <span className="block text-white animar-neon neon-text-rosa">Micheladas</span>
          <span className="block text-white animar-neon neon-text-agua [animation-delay:.4s]">Rose</span>
        </h1>

        <p className="mx-auto mt-5 max-w-[23ch] text-[16.5px] text-crema/70">
          Frutos rojos, verdes, amarillos, tamarindo y chicle.{" "}
          <b className="font-semibold text-sol">No te quedes sin probar la tuya.</b>
        </p>

        <div className="mt-[22px] flex flex-wrap justify-center gap-2">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-agua/25 bg-agua/10 px-3.5 py-1.5 text-[12.5px] text-crema"
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="mt-[26px] flex flex-wrap justify-center gap-2.5">
          <a
            href="#carta"
            className="rounded-full bg-gradient-to-br from-rosa to-rosa-2 px-[26px] py-3.5 text-[15.5px] font-semibold text-white shadow-[0_8px_26px_rgba(255,46,154,.34)] transition-transform active:scale-95"
          >
            Armar mi pedido
          </a>
          <a
            href={siteInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-crema/25 px-6 py-3.5 text-[15.5px] font-medium text-crema transition-colors hover:bg-white/5"
          >
            Ver Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
