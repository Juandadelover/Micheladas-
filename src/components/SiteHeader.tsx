import { NeonGlasses } from "./icons/NeonGlasses";
import { WhatsAppGlyph } from "./icons/Misc";
import { siteInfo } from "@/data/menu";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-[60] flex items-center gap-3 px-[18px] py-2.5 bg-noche/85 backdrop-blur-xl border-b border-agua/15">
      <div className="flex items-center gap-2.5 mr-auto min-w-0">
        <NeonGlasses className="w-8 h-8 shrink-0" />
        <span className="font-script text-[19px] leading-none text-agua truncate">
          {siteInfo.name}
        </span>
      </div>
      <a
        className="flex items-center gap-1.5 text-[13.5px] font-medium px-3.5 py-2 rounded-full border border-agua/40 text-agua whitespace-nowrap hover:bg-agua/10 transition-colors"
        href={`https://wa.me/${siteInfo.whatsappPhone}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppGlyph className="w-[15px] h-[15px]" />
        Escribir
      </a>
    </header>
  );
}
