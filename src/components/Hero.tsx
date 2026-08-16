import Image from "next/image";
import { NeonGlasses } from "./icons/NeonGlasses";
import { DeliveryIcon, PearlsIcon, CandyIcon, KidsIcon } from "./icons/Chips";
import { siteInfo } from "@/data/menu";
import heroBgDesktop from "../../public/images/hero-bg.png";
import heroBgMobile from "../../public/images/hero-bg-mobile.png";

const chips = [
  { icon: DeliveryIcon, label: "Domicilio" },
  { icon: PearlsIcon, label: "Perlas explosivas" },
  { icon: CandyIcon, label: "Pincho de gomitas" },
  { icon: KidsIcon, label: "Versión para niños" },
];

const heroMaskDesktop =
  "radial-gradient(ellipse 60% 52% at 50% 40%, transparent 0%, transparent 42%, black 100%)";
const heroMaskMobile =
  "radial-gradient(ellipse 42% 88% at 50% 48%, transparent 0%, transparent 34%, black 100%)";

const photoClass = "object-cover object-center opacity-70 [filter:saturate(0.82)_contrast(1.03)]";

export function Hero() {
  return (
    <section className="relative min-h-[600px] overflow-hidden pt-11 pb-10 text-center sm:min-h-[660px]">
      <div
        className="absolute inset-0 block sm:hidden"
        style={{ maskImage: heroMaskMobile, WebkitMaskImage: heroMaskMobile }}
      >
        <Image src={heroBgMobile} alt="" fill priority sizes="100vw" className={photoClass} />
      </div>
      <div
        className="absolute inset-0 hidden sm:block"
        style={{ maskImage: heroMaskDesktop, WebkitMaskImage: heroMaskDesktop }}
      >
        <Image
          src={heroBgDesktop}
          alt=""
          fill
          loading="lazy"
          sizes="100vw"
          className={photoClass}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-noche/35" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(4,20,26,.2) 0%, rgba(4,20,26,.15) 32%, rgba(4,20,26,.55) 72%, var(--color-noche) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[760px] px-[18px]">
        <div className="animar-entrar mb-5">
          <NeonGlasses className="mx-auto h-[92px] w-auto animar-flotar" />
        </div>

        <p
          className="animar-entrar mb-4 text-[11.5px] font-medium uppercase tracking-[0.22em] text-crema/70"
          style={{ animationDelay: "90ms" }}
        >
          {siteInfo.neighborhood} · {siteInfo.address}
        </p>

        <h1
          className="animar-entrar font-script leading-[0.98] text-[clamp(46px,15vw,84px)]"
          style={{ animationDelay: "170ms" }}
        >
          <span className="block text-white animar-neon neon-text-rosa">Micheladas</span>
          <span className="block text-white animar-neon neon-text-agua [animation-delay:.4s]">Rose</span>
        </h1>

        <p
          className="animar-entrar mx-auto mt-5 max-w-[23ch] text-[16.5px] text-crema/80"
          style={{ animationDelay: "270ms" }}
        >
          Frutos rojos, verdes, amarillos, tamarindo y chicle.{" "}
          <b className="font-semibold text-sol">No te quedes sin probar la tuya.</b>
        </p>

        <div
          className="animar-entrar mt-[22px] flex flex-wrap justify-center gap-2"
          style={{ animationDelay: "350ms" }}
        >
          {chips.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="flex items-center gap-1.5 rounded-full border border-agua/25 bg-noche/50 px-3.5 py-1.5 text-[12.5px] text-crema backdrop-blur-sm"
            >
              <Icon className="h-3.5 w-3.5 shrink-0 text-agua" />
              {label}
            </span>
          ))}
        </div>

        <div
          className="animar-entrar mt-[26px] flex flex-wrap justify-center gap-2.5"
          style={{ animationDelay: "430ms" }}
        >
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
