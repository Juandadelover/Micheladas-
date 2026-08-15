import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Kaushan_Script, Outfit } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

const kaushan = Kaushan_Script({
  variable: "--font-kaushan",
  subsets: ["latin"],
  weight: "400",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const siteUrl = "https://micheladas-rose.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Micheladas Rose · Carta y pedidos",
  description:
    "Micheladas de frutos rojos, verdes, amarillos, tamarindo y chicle en Bosconia, Cesar. Pide por WhatsApp con domicilio o recógela en Carrera 20, Barrio Enrique Aarón.",
  keywords: [
    "micheladas",
    "Bosconia",
    "Cesar",
    "domicilios",
    "Micheladas Rose",
    "micheladas a domicilio",
  ],
  authors: [{ name: "Micheladas Rose" }],
  openGraph: {
    title: "Micheladas Rose · Carta y pedidos",
    description:
      "Frutos rojos, verdes, amarillos, tamarindo y chicle. Pide la tuya por WhatsApp con domicilio en Bosconia.",
    url: siteUrl,
    siteName: "Micheladas Rose",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Micheladas Rose · Carta y pedidos",
    description:
      "Frutos rojos, verdes, amarillos, tamarindo y chicle. Pide la tuya por WhatsApp con domicilio en Bosconia.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#04141a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${bricolage.variable} ${kaushan.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-noche text-crema font-body">
        {children}
      </body>
    </html>
  );
}
