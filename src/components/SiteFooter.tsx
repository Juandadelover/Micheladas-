import { Flamingo } from "./icons/Flamingo";
import { PinIcon, PhoneIcon, InstagramIcon } from "./icons/Contact";
import { siteInfo } from "@/data/menu";

export function SiteFooter() {
  return (
    <footer className="relative mt-8 overflow-hidden pt-11 pb-[30px] text-center">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-agua/50 to-transparent" />
      <Flamingo className="pointer-events-none absolute -left-4 bottom-0 w-20 opacity-40" />
      <Flamingo className="pointer-events-none absolute -right-4 bottom-0 w-20 scale-x-[-1] opacity-40" />

      <div className="relative mx-auto max-w-[460px] px-[18px]">
        <p className="font-script mb-5 text-[30px] text-agua">{siteInfo.name}</p>

        <div className="flex flex-col items-center gap-2.5 text-[13.5px] text-crema/70">
          <p className="flex items-center gap-2">
            <PinIcon className="h-4 w-4 shrink-0 text-agua/80" />
            {siteInfo.address} · {siteInfo.neighborhood}
          </p>
          <p className="flex items-center gap-2">
            <PhoneIcon className="h-4 w-4 shrink-0 text-agua/80" />
            <a
              className="border-b border-agua/50 text-crema no-underline"
              href={`https://wa.me/${siteInfo.whatsappPhone}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteInfo.phones[0]}
            </a>
            <span className="text-crema/40">·</span>
            <a
              className="border-b border-agua/50 text-crema no-underline"
              href={`tel:+57${siteInfo.phones[1].replace(/\s/g, "")}`}
            >
              {siteInfo.phones[1]}
            </a>
          </p>
          <p className="flex items-center gap-2">
            <InstagramIcon className="h-4 w-4 shrink-0 text-agua/80" />
            <a
              className="border-b border-agua/50 text-crema no-underline"
              href={siteInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteInfo.instagramHandle}
            </a>
          </p>
        </div>

        <p className="mt-6 border-t border-crema/[0.08] pt-5 text-[11.5px] leading-relaxed text-crema/40">
          Las micheladas con Coronita, Like o Smirnoff contienen alcohol y solo se venden a
          mayores de 18 años.
          <br />
          El exceso de alcohol es perjudicial para la salud. Ley 30 de 1986.
        </p>
      </div>
    </footer>
  );
}
