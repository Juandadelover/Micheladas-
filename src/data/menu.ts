export type FlavorId = "rojos" | "amarillos" | "verdes" | "tamarindo" | "chicle";

export interface Flavor {
  id: FlavorId;
  label: string;
  colorVar: string;
  sencilla: string;
  especial: string;
}

export const flavors: Flavor[] = [
  {
    id: "rojos",
    label: "Frutos Rojos",
    colorVar: "var(--color-rojos)",
    sencilla: "Fresa, manzana verde, cereza y gomitas.",
    especial: "Fresa, manzana, cereza, uva, perlas explosivas y pincho de gomitas.",
  },
  {
    id: "amarillos",
    label: "Frutos Amarillos",
    colorVar: "var(--color-amarillos)",
    sencilla: "Piña, maracuyá, mango y gomitas.",
    especial: "Piña, mango, maracuyá, perlas explosivas y gomitas extra.",
  },
  {
    id: "verdes",
    label: "Frutos Verdes",
    colorVar: "var(--color-verdes)",
    sencilla: "Manzana verde, cereza, mango y gomitas.",
    especial: "Manzana, cereza, mango, perlas explosivas y pincho de gomitas.",
  },
  {
    id: "tamarindo",
    label: "Tamarindo",
    colorVar: "var(--color-tamarindo)",
    sencilla: "3 bolitas de tamarindo, 3 bolones y 2 bom bom bum.",
    especial: "4 bolitas de tamarindo, perlas explosivas, 3 bom bom bum y 5 bolones.",
  },
  {
    id: "chicle",
    label: "Chicle Azul",
    colorVar: "var(--color-chicle)",
    sencilla: "Chicle azul, toque cítrico y gomitas de colores.",
    especial: "Chicle azul cargado, perlas explosivas y pincho de gomitas surtido.",
  },
];

export type MixerId = "sprite" | "ginger" | "soda" | "coronita" | "like" | "smirnoff";

export interface Mixer {
  id: MixerId;
  label: string;
  price: number;
  alcohol: boolean;
}

export const mixers: Mixer[] = [
  { id: "sprite", label: "Sprite", price: 12000, alcohol: false },
  { id: "ginger", label: "Ginger ale", price: 12000, alcohol: false },
  { id: "soda", label: "Soda", price: 13000, alcohol: false },
  { id: "coronita", label: "Coronita", price: 15000, alcohol: true },
  { id: "like", label: "Like", price: 15000, alcohol: true },
  { id: "smirnoff", label: "Smirnoff", price: 18000, alcohol: true },
];

export type ProductCategory = "sencillas" | "especiales" | "ninos";

export interface Product {
  id: string;
  category: ProductCategory;
  name: string;
  tagline: string;
  needsFlavor: boolean;
  needsMixer: boolean;
  basePrice: number | null;
  includes: string[];
}

export const products: Product[] = [
  {
    id: "sencilla",
    category: "sencillas",
    name: "Michelada Sencilla",
    tagline: "La clásica de Rosa: sal escarchada, chamoy y tu fruta favorita.",
    needsFlavor: true,
    needsMixer: false,
    basePrice: 10000,
    includes: ["Sal de la casa", "Chamoy", "Fruta fresca", "Gomitas"],
  },
  {
    id: "especial",
    category: "especiales",
    name: "Michelada Especial",
    tagline: "La versión cargada: más fruta, perlas explosivas y el mixer que elijas.",
    needsFlavor: true,
    needsMixer: true,
    basePrice: null,
    includes: ["Perlas explosivas", "Pincho de gomitas", "Fruta extra", "Elige tu mixer"],
  },
  {
    id: "ninos",
    category: "ninos",
    name: "Michelada para Niños",
    tagline: "Sin alcohol y sin picante: fruta fresca y gomitas para los peques.",
    needsFlavor: true,
    needsMixer: false,
    basePrice: 7000,
    includes: ["Sin picante", "Sin alcohol", "Fruta fresca", "Gomitas"],
  },
];

export const categoryLabels: Record<ProductCategory, string> = {
  sencillas: "Sencillas",
  especiales: "Especiales",
  ninos: "Para niños",
};

export const siteInfo = {
  name: "Micheladas Rose",
  owner: "Rosa Fonseca",
  neighborhood: "Bosconia, Cesar",
  address: "Carrera 20, Barrio Enrique Aarón",
  phones: ["314 736 1420", "323 386 1437"],
  whatsappPhone: "573147361420",
  instagramHandle: "@rose_micheladas",
  instagramUrl: "https://www.instagram.com/rose_micheladas/",
};

export interface MenuItem {
  id: string;
  category: ProductCategory;
  productId: string;
  name: string;
  description: string;
  colorVar: string;
  flavor: Flavor | null;
  priceLabel: string;
  badges: string[];
}

const minMixerPrice = Math.min(...mixers.map((m) => m.price));

export const menuItems: MenuItem[] = [
  ...flavors.map((flavor) => ({
    id: `sencilla-${flavor.id}`,
    category: "sencillas" as ProductCategory,
    productId: "sencilla",
    name: `${flavor.label} · Sencilla`,
    description: flavor.sencilla,
    colorVar: flavor.colorVar,
    flavor,
    priceLabel: formatCOP(10000),
    badges: ["Sal escarchada", "Chamoy"],
  })),
  ...flavors.map((flavor) => ({
    id: `especial-${flavor.id}`,
    category: "especiales" as ProductCategory,
    productId: "especial",
    name: `${flavor.label} · Especial`,
    description: flavor.especial,
    colorVar: flavor.colorVar,
    flavor,
    priceLabel: `Desde ${formatCOP(minMixerPrice)}`,
    badges: ["Perlas explosivas", "Pincho de gomitas"],
  })),
  {
    id: "ninos",
    category: "ninos" as ProductCategory,
    productId: "ninos",
    name: "Michelada para Niños",
    description: "Fruta fresca y gomitas, sin picante ni alcohol. Tú eliges el sabor.",
    colorVar: "var(--color-sol)",
    flavor: null,
    priceLabel: formatCOP(7000),
    badges: ["Sin alcohol", "Sin picante"],
  },
];

export function formatCOP(value: number): string {
  return value.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  });
}
