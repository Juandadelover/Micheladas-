# Micheladas Rose

Sitio de pedidos para **Micheladas Rose** (Bosconia, Cesar) — carta interactiva,
carrito y pedido final por WhatsApp. Construido con Next.js (App Router) + React +
Tailwind CSS v4.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura

- `src/data/menu.ts` — sabores, mixers, precios y datos del negocio (teléfonos,
  dirección, Instagram). Edita aquí si cambian precios o sabores.
- `src/lib/cart-context.tsx` — estado del carrito (React Context).
- `src/lib/whatsapp.ts` — arma el mensaje y el link `wa.me` del pedido.
- `src/components/` — UI (hero, carta, tarjetas, hojas inferiores de producto y
  carrito, footer).
- `src/components/icons/` — ilustraciones propias en SVG (copas de neón,
  flamenco, vasos por sabor) — no se usan imágenes externas.
- `src/app/icon.tsx`, `apple-icon.tsx`, `opengraph-image.tsx` — favicon e imagen
  de vista previa generados dinámicamente con `next/og`, también sin assets
  externos.

## Deploy en Vercel

1. Sube este repo a GitHub (ya está en la rama de este proyecto).
2. En [vercel.com/new](https://vercel.com/new), importa el repositorio.
3. Vercel detecta Next.js automáticamente — no requiere variables de entorno.
4. Deploy. Cada push a la rama principal genera un nuevo deploy.

## Notas del negocio

- Pedidos por WhatsApp: 314 736 1420 / 323 386 1437.
- Las micheladas especiales con Coronita, Like o Smirnoff contienen alcohol y
  el checkout pide confirmar mayoría de edad antes de habilitar el envío del
  pedido.
