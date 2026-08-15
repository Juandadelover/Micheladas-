import Image from "next/image";
import { NeonGlasses } from "./icons/NeonGlasses";
import { siteInfo } from "@/data/menu";
import heroBg from "../../public/images/hero-bg.png";

const chips = [
  "🛵 Domicilio",
  "🥤 Perlas explosivas",
  "🍬 Pincho de gomitas",
  "🧒 Versión para niños",
];

export function Hero() {
  return (
    <section className="relative min-h-[620px] overflow-hidden pt-11 pb-10 text-center sm:min-h-[680px]">
      <Image
        src={heroBg}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(4,20,26,.55) 0%, rgba(4,20,26,.35) 40%, rgba(4,20,26,.75) 78%, var(--color-noche) 100%)" }}
      />

      <div className="relative z-10 mx-auto max-w-[760px] px-[18px]">
        <NeonGlasses className="mx-auto mb-5 h-[92px] w-auto animar-flotar" />

        <p className="mb-4 text-[11.5px] font-medium uppercase tracking-[0.22em] text-crema/70">
          {siteInfo.neighborhood} · {siteInfo.address}
        </p>

        <h1 className="font-script leading-[0.98] text-[clamp(46px,15vw,84px)]">
          <span className="block text-white animar-neon neon-text-rosa">Micheladas</span>
          <span className="block text-white animar-neon neon-text-agua [animation-delay:.4s]">Rose</span>
        </h1>

        <p className="mx-auto mt-5 max-w-[23ch] text-[16.5px] text-crema/80">
          Frutos rojos, verdes, amarillos, tamarindo y chicle.{" "}
          <b className="font-semibold text-sol">No te quedes sin probar la tuya.</b>
        </p>

        <div className="mt-[22px] flex flex-wrap justify-center gap-2">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-agua/25 bg-noche/50 px-3.5 py-1.5 text-[12.5px] text-crema backdrop-blur-sm"
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
            className="rounded-full border border-crema/35 bg-noche/40 px-6 py-3.5 text-[15.5px] font-medium text-crema backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            Ver Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
