import { Flamingo } from "./icons/Flamingo";
import { siteInfo } from "@/data/menu";

export function SiteFooter() {
  return (
    <footer className="relative mt-8 overflow-hidden border-t border-crema/[0.08] px-[18px] pt-11 pb-[30px] text-center">
      <Flamingo className="pointer-events-none absolute -left-4 bottom-0 w-20 opacity-40" />
      <Flamingo className="pointer-events-none absolute -right-4 bottom-0 w-20 scale-x-[-1] opacity-40" />
      <div className="relative mx-auto max-w-[760px]">
        <p className="font-script mb-3.5 text-[30px] text-agua">{siteInfo.name}</p>
        <p className="mb-1.5 text-[13.5px] text-crema/60">
          {siteInfo.address} · {siteInfo.neighborhood}
        </p>
        <p className="mb-1.5 text-[13.5px] text-crema/60">
          Pedidos:{" "}
          <a
            className="border-b border-agua/50 text-crema no-underline"
            href={`https://wa.me/${siteInfo.whatsappPhone}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {siteInfo.phones[0]}
          </a>{" "}
          ·{" "}
          <a className="border-b border-agua/50 text-crema no-underline" href={`tel:+57${siteInfo.phones[1].replace(/\s/g, "")}`}>
            {siteInfo.phones[1]}
          </a>
        </p>
        <p className="text-[13.5px] text-crema/60">
          <a
            className="border-b border-agua/50 text-crema no-underline"
            href={siteInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {siteInfo.instagramHandle}
          </a>
        </p>
        <p className="mt-5 text-[11.5px] leading-relaxed text-crema/40">
          Las micheladas con Coronita, Like o Smirnoff contienen alcohol y solo se venden a
          mayores de 18 años.
          <br />
          El exceso de alcohol es perjudicial para la salud. Ley 30 de 1986.
        </p>
      </div>
    </footer>
  );
}
