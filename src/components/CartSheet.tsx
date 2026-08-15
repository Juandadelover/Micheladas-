"use client";

import { useMemo, useState } from "react";
import { Sheet } from "./Sheet";
import { WhatsAppGlyph } from "./icons/Misc";
import { useCart } from "@/lib/cart-context";
import { formatCOP } from "@/data/menu";
import { buildWhatsAppLink, buildWhatsAppMessage, type CheckoutDetails } from "@/lib/whatsapp";

export function CartSheet({
  open,
  onClose,
  onOrdered,
}: {
  open: boolean;
  onClose: () => void;
  onOrdered: (message: string) => void;
}) {
  const { lines, removeLine, totalPrice, clear } = useCart();
  const [entrega, setEntrega] = useState<CheckoutDetails["entrega"]>("Domicilio");
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [pago, setPago] = useState<CheckoutDetails["pago"]>("Efectivo");
  const [notas, setNotas] = useState("");
  const [mayorEdad, setMayorEdad] = useState(false);

  const hayAlcohol = useMemo(() => lines.some((l) => l.alcohol), [lines]);
  const puedeEnviar =
    lines.length > 0 &&
    nombre.trim().length > 1 &&
    (entrega === "Recojo en el puesto" || direccion.trim().length > 3) &&
    (!hayAlcohol || mayorEdad);

  function handleSend() {
    if (!puedeEnviar) return;
    const mensaje = buildWhatsAppMessage(lines, { entrega, nombre, direccion, pago, notas });
    window.open(buildWhatsAppLink(mensaje), "_blank", "noopener,noreferrer");
    onOrdered("¡Pedido enviado por WhatsApp!");
    clear();
    setNombre("");
    setDireccion("");
    setNotas("");
    setMayorEdad(false);
    onClose();
  }

  return (
    <Sheet open={open} onClose={onClose} title="Tu pedido">
      {lines.length === 0 ? (
        <div className="px-2 py-10 text-center text-[14.5px] text-crema/60">
          <strong className="font-display mb-1.5 block text-[17px] text-crema">
            Aún no has agregado nada
          </strong>
          Elige tu michelada favorita en la carta.
        </div>
      ) : (
        <>
          <div className="mb-1">
            {lines.map((line) => (
              <div key={line.key} className="flex items-start gap-3 border-b border-crema/[0.08] py-3.5">
                <span
                  className="mt-0.5 grid shrink-0 place-items-center rounded-lg text-[13px] font-bold text-noche"
                  style={{ background: line.flavorColor, width: 26, height: 26 }}
                >
                  {line.qty}
                </span>
                <div className="min-w-0 flex-1">
                  <strong className="block text-[14.8px] font-semibold">{line.productName}</strong>
                  <span className="text-[12.5px] text-crema/60">
                    {[line.flavorLabel, line.mixerLabel].filter(Boolean).join(" · ")}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeLine(line.key)}
                    className="mt-1.5 block text-[12.5px] text-rosa underline"
                  >
                    Quitar
                  </button>
                </div>
                <div className="shrink-0 text-right">
                  <b className="font-display text-[15px]">{formatCOP(line.unitPrice * line.qty)}</b>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-baseline justify-between border-t border-crema/10 pt-[18px] pb-1.5">
            <span className="text-sm text-crema/60">Total en micheladas</span>
            <b className="font-display text-[27px] font-extrabold tracking-tight">{formatCOP(totalPrice)}</b>
          </div>
          <p className="mb-[18px] text-xs text-crema/60">
            El domicilio se cobra aparte según el barrio. Rosa te lo confirma por WhatsApp.
          </p>

          <div className="mb-3.5">
            <label className="mb-1.5 block text-[12.5px] text-crema/60">¿Cómo la recibes?</label>
            <div className="flex gap-2">
              {(["Domicilio", "Recojo en el puesto"] as const).map((opt) => (
                <label
                  key={opt}
                  className={`flex flex-1 cursor-pointer items-center justify-center rounded-[14px] border-[1.5px] px-2 py-3 text-center text-sm transition-colors ${
                    entrega === opt ? "border-agua bg-agua/10" : "border-crema/10 bg-white/[0.03]"
                  }`}
                >
                  <input
                    type="radio"
                    name="entrega"
                    className="sr-only"
                    checked={entrega === opt}
                    onChange={() => setEntrega(opt)}
                  />
                  {opt === "Recojo en el puesto" ? "Recoger" : opt}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-3.5">
            <label htmlFor="nombre" className="mb-1.5 block text-[12.5px] text-crema/60">
              Tu nombre
            </label>
            <input
              id="nombre"
              type="text"
              placeholder="Rosa Fonseca"
              autoComplete="name"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full rounded-[13px] border-[1.5px] border-crema/[0.13] bg-white/[0.04] px-4 py-3.5 text-[15.5px] focus:border-agua focus:outline-none"
            />
          </div>

          {entrega === "Domicilio" && (
            <div className="mb-3.5">
              <label htmlFor="direccion" className="mb-1.5 block text-[12.5px] text-crema/60">
                Dirección y barrio
              </label>
              <input
                id="direccion"
                type="text"
                placeholder="Calle 12 #5-30, Barrio Centro"
                autoComplete="street-address"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                className="w-full rounded-[13px] border-[1.5px] border-crema/[0.13] bg-white/[0.04] px-4 py-3.5 text-[15.5px] focus:border-agua focus:outline-none"
              />
            </div>
          )}

          <div className="mb-3.5">
            <label className="mb-1.5 block text-[12.5px] text-crema/60">Pago</label>
            <div className="flex gap-2">
              {(["Efectivo", "Nequi", "Daviplata"] as const).map((opt) => (
                <label
                  key={opt}
                  className={`flex flex-1 cursor-pointer items-center justify-center rounded-[14px] border-[1.5px] px-2 py-3 text-center text-sm transition-colors ${
                    pago === opt ? "border-agua bg-agua/10" : "border-crema/10 bg-white/[0.03]"
                  }`}
                >
                  <input
                    type="radio"
                    name="pago"
                    className="sr-only"
                    checked={pago === opt}
                    onChange={() => setPago(opt)}
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-3.5">
            <label htmlFor="notas" className="mb-1.5 block text-[12.5px] text-crema/60">
              Notas para Rosa (opcional)
            </label>
            <textarea
              id="notas"
              placeholder="Poquito picante, sin gomitas, extra chamoy…"
              value={notas}
              onChange={(e) => setNotas(e.target.value)}
              className="min-h-16 w-full resize-y rounded-[13px] border-[1.5px] border-crema/[0.13] bg-white/[0.04] px-4 py-3.5 text-[15.5px] focus:border-agua focus:outline-none"
            />
          </div>

          {hayAlcohol && (
            <label className="mb-4 flex cursor-pointer items-start gap-2.5 rounded-[14px] border-[1.5px] border-sol/40 bg-sol/10 px-4 py-3.5 text-[13px] text-crema/80">
              <input
                type="checkbox"
                checked={mayorEdad}
                onChange={(e) => setMayorEdad(e.target.checked)}
                className="mt-0.5 h-[18px] w-[18px] accent-sol"
              />
              Confirmo que soy mayor de 18 años. Tu pedido incluye una michelada con alcohol.
            </label>
          )}

          <button
            type="button"
            disabled={!puedeEnviar}
            onClick={handleSend}
            className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] py-4 text-[16.5px] font-semibold text-noche disabled:cursor-not-allowed disabled:opacity-45"
          >
            <WhatsAppGlyph className="h-5 w-5" />
            Enviar pedido por WhatsApp
          </button>
        </>
      )}
    </Sheet>
  );
}
