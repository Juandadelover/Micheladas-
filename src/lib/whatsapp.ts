import type { CartLine } from "./cart-context";
import { formatCOP, siteInfo } from "@/data/menu";

export interface CheckoutDetails {
  entrega: "Domicilio" | "Recojo en el puesto";
  nombre: string;
  direccion: string;
  pago: "Efectivo" | "Nequi" | "Daviplata";
  notas: string;
}

export function buildWhatsAppMessage(lines: CartLine[], details: CheckoutDetails): string {
  const rows = lines.map((l) => {
    const detalle = [l.flavorLabel, l.mixerLabel].filter(Boolean).join(" · ");
    return `• ${l.qty}x ${l.productName} (${detalle}) — ${formatCOP(l.unitPrice * l.qty)}`;
  });

  const total = lines.reduce((sum, l) => sum + l.qty * l.unitPrice, 0);
  const hayAlcohol = lines.some((l) => l.alcohol);

  const partes = [
    `¡Hola ${siteInfo.owner.split(" ")[0]}! Quiero pedir en *${siteInfo.name}*`,
    "",
    ...rows,
    "",
    `Total: ${formatCOP(total)}`,
    "",
    `Entrega: ${details.entrega}`,
  ];

  if (details.entrega === "Domicilio" && details.direccion.trim()) {
    partes.push(`Dirección: ${details.direccion.trim()}`);
  }

  partes.push(`Nombre: ${details.nombre.trim()}`);
  partes.push(`Pago: ${details.pago}`);

  if (details.notas.trim()) {
    partes.push(`Notas: ${details.notas.trim()}`);
  }

  if (hayAlcohol) {
    partes.push("", "Confirmo que soy mayor de 18 años.");
  }

  return partes.join("\n");
}

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${siteInfo.whatsappPhone}?text=${encodeURIComponent(message)}`;
}
