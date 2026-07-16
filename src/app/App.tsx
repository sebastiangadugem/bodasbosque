import { useState, useRef, useEffect } from "react";

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1769540209381-fe235a5d9355?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600&q=85",
  coupleForest: "https://images.unsplash.com/photo-1769540209510-ec7f53f1ef21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=85",
  forestTrees: "https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=85",
  weddingTable: "https://images.unsplash.com/photo-1773370812452-7f1bb79f6d75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=85",
  weddingFlowers: "https://images.unsplash.com/photo-1773370812335-cb6ab11cc37f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=85",
  newlyweds: "https://images.unsplash.com/photo-1748451728185-496b1ba2c616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=85",
  forestLight: "https://images.unsplash.com/photo-1603976328254-717f448a6183?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=85",
  ceremony: "https://images.unsplash.com/photo-1570074760215-606497449167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=85",
};

const RINCON_IMGS = [
  "/venues_bosque/rincon/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%203.54.43%E2%80%AFp.m..jpg",
  "/venues_bosque/rincon/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%203.55.12%E2%80%AFp.m..jpg",
  "/venues_bosque/rincon/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%203.55.27%E2%80%AFp.m..jpg",
  "/venues_bosque/rincon/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%203.55.42%E2%80%AFp.m..jpg",
  "/venues_bosque/rincon/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%203.56.06%E2%80%AFp.m..jpg",
  "/venues_bosque/rincon/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%203.56.14%E2%80%AFp.m..jpg",
  "/venues_bosque/rincon/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%203.56.25%E2%80%AFp.m..jpg",
  "/venues_bosque/rincon/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%203.56.30%E2%80%AFp.m..jpg",
  "/venues_bosque/rincon/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%203.56.37%E2%80%AFp.m..jpg",
  "/venues_bosque/rincon/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%203.56.51%E2%80%AFp.m..jpg",
  "/venues_bosque/rincon/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%203.57.04%E2%80%AFp.m..jpg",
  "/venues_bosque/rincon/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%203.57.17%E2%80%AFp.m..jpg",
  "/venues_bosque/rincon/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%203.57.45%E2%80%AFp.m..jpg",
  "/venues_bosque/rincon/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%203.57.57%E2%80%AFp.m..jpg",
  "/venues_bosque/rincon/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%203.58.09%E2%80%AFp.m..jpg",
  "/venues_bosque/rincon/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%203.58.26%E2%80%AFp.m..jpg",
  "/venues_bosque/rincon/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%203.58.46%E2%80%AFp.m..jpg",
  "/venues_bosque/rincon/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.00.03%E2%80%AFp.m..jpg",
  "/venues_bosque/rincon/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.00.27%E2%80%AFp.m..jpg",
  "/venues_bosque/rincon/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.00.32%E2%80%AFp.m..jpg",
  "/venues_bosque/rincon/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.00.43%E2%80%AFp.m..jpg",
  "/venues_bosque/rincon/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.01.34%E2%80%AFp.m..jpg",
];

const SUSPIRO_IMGS = [
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.02.02%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.02.16%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.02.25%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.02.29%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.02.31%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.02.34%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.02.35%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.02.37%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.02.45%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.02.48%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.03.01%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.03.04%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.03.06%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.03.09%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.03.11%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.03.13%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.03.17%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.03.25%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.03.28%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.03.30%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.03.42%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.03.45%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.03.49%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.03.53%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.03.55%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.04.10%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.04.12%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.04.17%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.04.20%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.04.23%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.04.26%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.04.32%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.04.34%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.04.36%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.04.43%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.04.47%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.04.50%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.04.52%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.04.54%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.04.56%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.05.01%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.05.04%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.05.15%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.05.18%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.05.20%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.05.25%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.05.30%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.05.35%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.05.38%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.05.41%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.05.46%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.05.51%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.05.56%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.05.58%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.07.07%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.07.39%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.08.15%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.08.22%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.08.24%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.08.31%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.09.03%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.09.10%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.09.25%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.09.30%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.09.45%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.09.53%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.10.02%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.10.12%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.10.21%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.10.23%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.10.28%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.10.30%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.10.39%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.10.45%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.10.49%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.10.53%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.11.03%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.11.05%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.11.13%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.11.19%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.11.23%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.11.25%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.11.28%E2%80%AFp.m..jpg",
  "/venues_bosque/suspiro/Captura%20de%20pantalla%202026-06-16%20a%20la%28s%29%204.11.38%E2%80%AFp.m..jpg",
];

const SPACES = [
  {
    key: "rincon",
    name: "Rincón del Bosque",
    location: "Morelos",
    desc: "Un claro entre encinos centenarios. Íntimo, umbroso y lleno de musgo.",
    images: RINCON_IMGS,
  },
  {
    key: "suspiro",
    name: "Jardín de las Hadas",
    location: "Morelos",
    desc: "Jardín forestal con ficus centenarios y luces cálidas entre las ramas.",
    images: SUSPIRO_IMGS,
  },
];


const PARTNERS = [
  { name: "Boschetto", logo: "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/logos/Captura%20de%20pantalla%202026-06-24%20a%20la(s)%206.53.14%20p.m..png" },
  { name: "Rincón del Bosque", logo: "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/logos/logo_rden_del_bosque.png" },
  { name: "Bodas.com.mx", logo: "https://www.bodas.com.mx/assets/img/logos/gen_logoHeader.svg" },
];

// Recomendaciones reales (bucket Supabase: photos/testimonios_recomendaciones)
// TODO: sustituir por las URLs públicas reales del bucket. Placeholder temporal con imágenes existentes.
const TESTI_BASE = "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/testimonios_recomendaciones/";
const TESTIMONIO_FILES: string[] = [
  "Captura de pantalla 2026-06-25 a la(s) 3.39.05 a.m..png",
  "Captura de pantalla 2026-06-25 a la(s) 3.46.14 a.m..png",
  "Captura de pantalla 2026-06-25 a la(s) 3.47.05 a.m..png",
  "Captura de pantalla 2026-06-25 a la(s) 3.47.44 a.m..png",
  "Captura de pantalla 2026-06-25 a la(s) 3.48.07 a.m..png",
  "Captura de pantalla 2026-06-25 a la(s) 3.52.02 a.m..png",
  "Captura de pantalla 2026-06-25 a la(s) 3.53.05 a.m..png",
  "Captura de pantalla 2026-06-25 a la(s) 3.53.20 a.m..png",
];
const TESTIMONIO_PLACEHOLDER = [
  "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/whatsapp/WhatsApp%20Image%202026-06-10%20at%2007.56.50.jpeg",
  "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/whatsapp/WhatsApp%20Image%202026-06-10%20at%2008.07.09.jpeg",
  "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/whatsapp/WhatsApp%20Image%202026-06-10%20at%2008.07.31%20(1).jpeg",
  "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/whatsapp/WhatsApp%20Image%202026-06-10%20at%2008.07.02.jpeg",
  "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/whatsapp/WhatsApp%20Image%202026-06-10%20at%2008.07.31.jpeg",
];
const TESTIMONIO_IMGS = TESTIMONIO_FILES.length
  ? TESTIMONIO_FILES.map((f) => TESTI_BASE + encodeURIComponent(f))
  : TESTIMONIO_PLACEHOLDER;

const SOCIALS = [
  { platform: "Instagram", handle: "@bodasbosquepremium", url: "https://www.instagram.com/bodasbosquepremium?igsh=dW83cnNiYzR1aW11", net: "ig" as const },
  { platform: "Instagram", handle: "@ardenbodasdelbosque", url: "https://www.instagram.com/ardenbodasdelbosque?igsh=YTAweHk3cGRkNnRy", net: "ig" as const },
];

const CSS = `
  @keyframes scrollPulse { 0%,100%{opacity:0.35} 50%{opacity:1} }
  @keyframes marqueeScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  .marquee-mask { -webkit-mask-image: linear-gradient(to right, transparent, #000 12%, #000 88%, transparent); mask-image: linear-gradient(to right, transparent, #000 12%, #000 88%, transparent); }
  .marquee-track { display: flex; width: max-content; animation: marqueeScroll 48s linear infinite; will-change: transform; transform: translateZ(0); backface-visibility: hidden; }

  /* Skip rendering/painting of off-screen sections — major scroll perf win */
  .cv-section { content-visibility: auto; contain-intrinsic-size: auto 900px; }
  .marquee-track:hover { animation-play-state: paused; }
  .partner-box { width: 150px; height: 70px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; padding: 0 2.25rem; box-sizing: content-box; }
  .partner-logo { max-height: 70px; max-width: 150px; width: auto; height: auto; object-fit: contain; opacity: 0.6; filter: grayscale(1); transition: opacity 0.4s ease, filter 0.4s ease; }
  .partner-logo:hover { opacity: 1; filter: grayscale(0); }
  @media (max-width: 768px) { .partner-box { width: 110px; height: 54px; padding: 0 1.25rem; } .partner-logo { max-height: 54px; max-width: 110px; } .marquee-track { animation-duration: 32s; } }

  /* ── Social cards ── */
  .social-card { display: flex; align-items: center; gap: 1rem; padding: 1.4rem 1.6rem; border: 1px solid rgba(195,202,168,0.16); background: rgba(195,202,168,0.03); text-decoration: none; transition: background 0.35s ease, border-color 0.35s ease, transform 0.35s ease; }
  .social-card:hover { background: rgba(195,202,168,0.08); border-color: rgba(195,202,168,0.4); transform: translateY(-3px); }
  .social-ico { width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .social-arrow { margin-left: auto; color: rgba(195,202,168,0.5); transition: color 0.3s ease, transform 0.3s ease; }
  .social-card:hover .social-arrow { color: #c3caa8; transform: translate(3px,-3px); }

  /* ── Crafted button states: directional fill wipe ── */
  .btn-wipe { position: relative; overflow: hidden; isolation: isolate; transition: color 0.22s ease 0.2s; }
  .btn-wipe > * { position: relative; z-index: 1; }
  .btn-wipe::after { content: ""; position: absolute; inset: 0; z-index: 0; background: var(--wipe, #2e3b2b); transform: scaleY(0); transform-origin: bottom; transition: transform 0.42s cubic-bezier(0.65,0,0.35,1); }
  .btn-wipe:hover::after { transform: scaleY(1); }
  .btn-wipe:active { transform: translateY(1px); }
  /* Arrow that slides on hover with a masked swap */
  .btn-arrow-wrap { display: inline-flex; align-items: center; gap: 0.55em; }
  .btn-arrow { display: inline-block; transition: transform 0.4s cubic-bezier(0.65,0,0.35,1); }
  .btn-wipe:hover .btn-arrow { transform: translateX(5px); }
  /* Text link underline draw */
  .link-draw { position: relative; }
  .link-draw::after { content: ""; position: absolute; left: 0; bottom: -2px; height: 1px; width: 100%; background: currentColor; transform: scaleX(0); transform-origin: right; transition: transform 0.4s cubic-bezier(0.65,0,0.35,1); }
  .link-draw:hover::after { transform: scaleX(1); transform-origin: left; }
  .cta-hero:hover { color: #ffffff; }
  .cta-proc:hover { color: #2e3b2b; }
  .cta-submit:hover { color: #ffffff; }
  /* Success panel reveal */
  @keyframes successReveal { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
  .success-panel { animation: successReveal 0.9s cubic-bezier(0.22,1,0.36,1) both; }
  /* Mobile menu reveal + staggered links */
  @keyframes menuFade { from { opacity: 0; } to { opacity: 1; } }
  @keyframes menuLink { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
  .menu-overlay { animation: menuFade 0.35s ease both; }
  .menu-overlay a.menu-link { animation: menuLink 0.55s cubic-bezier(0.22,1,0.36,1) both; }
  @keyframes heroFade { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
  .hero-fade-1 { animation: heroFade 0.8s ease forwards; opacity:0; }
  .hero-fade-2 { animation: heroFade 0.9s ease 0.12s forwards; opacity:0; }
  .hero-fade-3 { animation: heroFade 0.9s ease 0.24s forwards; opacity:0; }
  .hero-fade-4 { animation: heroFade 0.8s ease 0.38s forwards; opacity:0; }
  html { scroll-behavior: smooth; }
  * { box-sizing: border-box; }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-thumb { background: rgba(46,59,43,0.2); border-radius: 2px; }

  /* ── Spacing (desktop ≥1025px) ── */
  section { padding-top: 4.5rem !important; padding-bottom: 4.5rem !important; }

  /* ── Nav dynamic contrast ── */
  .nav-bar { transition: background 0.45s ease, box-shadow 0.45s ease, backdrop-filter 0.45s ease; }
  .nav-logo { transition: color 0.35s ease; }
  .nav-link { transition: color 0.25s ease !important; }

  /* ── iPad (769 – 1024px) ── */
  @media (min-width: 769px) and (max-width: 1024px) {
    .nav-bar { padding-left: 2rem !important; padding-right: 2rem !important; }
    section { padding-top: 3.5rem !important; padding-bottom: 3.5rem !important; padding-left: 2rem !important; padding-right: 2rem !important; }
    #inicio { padding-left: 2rem !important; padding-right: 2rem !important; }
    .four-col-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .phil-top-grid { gap: 3rem !important; margin-bottom: 3rem !important; }
    .proc-header { gap: 2.5rem !important; }
    .contact-grid { gap: 3.5rem !important; }
    .pull-quote { left: -1rem !important; max-width: 200px !important; }
    footer { flex-direction: column !important; gap: 1.5rem !important; align-items: flex-start !important; }
  }
  @media (min-width: 769px) {
    .hamburger { display: none !important; }
  }

  /* ── Mobile (≤768px) ── */
  @media (max-width: 768px) {
    .nav-bar { padding-left: 1.25rem !important; padding-right: 1.25rem !important; padding-top: 0.85rem !important; padding-bottom: 0.85rem !important; }
    section { padding-top: 3rem !important; padding-bottom: 3rem !important; padding-left: 1.25rem !important; padding-right: 1.25rem !important; }
    #inicio { padding-bottom: 4rem !important; padding-left: 1.25rem !important; padding-right: 1.25rem !important; }
    .two-col-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
    .three-col-grid { grid-template-columns: 1fr !important; gap: 1.75rem !important; }
    .four-col-grid { grid-template-columns: 1fr 1fr !important; gap: 1px !important; }
    .five-col-grid { grid-template-columns: 1fr 1fr !important; }
    .navlinks { display: none !important; }
    .hamburger { display: flex !important; }
    .pull-quote { display: none !important; }
    .phil-top-grid { margin-bottom: 2rem !important; }
    .pillar-eyebrow { margin-bottom: 1.25rem !important; }
    .proc-header { margin-bottom: 1.75rem !important; gap: 2rem !important; }
    .proc-cta { margin-top: 1.25rem !important; flex-direction: column !important; align-items: flex-start !important; }
    .contact-grid { gap: 2rem !important; }
    footer { flex-direction: column !important; gap: 1.25rem !important; padding-left: 1.25rem !important; padding-right: 1.25rem !important; }
    .footer-links { justify-content: flex-start !important; flex-wrap: wrap !important; gap: 1.25rem !important; }
    .hero-h1 { font-size: clamp(40px, 11vw, 64px) !important; line-height: 1.1 !important; }
    .hero-cta-row { flex-direction: column !important; }
    .hero-cta-row a { text-align: center !important; }
  }

  /* ── Small mobile (≤480px) ── */
  @media (max-width: 480px) {
    .four-col-grid { grid-template-columns: 1fr !important; }
    .five-col-grid { grid-template-columns: 1fr !important; }
    section { padding-top: 2.5rem !important; padding-bottom: 2.5rem !important; }
    .hero-h1 { font-size: clamp(36px, 10vw, 48px) !important; line-height: 1.1 !important; }
  }

  div:hover .card-line { width: 100% !important; }

  /* ── Pillar card ── */
  .pillar-card { transition: box-shadow 0.4s ease; }
  .pillar-card:hover { box-shadow: 0 8px 32px rgba(46,59,43,0.13); }
  .pillar-card.pillar-active { box-shadow: 0 14px 44px rgba(46,59,43,0.18); }
  .pillar-img { transition: opacity 1000ms ease; }

  /* ── Venue cinematic strip ── */
  .venue-strip-img { transition: opacity 1200ms ease, transform 0.9s ease; }
  .venue-strip:hover .venue-strip-img { transform: scale(1.04); }
  .venue-desc { opacity: 0; transform: translateY(6px); transition: opacity 0.4s ease, transform 0.4s ease; }
  .venue-strip:hover .venue-desc { opacity: 1; transform: translateY(0); }
  .venue-strip-cta { opacity: 0; transition: opacity 0.4s ease 0.06s, color 0.3s, border-color 0.3s; }
  .venue-strip:hover .venue-strip-cta { opacity: 1; color: #f9f8f4 !important; border-bottom-color: rgba(249,248,244,0.5) !important; }
  @media (hover: none) { .venue-desc { opacity: 1 !important; transform: none !important; } .venue-strip-cta { opacity: 1 !important; } }
  /* Single 1200px content column shared by header, photo and thumbnails so
     everything aligns and stays centered. Photo = full column width, 3:2,
     no max-height (which previously shrank the width and broke centering). */
  .venue-strip { background: #0a0a08; }
  .venue-block { margin: 0 auto; }
  @media (min-width: 769px) {
    .venue-block { max-width: 1200px; padding: 0 3rem; }
    .venue-strip { width: 100%; height: auto !important; aspect-ratio: 3 / 2; }
  }
  @media (max-width: 768px) {
    .venue-strip { height: 80vw !important; min-height: 320px !important; }
    .venue-strip-overlay-text { padding: 1.25rem !important; }
    .venue-thumb-strip { padding: 0.5rem 0 !important; }
  }

  /* ── Pillar hint ── */
  .pillar-hint-text { opacity: 0.55; }

  /* ── Process sequential ── */
  .proc-card { position: relative; }
  .proc-card:not(:last-child)::after { content: "→"; position: absolute; right: -0.9rem; top: 2.4rem; color: rgba(124,74,54,0.32); font-size: 1.1rem; z-index: 10; pointer-events: none; }
  @media (max-width: 1025px) { .proc-card::after { display: none !important; } }

  /* ── Modal ── */
  .venue-modal-backdrop { position: fixed; inset: 0; background: rgba(15,14,12,0.92); z-index: 200; display: flex; align-items: center; justify-content: center; overflow-y: auto; padding: 1rem; }
  .venue-modal-img { max-height: 68vh; max-width: 86vw; object-fit: contain; display: block; user-select: none; }
  .venue-modal-btn { background: rgba(249,248,244,0.08); border: 1px solid rgba(249,248,244,0.15); color: #f9f8f4; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.25s; }
  .venue-modal-btn:hover { background: rgba(249,248,244,0.18); }
  @media (max-width: 768px) {
    .venue-modal-img { max-height: 52vh; max-width: 96vw; }
    .modal-arrows { display: none !important; }
    .modal-inner { flex-direction: column !important; gap: 0 !important; }
  }

  /* ── Editorial body font (Cormorant Garamond) for philosophy + quotes ── */
  .philosophy-text, blockquote, .quote {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.22rem;
    line-height: 1.7;
    font-style: italic;
  }

  /* ── Testimonials carousel (editorial) ── */
  .testi-stage { position: relative; height: 46vh; max-height: 430px; min-height: 320px; display: flex; align-items: center; justify-content: center; }
  .testi-frame { position: absolute; margin: 0; height: 100%; max-width: 30%; display: flex; align-items: center; justify-content: center; transition: transform 0.7s cubic-bezier(0.22,1,0.36,1), opacity 0.7s ease, filter 0.7s ease; will-change: transform, opacity; }
  .testi-frame img { max-height: 100%; max-width: 100%; width: auto; height: auto; object-fit: contain; display: block; background: #ffffff; box-shadow: 0 18px 50px rgba(46,59,43,0.16); border: 1px solid rgba(46,59,43,0.06); image-rendering: -webkit-optimize-contrast; }
  .testi-arrow { position: absolute; top: 50%; transform: translateY(-50%); z-index: 5; width: 44px; height: 44px; border-radius: 50%; background: rgba(249,248,244,0.85); border: 1px solid rgba(46,59,43,0.14); color: #2e3b2b; cursor: pointer; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(6px); transition: background 0.25s, transform 0.25s; }
  .testi-arrow:hover { background: #ffffff; }

  /* ── Sound toggle: animated equalizer bars ── */
  .sound-bars { display: flex; align-items: flex-end; justify-content: center; gap: 2.5px; height: 16px; }
  .sound-bars > span { width: 2.5px; background: #c3caa8; border-radius: 2px; height: 40%; animation: soundBar 1s ease-in-out infinite; }
  .sound-bars > span:nth-child(1) { animation-delay: 0s; }
  .sound-bars > span:nth-child(2) { animation-delay: 0.22s; }
  .sound-bars > span:nth-child(3) { animation-delay: 0.44s; }
  .sound-bars > span:nth-child(4) { animation-delay: 0.12s; }
  @keyframes soundBar { 0%,100% { height: 28%; } 50% { height: 100%; } }
  @media (prefers-reduced-motion: reduce) { .sound-bars > span { animation: none; height: 60%; } }
  .testi-arrow-prev { left: 0; }
  .testi-arrow-next { right: 0; }
  @media (max-width: 768px) {
    .testi-stage { height: 52vh; min-height: 300px; max-height: 400px; }
    .testi-frame { max-width: 62%; }
    .testi-frame img { box-shadow: 0 10px 28px rgba(46,59,43,0.16); }
    .testi-arrow { width: 36px; height: 36px; }
  }

  /* ── Tendencias 2027 Campaign Modal ── */
  @keyframes tendOverlay { from { opacity: 0; } to { opacity: 1; } }
  @keyframes tendModal { from { opacity: 0; transform: translateY(18px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
  .tend-overlay { animation: tendOverlay 0.35s ease both; background: rgba(15,14,12,0.8); backdrop-filter: blur(7px); -webkit-backdrop-filter: blur(7px); position: fixed; inset: 0; z-index: 300; display: flex; align-items: center; justify-content: center; padding: 1rem; overflow-y: auto; }
  .tend-modal { animation: tendModal 0.45s cubic-bezier(0.22,1,0.36,1) 0.05s both; max-width: 900px; width: 100%; display: flex; max-height: 92vh; overflow: hidden; border-radius: 18px; box-shadow: 0 32px 80px rgba(15,14,12,0.5); position: relative; }
  /* Radial wash brightens the top-right, echoing the ring motif above it */
  .tend-left { background: radial-gradient(120% 100% at 85% 0%, #3a4b35 0%, #2e3b2b 55%); padding: 2.75rem 2.5rem; display: flex; flex-direction: column; justify-content: center; flex: 0 0 46%; position: relative; overflow: hidden; }
  .tend-right { background: #f9f8f4; padding: 2.75rem 2.5rem; flex: 1; min-width: 0; overflow-y: auto; position: relative; display: flex; flex-direction: column; justify-content: center; }
  .tend-input { width: 100%; background: transparent; border: none; border-bottom: 1px solid rgba(46,59,43,0.16); padding: 0.75rem 0; font-family: 'DM Sans', sans-serif; font-weight: 300; font-size: 1rem; color: #0f0e0c; outline: none; transition: border-color 0.2s, background-color 0.2s; }
  .tend-input:focus { border-bottom-color: #2e3b2b; background: rgba(46,59,43,0.03); }
  .tend-input::placeholder { color: rgba(46,59,43,0.3); }
  .tend-input.has-error { border-bottom-color: #8c2f24; }
  .tend-error { font-family: 'DM Sans', sans-serif; font-size: 0.75rem; color: #8c2f24; margin: 0.5rem 0 0; }
  .tend-pill { position: fixed; bottom: 6rem; right: 2rem; z-index: 98; display: flex; align-items: center; gap: 0.5rem; padding: 0.62rem 1.1rem; background: rgba(46,59,43,0.94); border: 1px solid rgba(195,202,168,0.28); color: #c3caa8; font-family: 'DM Sans', sans-serif; font-size: 0.65rem; letter-spacing: 0.18em; text-transform: uppercase; cursor: pointer; backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); box-shadow: 0 4px 20px rgba(15,14,12,0.28); transition: background 0.25s, transform 0.2s; }
  .tend-pill:hover { background: rgba(46,59,43,1); transform: translateY(-2px); }

  /* Close button — a direct child of .tend-modal (not the scrollable right panel)
     so it never scrolls out of reach on mobile. */
  .tend-close { position: absolute; top: 0.9rem; right: 0.9rem; z-index: 5; width: 36px; height: 36px; border-radius: 50%; background: rgba(15,14,12,0.32); backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); border: 1px solid rgba(249,248,244,0.22); display: flex; align-items: center; justify-content: center; cursor: pointer; color: #f9f8f4; transition: background 0.2s, transform 0.2s; }
  .tend-close:hover { background: rgba(15,14,12,0.55); transform: scale(1.06); }

  .tend-urgency { font-family: 'DM Sans', sans-serif; font-size: 0.66rem; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase; color: #f9f8f4; margin: 0 0 1.5rem; }
  .tend-kicker { font-family: 'DM Sans', sans-serif; font-size: 0.62rem; font-weight: 400; letter-spacing: 0.22em; text-transform: uppercase; color: rgba(195,202,168,0.6); margin: 0 0 0.7rem; }
  .tend-title { font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4.2vw, 2.7rem); font-style: italic; font-weight: 400; line-height: 1.15; color: #f9f8f4; margin: 0 0 0.9rem; }
  .tend-meta { font-family: 'DM Sans', sans-serif; font-size: 0.85rem; font-weight: 300; color: rgba(249,248,244,0.65); margin: 0; }
  .tend-directions-btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.7rem 1.15rem; margin-top: 1.4rem; align-self: flex-start; border: 1px solid rgba(201,162,39,0.5); border-radius: 8px; background: transparent; color: #d9b84a; font-family: 'DM Sans', sans-serif; font-size: 0.66rem; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; cursor: pointer; transition: background 0.2s, border-color 0.2s; }
  .tend-directions-btn:hover { background: rgba(201,162,39,0.12); border-color: rgba(201,162,39,0.85); }

  .tend-countdown { display: flex; align-items: flex-start; gap: 0.9rem; margin: 2.4rem 0 0; }
  .tend-countdown-item { display: flex; flex-direction: column; align-items: flex-start; }
  .tend-countdown-num { font-family: 'Playfair Display', serif; font-size: 1.9rem; font-weight: 400; color: #f9f8f4; line-height: 1; font-variant-numeric: tabular-nums; }
  .tend-countdown-label { font-family: 'DM Sans', sans-serif; font-size: 0.56rem; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(195,202,168,0.55); margin-top: 0.5rem; }
  .tend-countdown-sep { color: rgba(195,202,168,0.3); font-size: 0.9rem; line-height: 1; padding-top: 0.5rem; }

  .tend-offer-title { font-family: 'Playfair Display', serif; font-size: 1.6rem; font-style: italic; font-weight: 400; color: #2e3b2b; line-height: 1.25; margin: 0 0 0.85rem; }
  .tend-offer-body { font-family: 'DM Sans', sans-serif; font-weight: 300; font-size: 0.92rem; line-height: 1.65; color: #6f6e66; margin: 0 0 1.9rem; }
  .tend-cta { display: flex; align-items: center; justify-content: center; gap: 0.55rem; width: 100%; margin-top: 1.6rem; padding: 1.15rem 1.5rem; background: #24301f; color: #f4f2e9; border: none; border-radius: 10px; font-family: 'DM Sans', sans-serif; font-size: 0.95rem; font-weight: 500; cursor: pointer; transition: background 0.2s, transform 0.2s; }
  .tend-cta:hover { background: #2e3b2b; transform: translateY(-1px); }
  .tend-cta:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }

  /* Location modal — a compact venue card, separate from the campaign modal */
  @keyframes locModal { from { opacity: 0; transform: translateY(14px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
  .loc-overlay { position: fixed; inset: 0; z-index: 320; background: rgba(15,14,12,0.75); backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); display: flex; align-items: center; justify-content: center; padding: 1rem; animation: tendOverlay 0.3s ease both; }
  .loc-card { background: #f9f8f4; width: 100%; max-width: 460px; max-height: 90vh; overflow-y: auto; border-radius: 18px; box-shadow: 0 32px 80px rgba(15,14,12,0.5); animation: locModal 0.35s cubic-bezier(0.22,1,0.36,1) both; position: relative; padding: 2.25rem 2rem; }
  .loc-eyebrow { font-family: 'DM Sans', sans-serif; font-size: 0.62rem; letter-spacing: 0.22em; text-transform: uppercase; color: #8a9a7b; margin: 0 0 0.5rem; }
  .loc-title { font-family: 'Playfair Display', serif; font-size: 1.6rem; font-weight: 400; color: #2e3b2b; margin: 0 0 0.4rem; }
  .loc-address { font-family: 'DM Sans', sans-serif; font-weight: 300; font-size: 0.9rem; color: #6f6e66; margin: 0 0 1.2rem; }
  .loc-map { width: 100%; height: 260px; border: none; border-radius: 12px; display: block; }
  .loc-cta { display: flex; align-items: center; justify-content: center; gap: 0.5rem; width: 100%; margin-top: 1.3rem; padding: 1.05rem 1.5rem; background: #24301f; color: #f4f2e9; border: none; border-radius: 10px; font-family: 'DM Sans', sans-serif; font-size: 0.95rem; font-weight: 500; cursor: pointer; text-decoration: none; transition: background 0.2s; }
  .loc-cta:hover { background: #2e3b2b; }
  @media (max-width: 480px) {
    .loc-card { padding: 1.6rem 1.4rem; }
    .loc-map { height: 220px; }
  }
  @media (prefers-reduced-motion: reduce) {
    .loc-overlay, .loc-card { animation: none; }
  }
  @media (max-width: 768px) {
    .tend-overlay { padding: 0; align-items: flex-end; backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); }
    .tend-modal { flex-direction: column; max-height: 100dvh; height: 100%; max-width: 100%; border-radius: 0; }
    .tend-left { flex: none; padding: 1.6rem 1.5rem 1.5rem; }
    .tend-right { padding: 1.6rem 1.5rem 2rem; flex: 1; }
    .tend-pill { bottom: 5.8rem; right: 1.25rem; }
    .tend-close { top: 0.7rem; right: 0.7rem; width: 34px; height: 34px; }
    .tend-hide-mobile { display: none; }
    .tend-urgency { margin-bottom: 1.1rem; }
    .tend-title { font-size: 1.9rem; }
    .tend-countdown { margin-top: 1.6rem; gap: 0.7rem; }
    .tend-countdown-num { font-size: 1.5rem; }
    .tend-offer-title { font-size: 1.4rem; }
    .tend-offer-body { margin-bottom: 1.4rem; }
  }
  @media (max-width: 420px) {
    .tend-left { padding: 1.4rem 1.2rem 1.3rem; }
    .tend-right { padding: 1.4rem 1.2rem 1.75rem; }
    .tend-title { font-size: 1.65rem; }
    .tend-countdown { gap: 0.5rem; }
    .tend-countdown-num { font-size: 1.3rem; }
    .tend-countdown-label { font-size: 0.5rem; letter-spacing: 0.12em; }
  }
  @media (prefers-reduced-motion: reduce) {
    .tend-overlay, .tend-modal { animation: none; }
  }
`;

/* Reads the Tendencias campaign state from the current URL — supports both
   /tendencias (clean path, needs the vercel.json rewrite) and ?tendencias=1
   (works with zero server config) so ad campaigns can land directly on the form. */
function getTendenciasCampaignState() {
  if (typeof window === "undefined") return { isLanding: false, isGracias: false };
  const params = new URLSearchParams(window.location.search);
  const path = window.location.pathname.replace(/\/$/, "");
  const isGracias = params.get("tendencias") === "gracias" || path === "/tendencias/gracias";
  const isLanding = isGracias || params.get("tendencias") === "1" || path === "/tendencias";
  return { isLanding, isGracias };
}

export default function App() {
  /* MARKER-MAKE-KIT-INVOKED */

  // All state hoisted here to avoid hook conflicts in sub-components
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", fecha: "", mensaje: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);

  // Tendencias 2027 modal
  const [tendenciasOpen, setTendenciasOpen] = useState(false);
  const [tendenciasEmail, setTendenciasEmail] = useState("");
  const [tendenciasEmailError, setTendenciasEmailError] = useState(false);
  const [tendenciasSent, setTendenciasSent] = useState(false);
  const [locationModalOpen, setLocationModalOpen] = useState(false);
  const [tendenciasSending, setTendenciasSending] = useState(false);

  // Countdown to the Tendencias 2027 event (24 de julio, 10:00 AM, hora del centro de México)
  // Ticks every second — the panel shows seconds, so anything slower would visibly stall.
  const TEND_EVENT_TIME = "2026-07-24T10:00:00-06:00";
  const [tendCountdown, setTendCountdown] = useState(() => Math.max(0, new Date(TEND_EVENT_TIME).getTime() - Date.now()));
  useEffect(() => {
    if (!tendenciasOpen) return;
    const id = setInterval(() => {
      setTendCountdown(Math.max(0, new Date(TEND_EVENT_TIME).getTime() - Date.now()));
    }, 1000);
    return () => clearInterval(id);
  }, [tendenciasOpen]);
  const tendDays = Math.floor(tendCountdown / 86400000);
  const tendHours = Math.floor((tendCountdown % 86400000) / 3600000);
  const tendMinutes = Math.floor((tendCountdown % 3600000) / 60000);
  const tendSeconds = Math.floor((tendCountdown % 60000) / 1000);

  // Pillar gallery state
  const [activePillar, setActivePillar] = useState<string | null>(null);
  const [pillarIdx, setPillarIdx] = useState<Record<string, number>>({});
  const pillarIntervals = useRef<Record<string, ReturnType<typeof setInterval>>>({});
  const pillarTouchX = useRef<number | null>(null);

  function startPillarCycle(label: string, total: number) {
    if (pillarIntervals.current[label]) return;
    pillarIntervals.current[label] = setInterval(() => {
      setPillarIdx((prev) => ({ ...prev, [label]: ((prev[label] ?? 0) + 1) % total }));
    }, 2400);
  }

  function stopPillarCycle(label: string) {
    clearInterval(pillarIntervals.current[label]);
    delete pillarIntervals.current[label];
  }

  // Nav dynamic contrast
  // "dark" = nav over a dark section → white text, transparent bg
  // "light" = nav over a light section → forest text, frosted glass backdrop
  const [navTheme, setNavTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const DARK_IDS = ["inicio", "espacios"];
    function updateNav() {
      const y = 50; // check point 50px from top
      let isDark = false;
      for (const id of DARK_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= y && rect.bottom > y) { isDark = true; break; }
      }
      setNavTheme(isDark ? "dark" : "light");
    }
    window.addEventListener("scroll", updateNav, { passive: true });
    updateNav();
    return () => window.removeEventListener("scroll", updateNav);
  }, []);

  // Testimonials carousel
  const [testiIdx, setTestiIdx] = useState(0);
  const [testiZoom, setTestiZoom] = useState<string | null>(null);
  const testiHover = useRef(false);
  const testiTouchX = useRef<number | null>(null);
  useEffect(() => {
    if (TESTIMONIO_IMGS.length < 2) return;
    const id = setInterval(() => {
      if (testiHover.current || document.hidden || testiZoom) return;
      setTestiIdx((i) => (i + 1) % TESTIMONIO_IMGS.length);
    }, 4500);
    return () => clearInterval(id);
  }, [testiZoom]);
  useEffect(() => {
    if (!testiZoom) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setTestiZoom(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [testiZoom]);

  // ── Soundscape: clics sutiles (Web Audio) + ambiente de bosque en loop ──
  const [soundOn, setSoundOn] = useState<boolean>(() => {
    try { return localStorage.getItem("bb-sound") !== "off"; } catch { return true; }
  });
  const soundOnRef = useRef(soundOn);
  useEffect(() => { soundOnRef.current = soundOn; }, [soundOn]);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const ambientRef = useRef<HTMLAudioElement | null>(null);
  // "Earth" ASMR texture (granular brown noise) driven by cursor movement
  const earthGainRef = useRef<GainNode | null>(null);
  const earthFilterRef = useRef<BiquadFilterNode | null>(null);
  const earthSrcRef = useRef<AudioBufferSourceNode | null>(null);
  const earthTargetRef = useRef(0);
  const lastPtRef = useRef<{ x: number; y: number; t: number } | null>(null);

  function fadeAudio(audio: HTMLAudioElement, target: number, done?: () => void) {
    const start = audio.volume;
    const steps = 22;
    const delta = (target - start) / steps;
    let i = 0;
    const id = setInterval(() => {
      i++;
      const v = i >= steps ? target : start + delta * i;
      audio.volume = Math.max(0, Math.min(1, v));
      if (i >= steps) { clearInterval(id); done?.(); }
    }, 38);
  }

  function ensureCtx(): AudioContext | null {
    if (!audioCtxRef.current) {
      const AC = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (AC) audioCtxRef.current = new AC();
    }
    if (audioCtxRef.current && audioCtxRef.current.state === "suspended") audioCtxRef.current.resume();
    return audioCtxRef.current;
  }

  // ASMR click + cursor "earth" texture
  useEffect(() => {
    // Realistic mouse click: two ultra-short bright noise transients (press + release)
    function clickBurst(ctx: AudioContext, t0: number, level: number) {
      const dur = 0.016;
      const buf = ctx.createBuffer(1, Math.max(1, Math.ceil(ctx.sampleRate * dur)), ctx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 6);
      const src = ctx.createBufferSource();
      src.buffer = buf;
      const hp = ctx.createBiquadFilter();
      hp.type = "highpass"; hp.frequency.value = 1400;
      const bp = ctx.createBiquadFilter();
      bp.type = "bandpass"; bp.frequency.value = 3400; bp.Q.value = 0.8;
      const g = ctx.createGain(); g.gain.value = level;
      src.connect(hp).connect(bp).connect(g).connect(ctx.destination);
      src.start(t0);
    }
    function tick() {
      if (!soundOnRef.current) return;
      const ctx = ensureCtx();
      if (!ctx) return;
      const now = ctx.currentTime;
      clickBurst(ctx, now, 0.13);          // press
      clickBurst(ctx, now + 0.013, 0.06);  // release (softer, slightly later)
    }

    // Lazily build the looping dry "leaves rustling" voice (bright filtered white noise)
    function initEarth(ctx: AudioContext) {
      if (earthSrcRef.current) return;
      const len = ctx.sampleRate * 2;
      const buf = ctx.createBuffer(1, len, ctx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1; // white noise → dry/leafy
      const src = ctx.createBufferSource();
      src.buffer = buf; src.loop = true;
      const hp = ctx.createBiquadFilter();
      hp.type = "highpass"; hp.frequency.value = 1800; // strip low rumble → "dry"
      const bp = ctx.createBiquadFilter();
      bp.type = "bandpass"; bp.frequency.value = 4200; bp.Q.value = 0.55;
      const gain = ctx.createGain(); gain.gain.value = 0;
      src.connect(hp).connect(bp).connect(gain).connect(ctx.destination);
      src.start();
      earthSrcRef.current = src; earthFilterRef.current = bp; earthGainRef.current = gain;
    }

    const CLICK_SEL = 'a, button, [role="button"], input[type="submit"], label, summary, .testi-frame, .pillar-card, .social-card, .venue-strip, .proc-card, .partner-box';
    // Elements whose hover animation follows the cursor ("moving earth" feel)
    const EARTH_SEL = '.proc-card, .pillar-card, .venue-strip, #inicio';

    function onClick(e: MouseEvent) {
      const t = e.target as HTMLElement | null;
      if (t && t.closest(CLICK_SEL)) tick();
    }
    function onMove(e: MouseEvent) {
      if (!soundOnRef.current) { earthTargetRef.current = 0; return; }
      const t = e.target as HTMLElement | null;
      const over = t && t.closest(EARTH_SEL);
      const now = performance.now();
      const last = lastPtRef.current;
      lastPtRef.current = { x: e.clientX, y: e.clientY, t: now };
      if (!over) return;
      const ctx = ensureCtx();
      if (!ctx) return;
      initEarth(ctx);
      if (last) {
        const dist = Math.hypot(e.clientX - last.x, e.clientY - last.y);
        const dt = Math.max(12, now - last.t);
        const speed = dist / dt; // px/ms
        earthTargetRef.current = Math.max(earthTargetRef.current, Math.min(0.045, speed * 0.02));
        if (earthFilterRef.current) earthFilterRef.current.frequency.setTargetAtTime(3200 + Math.min(speed, 4) * 950, ctx.currentTime, 0.04);
      }
    }

    document.addEventListener("click", onClick, true);
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("pointermove", onMove);
    };
  }, []);

  // Smooth the earth-texture gain: rises with movement, fades when the cursor rests
  useEffect(() => {
    let raf = 0;
    function loop() {
      const g = earthGainRef.current;
      const ctx = audioCtxRef.current;
      if (g && ctx) {
        earthTargetRef.current *= 0.82;
        if (earthTargetRef.current < 0.0004) earthTargetRef.current = 0;
        const target = soundOnRef.current ? earthTargetRef.current : 0;
        g.gain.setTargetAtTime(target, ctx.currentTime, 0.03);
      }
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Ambient forest loop — starts softly on the first user gesture (autoplay-safe)
  useEffect(() => {
    const audio = ambientRef.current;
    if (!audio) return;
    audio.volume = 0;
    function onGesture() {
      ensureCtx();
      if (!soundOnRef.current || !audio) return;
      audio.play().then(() => fadeAudio(audio, 0.16)).catch(() => {});
    }
    document.addEventListener("pointerdown", onGesture, { once: true });
    document.addEventListener("keydown", onGesture, { once: true });
    return () => {
      document.removeEventListener("pointerdown", onGesture);
      document.removeEventListener("keydown", onGesture);
    };
  }, []);

  function toggleSound() {
    setSoundOn((prev) => {
      const next = !prev;
      try { localStorage.setItem("bb-sound", next ? "on" : "off"); } catch { /* ignore */ }
      const audio = ambientRef.current;
      if (audio) {
        if (next) { audio.play().then(() => fadeAudio(audio, 0.16)).catch(() => {}); }
        else { fadeAudio(audio, 0, () => audio.pause()); }
      }
      if (next && audioCtxRef.current && audioCtxRef.current.state === "suspended") audioCtxRef.current.resume();
      return next;
    });
  }

  // Tendencias 2027 — auto-open once per session, close on ESC
  useEffect(() => {
    const { isLanding, isGracias } = getTendenciasCampaignState();
    if (isLanding) {
      setTendenciasOpen(true);
      if (isGracias) setTendenciasSent(true);
      sessionStorage.setItem("bb-tend-seen", "1");
      return;
    }
    if (sessionStorage.getItem("bb-tend-seen")) return;
    const t = setTimeout(() => {
      setTendenciasOpen(true);
      sessionStorage.setItem("bb-tend-seen", "1");
    }, 2800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!tendenciasOpen) return;
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") setTendenciasOpen(false); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [tendenciasOpen]);

  async function handleTendenciasSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (tendenciasSending) return;
    const email = tendenciasEmail.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setTendenciasEmailError(true);
      return;
    }
    setTendenciasEmailError(false);
    setTendenciasSending(true);
    try {
      const res = await fetch("/api/tendencias", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("failed");
      setTendenciasSent(true);
      // Landed via the campaign link → move to a distinct confirmation URL and
      // fire a page_view so Google Ads can track it as a conversion.
      try {
        const url = new URL(window.location.href);
        const onCampaignPath = url.pathname.replace(/\/$/, "") === "/tendencias";
        if (onCampaignPath) {
          url.pathname = "/tendencias/gracias";
        } else {
          url.searchParams.set("tendencias", "gracias");
        }
        window.history.replaceState({}, "", url.toString());
        const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
        if (typeof gtag === "function") {
          gtag("event", "page_view", {
            page_location: url.toString(),
            page_path: url.pathname + url.search,
            page_title: document.title,
          });
        }
      } catch {
        // non-critical: confirmation URL/tracking is best-effort
      }
    } catch {
      // allow retry
    } finally {
      setTendenciasSending(false);
    }
  }

  // Venue modal state
  const [venueModal, setVenueModal] = useState<{ key: string; idx: number } | null>(null);
  const activeVenue = venueModal ? SPACES.find((s) => s.key === venueModal.key) : null;

  useEffect(() => {
    if (!venueModal || !activeVenue) return;
    const total = activeVenue.images.length;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVenueModal(null);
      if (e.key === "ArrowRight") setVenueModal((m) => m ? { ...m, idx: (m.idx + 1) % total } : null);
      if (e.key === "ArrowLeft") setVenueModal((m) => m ? { ...m, idx: (m.idx - 1 + total) % total } : null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [venueModal, activeVenue]);

  // Venue cover auto-cycling — only ticks while the section is on-screen and tab is visible
  const [venueAutoIdx, setVenueAutoIdx] = useState<Record<string, number>>({});
  const espaciosVisible = useRef(false);
  useEffect(() => {
    const el = document.getElementById("espacios");
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { espaciosVisible.current = entry.isIntersecting; },
      { rootMargin: "100px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    const intervals: Record<string, ReturnType<typeof setInterval>> = {};
    SPACES.forEach((space) => {
      intervals[space.key] = setInterval(() => {
        if (!espaciosVisible.current || document.hidden) return;
        setVenueAutoIdx((prev) => ({
          ...prev,
          [space.key]: ((prev[space.key] ?? 0) + 1) % Math.min(space.images.length, 8),
        }));
      }, 3800);
    });
    return () => { Object.values(intervals).forEach(clearInterval); };
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setSendError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("request failed");
      setSent(true);
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(46,59,43,0.18)",
    padding: "0.75rem 0",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 300,
    fontSize: "0.95rem",
    color: "#0f0e0c",
    outline: "none",
    transition: "border-color 0.3s",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.68rem",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "#929186",
    display: "block",
    marginBottom: "0.4rem",
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{CSS}</style>

      {/* ── NAV ── */}
      <nav
        className="nav-bar"
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "1.25rem 3rem",
          background: navTheme === "light" ? "rgba(249,248,244,0.88)" : "transparent",
          backdropFilter: navTheme === "light" ? "blur(14px) saturate(1.4)" : "none",
          WebkitBackdropFilter: navTheme === "light" ? "blur(14px) saturate(1.4)" : "none",
          boxShadow: navTheme === "light" ? "0 1px 0 rgba(46,59,43,0.08)" : "none",
        }}
      >
        <div
          className="nav-logo"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", letterSpacing: "0.04em",
            color: navTheme === "light" ? "#2e3b2b" : "#f9f8f4" }}
        >
          Bodas en el Bosque
        </div>
        <div className="navlinks" style={{ display: "flex", gap: "2.5rem" }}>
          {["Filosofía", "Espacios", "Galería", "Proceso", "Contacto"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="nav-link"
              style={{
                color: navTheme === "light" ? "rgba(46,59,43,0.65)" : "rgba(249,248,244,0.72)",
                fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem",
                letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = navTheme === "light" ? "#2e3b2b" : "#c3caa8")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = navTheme === "light" ? "rgba(46,59,43,0.65)" : "rgba(249,248,244,0.72)")}
            >{item}</a>
          ))}
        </div>
        <button onClick={() => setMenuOpen(true)} className="hamburger"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer",
            color: navTheme === "light" ? "#2e3b2b" : "#f9f8f4", padding: "0.25rem" }} aria-label="Menú">
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
            <line x1="0" y1="1" x2="22" y2="1" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="0" y1="8" x2="22" y2="8" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="0" y1="15" x2="22" y2="15" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </button>
        {menuOpen && (
          <div className="menu-overlay" style={{ position: "fixed", inset: 0, background: "rgba(18,23,15,0.96)", backdropFilter: "blur(16px) saturate(1.2)", WebkitBackdropFilter: "blur(16px) saturate(1.2)", display: "flex", flexDirection: "column", zIndex: 100 }}>
            {/* Top bar */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.35rem 1.5rem", borderBottom: "1px solid rgba(195,202,168,0.1)" }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", letterSpacing: "0.04em", color: "#f9f8f4" }}>Bodas en el Bosque</span>
              <button onClick={() => setMenuOpen(false)} aria-label="Cerrar menú"
                style={{ background: "none", border: "none", cursor: "pointer", color: "#c3caa8", padding: "0.25rem", display: "flex" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <line x1="5" y1="5" x2="19" y2="19" stroke="currentColor" strokeWidth="1.5"/>
                  <line x1="19" y1="5" x2="5" y2="19" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </button>
            </div>
            {/* Links */}
            <nav style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "0.4rem", padding: "0 1.75rem" }}>
              {["Filosofía", "Espacios", "Galería", "Proceso", "Contacto"].map((item, i) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="menu-link"
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "#f9f8f4", fontFamily: "'Playfair Display', serif", fontSize: "1.85rem", textDecoration: "none", padding: "0.95rem 0", borderBottom: "1px solid rgba(195,202,168,0.1)", animationDelay: `${0.08 + i * 0.06}s` }}>
                  {item}
                  <span style={{ color: "#7c4a36", display: "flex" }}>
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M5 11L11 5M11 5H6M11 5V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </a>
              ))}
            </nav>
            {/* Bottom CTA */}
            <div style={{ padding: "1.5rem 1.75rem 2.5rem" }}>
              <a href="https://wa.me/5217771358375" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}
                style={{ display: "block", textAlign: "center", padding: "1.1rem", background: "#c3caa8", color: "#2e3b2b", fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none" }}>
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="inicio" style={{ position: "relative", height: "100dvh", minHeight: "600px", overflow: "hidden", display: "flex", alignItems: "flex-end", paddingBottom: "4rem", paddingLeft: "3rem", paddingRight: "3rem", background: "#2e3b2b" }}>
        <img src={IMAGES.hero} alt="Pareja caminando entre secuoyas en su boda de bosque"
          decoding="async"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%" }} />
        {/* Bimodal scrim: dark top for nav + transparent center + deep bottom for text */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(30,36,26,0.62) 0%, rgba(30,36,26,0.06) 22%, rgba(30,36,26,0) 42%, rgba(28,33,23,0.42) 62%, rgba(22,27,18,0.9) 100%)" }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: "540px", width: "100%" }}>
          <h1 className="hero-fade-2 hero-h1" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3rem, 8vw, 6.5rem)", fontWeight: 400, lineHeight: 1.08, color: "#f9f8f4", marginBottom: "1.5rem", letterSpacing: "-0.01em", textShadow: "0 2px 24px rgba(15,20,12,0.5)" }}>
            Bodas en<br /><em style={{ fontStyle: "italic", color: "#c3caa8" }}>el Bosque</em>
          </h1>

          <p className="hero-fade-3" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1.05rem", lineHeight: 1.58, color: "rgba(249,248,244,0.82)", maxWidth: "420px", marginBottom: "2rem", textShadow: "0 1px 12px rgba(15,20,12,0.45)" }}>
            Diseñamos bodas que se sienten parte del bosque — de la primera idea al último brindis.
          </p>

          {/* Social proof */}
          <div className="hero-fade-3" style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "2rem" }}>
            <div style={{ display: "flex" }}>
              {(["#8a9e6b", "#b5c28a", "#6e8555"] as string[]).map((c, i) => (
                <span key={i} style={{ width: "24px", height: "24px", borderRadius: "50%", background: c, border: "1.5px solid rgba(22,27,18,0.8)", display: "block", marginLeft: i > 0 ? "-8px" : "0" }} />
              ))}
            </div>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "rgba(195,202,168,0.75)", fontWeight: 300 }}>+120 bodas diseñadas en bosques de México</span>
          </div>

          {/* CTAs */}
          <div className="hero-fade-4 hero-cta-col" style={{ display: "flex", flexDirection: "column", gap: "0.65rem", maxWidth: "420px" }}>
            <a href="#contacto" className="btn-wipe cta-hero"
              style={{ display: "block", width: "100%", padding: "1.2rem 2rem", background: "#c3caa8", color: "#2e3b2b", fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", textAlign: "center", borderRadius: "0", border: "1px solid #c3caa8", boxSizing: "border-box", ["--wipe" as string]: "#2e3b2b" }}
            >
              <span>Cuéntanos tu fecha</span>
            </a>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", letterSpacing: "0.12em", color: "rgba(249,248,244,0.9)", textAlign: "center", margin: 0, textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>
              Sin costo · Respuesta en 24 h
            </p>
            <a href="#galería"
              style={{ display: "block", textAlign: "center", fontFamily: "'DM Sans', sans-serif", fontSize: "0.74rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(195,202,168,0.68)", textDecoration: "none", borderBottom: "1px solid rgba(195,202,168,0.3)", paddingBottom: "2px", transition: "color 0.3s, border-color 0.3s", marginTop: "0.5rem" }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "#c3caa8"; el.style.borderBottomColor = "#c3caa8"; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "rgba(195,202,168,0.68)"; el.style.borderBottomColor = "rgba(195,202,168,0.3)"; }}
            >
              Revisa nuestro trabajo →
            </a>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: "2.5rem", right: "3rem", zIndex: 2 }}>
          <div style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, transparent, #c3caa8)", animation: "scrollPulse 2.2s ease-in-out infinite" }} />
        </div>
      </section>

      {/* ── PHILOSOPHY (merged 02 + 03) ── */}
      <section id="filosofía" className="cv-section" style={{ background: "#f9f8f4", padding: "5rem 3rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          {/* Top: intro text + image */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center", marginBottom: "4.5rem" }} className="two-col-grid phil-top-grid">

            {/* Keyframes injected inline — scoped to this block */}
            <style>{`
              @keyframes galleryFade {
                0%, 20% { opacity: 1; }
                25%, 95% { opacity: 0; }
                100%     { opacity: 1; }
              }
              @keyframes dotPulse {
                0%, 20% { transform: scaleX(1); opacity: 1; }
                25%, 95% { transform: scaleX(0.4); opacity: 0.3; }
                100%     { transform: scaleX(1); opacity: 1; }
              }
            `}</style>

            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#929186", marginBottom: "1.5rem" }}>Filosofía</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.4rem, 4vw, 3.8rem)", fontWeight: 400, lineHeight: 1.15, color: "#2e3b2b", marginBottom: "2.5rem" }}>
                Quiénes somos
              </h2>
              <p className="philosophy-text" style={{ fontWeight: 400, color: "#2e3b2b", marginBottom: "1.5rem" }}>
                Bodas en el Bosque nace de la profunda convicción de que una boda debe sentirse tan natural y eterna como el bosque mismo.
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1.02rem", lineHeight: 1.88, color: "#3a3a36" }}>
                Somos un equipo especializado en crear bodas integrales en entornos boscosos. Diseñamos y producimos cada experiencia con intención, sensibilidad y un alto nivel de detalle para que cada evento sea único e irrepetible.
              </p>
              {/* Intermediate CTA (#7) — keeps a conversion path visible early in the scroll */}
              <a href="#contacto" className="link-draw" style={{ display: "inline-block", marginTop: "1.75rem", fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "0.95rem", color: "#2e3b2b", textDecoration: "none" }}>
                ¿Lista para imaginar tu boda? → Cuéntanos tu fecha
              </a>
            </div>

            {/* Auto-cycling gallery — CSS crossfade, 5 s per image */}
            <div style={{ position: "relative" }}>
              {/* Fixed-ratio container */}
              <div style={{ position: "relative", width: "100%", aspectRatio: "3/4", overflow: "hidden", background: "#2e3b2b" }}>
                {[
                  { src: "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/whatsapp/WhatsApp%20Image%202026-06-10%20at%2007.56.50.jpeg",    delay: "0s"   },
                  { src: "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/whatsapp/WhatsApp%20Image%202026-06-10%20at%2008.07.31%20(1).jpeg", delay: "-15s" },
                  { src: "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/whatsapp/WhatsApp%20Image%202026-06-10%20at%2008.07.09.jpeg",       delay: "-10s" },
                  { src: "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/whatsapp/WhatsApp%20Image%202026-06-10%20at%2008.07.02.jpeg",       delay: "-5s"  },
                ].map(({ src, delay }, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Boda en el bosque diseñada por Bodas en el Bosque — imagen ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      animation: "galleryFade 20s ease-in-out infinite",
                      animationDelay: delay,
                      opacity: i === 0 ? 1 : 0,
                    }}
                  />
                ))}
              </div>

              {/* Progress dots */}
              <div style={{ position: "absolute", bottom: "1.25rem", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "6px", zIndex: 3 }}>
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: "24px",
                      height: "2px",
                      background: "#c3caa8",
                      transformOrigin: "left",
                      animation: "dotPulse 20s ease-in-out infinite",
                      animationDelay: ["0s", "-15s", "-10s", "-5s"][i],
                      opacity: i === 0 ? 1 : 0.3,
                    }}
                  />
                ))}
              </div>

              {/* Pull quote */}
              <div className="pull-quote" style={{ position: "absolute", bottom: "-2rem", left: "-2rem", background: "#2e3b2b", padding: "1.5rem 2rem", maxWidth: "260px" }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1rem", color: "#c3caa8", lineHeight: 1.65, margin: 0 }}>
                  "Una boda que solo podría existir para ustedes."
                </p>
              </div>
            </div>

          </div>

          {/* Divider */}
          <div style={{ borderTop: "1px solid rgba(46,59,43,0.12)", marginBottom: "3rem" }} />

          {/* Bottom: 4 pillars with icons */}
          <div>
            <p className="pillar-eyebrow" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#929186", marginBottom: "2rem", textAlign: "center" }}>
              Nuestros pilares
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "rgba(46,59,43,0.08)" }} className="four-col-grid">
              {([
                {
                  label: "Calma",
                  desc: "Un proceso humano y claro para que vivas la organización con tranquilidad.",
                  images: [
                    "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/bodas_bosque_wha/Calma/rincon_bosque_fachada_lat.jpeg",
                    "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/bodas_bosque_wha/Calma/WhatsApp%20Image%202026-06-10%20at%2008.07.02%20(1).jpeg",
                    "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/bodas_bosque_wha/Calma/WhatsApp%20Image%202026-06-10%20at%2008.07.02.jpeg",
                    "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/bodas_bosque_wha/Calma/WhatsApp%20Image%202026-06-10%20at%2008.07.23%20(1).jpeg",
                    "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/bodas_bosque_wha/Calma/WhatsApp%20Image%202026-06-10%20at%2008.07.24%20(3).jpeg",
                    "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/bodas_bosque_wha/Calma/WhatsApp%20Image%202026-06-10%20at%2008.07.24.jpeg",
                  ],
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 0 1 0 20"/><path d="M12 6v6l4 2"/></svg>,
                },
                {
                  label: "Equilibrio",
                  desc: "La belleza natural del bosque combinada con diseño sofisticado y funcional.",
                  images: [
                    "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/bodas_bosque_wha/Equilibrio/Copia%20de%20WhatsApp%20Image%202026-06-10%20at%2007.56.42.jpeg",
                    "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/bodas_bosque_wha/Equilibrio/rincon_bosque_salon.jpeg",
                    "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/bodas_bosque_wha/Equilibrio/salon_bosque_beige.jpeg",
                    "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/bodas_bosque_wha/Equilibrio/WhatsApp%20Image%202026-06-10%20at%2007.56.43%20(2).jpeg",
                    "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/bodas_bosque_wha/Equilibrio/WhatsApp%20Image%202026-06-10%20at%2007.56.43.jpeg",
                    "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/bodas_bosque_wha/Equilibrio/WhatsApp%20Image%202026-06-10%20at%2007.56.49%20(1).jpeg",
                    "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/bodas_bosque_wha/Equilibrio/WhatsApp%20Image%202026-06-10%20at%2007.56.49%20(3).jpeg",
                    "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/bodas_bosque_wha/Equilibrio/WhatsApp%20Image%202026-06-10%20at%2007.56.51%20(1).jpeg",
                    "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/bodas_bosque_wha/Equilibrio/WhatsApp%20Image%202026-06-10%20at%2007.56.51.jpeg",
                    "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/bodas_bosque_wha/Equilibrio/WhatsApp%20Image%202026-06-10%20at%2008.07.09.jpeg",
                  ],
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="3" x2="12" y2="21"/><path d="M5 7h14"/><path d="M5 17h14"/></svg>,
                },
                {
                  label: "Intención",
                  desc: "Cada decisión responde a tu historia como pareja.",
                  images: [
                    "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/bodas_bosque_wha/Intencion/mesa_banq.jpeg",
                    "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/bodas_bosque_wha/Intencion/WhatsApp%20Image%202026-06-10%20at%2007.56.48.jpeg",
                    "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/bodas_bosque_wha/Intencion/WhatsApp%20Image%202026-06-10%20at%2007.56.50%20(1).jpeg",
                    "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/bodas_bosque_wha/Intencion/WhatsApp%20Image%202026-06-10%20at%2007.56.50%20(2).jpeg",
                    "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/bodas_bosque_wha/Intencion/WhatsApp%20Image%202026-06-10%20at%2007.56.50.jpeg",
                    "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/bodas_bosque_wha/Intencion/WhatsApp%20Image%202026-06-10%20at%2008.07.31.jpeg",
                  ],
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1l2.1-2.1M17 7l2.1-2.1"/></svg>,
                },
                {
                  label: "Presencia",
                  desc: "Te acompañamos de cerca en cada etapa, especialmente el día de tu boda.",
                  images: [
                    "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/bodas_bosque_wha/Presencia/cena_bosque.jpeg",
                    "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/bodas_bosque_wha/Presencia/votos_bosque_dram.jpeg",
                    "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/bodas_bosque_wha/Presencia/WhatsApp%20Image%202026-06-10%20at%2007.56.47.jpeg",
                    "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/bodas_bosque_wha/Presencia/WhatsApp%20Image%202026-06-10%20at%2008.07.10.jpeg",
                    "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/bodas_bosque_wha/Presencia/WhatsApp%20Image%202026-06-10%20at%2008.07.11.jpeg",
                    "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/bodas_bosque_wha/Presencia/WhatsApp%20Image%202026-06-10%20at%2008.07.13.jpeg",
                    "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/bodas_bosque_wha/Presencia/WhatsApp%20Image%202026-06-10%20at%2008.07.31%20(1).jpeg",
                    "https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/bodas_bosque_wha/Presencia/WhatsApp%20Image%202026-06-10%20at%2008.07.32.jpeg",
                  ],
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3"/><path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M17 11c1.7-1 3.5 0 3.5 2s-1.5 3.5-3.5 5"/><path d="M7 11c-1.7-1-3.5 0-3.5 2s1.5 3.5 3.5 5"/></svg>,
                },
              ] as Array<{ label: string; desc: string; images: string[]; icon: React.ReactNode }>).map((pillar) => {
                const isActive = activePillar === pillar.label;
                const currentIdx = pillarIdx[pillar.label] ?? 0;
                return (
                <div
                  key={pillar.label}
                  className={`pillar-card${isActive ? " pillar-active" : ""}`}
                  style={{ background: "#f9f8f4", display: "flex", flexDirection: "column", cursor: "pointer" }}
                  onMouseEnter={() => {
                    if (isActive) return;
                    startPillarCycle(pillar.label, pillar.images.length);
                  }}
                  onMouseLeave={() => {
                    if (isActive) return;
                    stopPillarCycle(pillar.label);
                    setPillarIdx((prev) => ({ ...prev, [pillar.label]: 0 }));
                  }}
                  onClick={() => {
                    if (isActive) {
                      setActivePillar(null);
                      stopPillarCycle(pillar.label);
                    } else {
                      if (activePillar) stopPillarCycle(activePillar);
                      stopPillarCycle(pillar.label);
                      setActivePillar(pillar.label);
                    }
                  }}
                >
                  {/* Image area */}
                  <div
                    style={{ position: "relative", width: "100%", aspectRatio: "4/5", overflow: "hidden", background: "#2e3b2b", flexShrink: 0, touchAction: isActive ? "pan-y" : undefined }}
                    onTouchStart={isActive ? (e) => { pillarTouchX.current = e.touches[0].clientX; } : undefined}
                    onTouchEnd={isActive ? (e) => {
                      if (pillarTouchX.current == null) return;
                      const dx = e.changedTouches[0].clientX - pillarTouchX.current;
                      pillarTouchX.current = null;
                      if (Math.abs(dx) < 40) return;
                      const n = pillar.images.length;
                      setPillarIdx((prev) => {
                        const cur = prev[pillar.label] ?? 0;
                        return { ...prev, [pillar.label]: dx < 0 ? (cur + 1) % n : (cur - 1 + n) % n };
                      });
                    } : undefined}
                  >
                    {pillar.images.map((src, i) => (
                      <img
                        key={src}
                        src={src}
                        alt={`${pillar.label} — detalle de boda en el bosque, imagen ${i + 1}`}
                        className="pillar-img"
                        loading="lazy"
                        decoding="async"
                        style={{
                          position: "absolute",
                          inset: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                          opacity: i === currentIdx ? 1 : 0,
                        }}
                      />
                    ))}
                    {/* Active state: prev/next arrows */}
                    {isActive && (
                      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "flex-end", justifyContent: "center", padding: "1rem", gap: "0.5rem", zIndex: 4 }}>
                        <button
                          onClick={(e) => { e.stopPropagation(); setPillarIdx((prev) => ({ ...prev, [pillar.label]: (currentIdx - 1 + pillar.images.length) % pillar.images.length })); }}
                          style={{ width: "32px", height: "32px", background: "rgba(15,14,12,0.5)", border: "1px solid rgba(195,202,168,0.3)", color: "#c3caa8", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)", transition: "background 0.2s" }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(15,14,12,0.75)"; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(15,14,12,0.5)"; }}
                        >
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M6 2L3 5l3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </button>
                        {/* Dots */}
                        <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
                          {pillar.images.map((_, di) => (
                            <div
                              key={di}
                              onClick={(e) => { e.stopPropagation(); setPillarIdx((prev) => ({ ...prev, [pillar.label]: di })); }}
                              style={{ width: di === currentIdx ? "16px" : "6px", height: "2px", background: di === currentIdx ? "#c3caa8" : "rgba(195,202,168,0.4)", transition: "width 0.3s ease, background 0.3s ease", cursor: "pointer" }}
                            />
                          ))}
                        </div>
                        <button
                          onClick={(e) => { e.stopPropagation(); setPillarIdx((prev) => ({ ...prev, [pillar.label]: (currentIdx + 1) % pillar.images.length })); }}
                          style={{ width: "32px", height: "32px", background: "rgba(15,14,12,0.5)", border: "1px solid rgba(195,202,168,0.3)", color: "#c3caa8", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)", transition: "background 0.2s" }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(15,14,12,0.75)"; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(15,14,12,0.5)"; }}
                        >
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M4 2l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </button>
                      </div>
                    )}
                    {/* Active indicator dot */}
                    {isActive && (
                      <div style={{ position: "absolute", top: "0.85rem", left: "0.85rem", width: "6px", height: "6px", borderRadius: "50%", background: "#c3caa8", zIndex: 5 }} />
                    )}
                  </div>

                  {/* Text area */}
                  <div style={{ padding: "2rem 1.75rem 2.5rem", display: "flex", flexDirection: "column", gap: "0.9rem", flexGrow: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                      <span style={{ color: "#7c4a36", display: "flex", flexShrink: 0 }}>{pillar.icon}</span>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 400, color: "#2e3b2b", margin: 0 }}>
                        {pillar.label}
                      </h3>
                    </div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.84rem", lineHeight: 1.78, color: "#929186", margin: 0 }}>
                      {pillar.desc}
                    </p>
                    <div style={{ marginTop: "auto", paddingTop: "1rem", position: "relative", height: "1px", background: "rgba(46,59,43,0.12)" }}>
                      <div style={{ position: "absolute", bottom: 0, left: 0, height: "1px", width: isActive ? "100%" : "28px", background: "#7c4a36", transition: "width 0.5s ease" }} />
                    </div>
                  </div>
                </div>
                );
              })}
            </div>
            <p className="pillar-hint-text" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#929186", textAlign: "center", marginTop: "1.25rem" }}>
              Presiona un pilar para explorar su galería
            </p>
          </div>

        </div>
      </section>

      {/* ── SPACES ── */}
      <section id="espacios" className="cv-section" style={{ background: "#0f0e0c", paddingTop: "4.5rem", paddingBottom: 0 }}>
        {/* Header */}
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 3rem 3rem" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#929186", marginBottom: "1.25rem" }}>Nuestro trabajo</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 3.5vw, 3.2rem)", fontWeight: 400, color: "#f9f8f4", lineHeight: 1.15, marginBottom: "1.5rem" }}>
            El bosque se transforma<br /><em style={{ fontStyle: "italic", color: "#c3caa8" }}>en tu boda</em>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", lineHeight: 1.82, color: "#929186", maxWidth: "520px" }}>
            Cada boda que creamos es única porque cada pareja y cada espacio lo es. Transformamos entornos boscosos en escenarios mágicos y profundamente personales.
          </p>
        </div>

        {/* Cinematic venue strips */}
        {SPACES.map((space, si) => {
          const previewCount = Math.min(space.images.length, 8);
          const curIdx = venueAutoIdx[space.key] ?? 0;
          return (
            <div key={space.key} className="venue-block" style={{ marginBottom: si < SPACES.length - 1 ? "2.5rem" : 0 }}>
              {/* Main photo area */}
              <div
                className="venue-strip"
                onClick={() => setVenueModal({ key: space.key, idx: curIdx })}
                style={{ position: "relative", height: "65vh", minHeight: "380px", overflow: "hidden", cursor: "pointer" }}
              >
                {space.images.slice(0, previewCount).map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`${space.name}, boda en el bosque en ${space.location} — foto ${i + 1}`}
                    className="venue-strip-img"
                    loading="lazy"
                    decoding="async"
                    style={{
                      position: "absolute", inset: 0, width: "100%", height: "100%",
                      objectFit: "cover", objectPosition: "center",
                      opacity: i === curIdx ? 1 : 0,
                    }}
                  />
                ))}
                {/* Gradient — sólo en la franja inferior, ligero */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,14,12,0.72) 0%, rgba(15,14,12,0.18) 38%, transparent 58%)", zIndex: 2, pointerEvents: "none" }} />
                {/* Text overlay */}
                <div className="venue-strip-overlay-text" style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 3, padding: "2rem 3rem" }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(195,202,168,0.55)", marginBottom: "0.4rem" }}>{space.location}</p>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 3vw, 2.6rem)", fontWeight: 400, color: "#f9f8f4", marginBottom: "0.65rem", lineHeight: 1.1 }}>{space.name}</h3>
                  <p className="venue-desc" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.88rem", color: "rgba(195,202,168,0.8)", lineHeight: 1.7, marginBottom: "1.25rem", maxWidth: "400px" }}>{space.desc}</p>
                  <span className="venue-strip-cta" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c3caa8", borderBottom: "1px solid rgba(195,202,168,0.35)", paddingBottom: "3px", display: "inline-block" }}>
                    Ver galería completa ({space.images.length} fotos) →
                  </span>
                </div>
                {/* Galería badge — siempre visible */}
                <div style={{ position: "absolute", top: "1.25rem", right: "1.25rem", zIndex: 3, background: "rgba(15,14,12,0.42)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", padding: "0.35rem 0.8rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(195,202,168,0.7)" strokeWidth="1.8" strokeLinecap="round"><rect x="3" y="7" width="18" height="13" rx="1"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><circle cx="12" cy="13" r="2.5"/></svg>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(195,202,168,0.65)" }}>{space.images.length} fotos</span>
                </div>
              </div>
              {/* Thumbnail strip */}
              <div className="venue-thumb-strip" style={{ background: "#0a0a08", padding: "0.65rem 0", display: "flex", gap: "3px", overflowX: "auto" }}>
                {space.images.slice(0, previewCount).map((src, i) => (
                  <div
                    key={i}
                    onClick={() => setVenueAutoIdx((prev) => ({ ...prev, [space.key]: i }))}
                    style={{ width: "64px", height: "44px", flexShrink: 0, overflow: "hidden", cursor: "pointer", opacity: i === curIdx ? 1 : 0.35, outline: i === curIdx ? "1px solid rgba(195,202,168,0.55)" : "none", transition: "opacity 0.3s, outline 0.3s" }}
                  >
                    <img src={src} alt="" loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                ))}
                {space.images.length > previewCount && (
                  <div
                    onClick={() => setVenueModal({ key: space.key, idx: 0 })}
                    style={{ width: "64px", height: "44px", flexShrink: 0, background: "rgba(195,202,168,0.07)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background 0.25s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(195,202,168,0.14)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(195,202,168,0.07)"; }}
                  >
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.58rem", letterSpacing: "0.1em", color: "#929186", textAlign: "center", lineHeight: 1.4 }}>+{space.images.length - previewCount}<br />más</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
        <div style={{ height: "4.5rem" }} />
      </section>

      {/* ── TRUST / PARTNERS ── */}
      <section id="galería" className="cv-section" style={{ background: "#ffffff", padding: "4.5rem 0", overflow: "hidden" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 3rem", textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#929186", marginBottom: "1.25rem" }}>Confían en nosotros</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 3.5vw, 3.2rem)", fontWeight: 400, color: "#2e3b2b", lineHeight: 1.15 }}>
            Espacios y marcas<br /><em style={{ fontStyle: "italic" }}>que nos respaldan</em>
          </h2>
        </div>

        {/* Slow infinite marquee */}
        <div className="marquee-mask">
          <div className="marquee-track">
            {[...PARTNERS, ...PARTNERS].map((partner, i) => (
              <div key={i} className="partner-box">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  title={partner.name}
                  className="partner-logo"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS (#3) — carrusel editorial de recomendaciones reales ── */}
      <section id="testimonios" className="cv-section" style={{ background: "#f9f8f4", padding: "5rem 3rem", overflow: "hidden" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#929186", marginBottom: "1.25rem" }}>Nuestras bodas</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 3.5vw, 3.2rem)", fontWeight: 400, color: "#2e3b2b", lineHeight: 1.15 }}>
              Momentos mágicos <em style={{ fontStyle: "italic" }}>que hemos creado</em>
            </h2>
          </div>

          {/* Stage: imagen activa centrada con vecinas atenuadas (estilo revista) */}
          <div
            className="testi-stage"
            onMouseEnter={() => { testiHover.current = true; }}
            onMouseLeave={() => { testiHover.current = false; }}
            onTouchStart={(e) => { testiTouchX.current = e.touches[0].clientX; }}
            onTouchEnd={(e) => {
              if (testiTouchX.current == null) return;
              const dx = e.changedTouches[0].clientX - testiTouchX.current;
              testiTouchX.current = null;
              if (Math.abs(dx) < 40) return;
              const n = TESTIMONIO_IMGS.length;
              setTestiIdx((i) => (dx < 0 ? (i + 1) % n : (i - 1 + n) % n));
            }}
          >
            {TESTIMONIO_IMGS.map((src, i) => {
              const n = TESTIMONIO_IMGS.length;
              let pos = i - testiIdx;
              if (pos > n / 2) pos -= n;
              if (pos < -n / 2) pos += n;
              const isActive = pos === 0;
              const isNeighbor = Math.abs(pos) === 1;
              if (!isActive && !isNeighbor) return null;
              return (
                <figure
                  key={src}
                  className="testi-frame"
                  onClick={() => { if (isActive) setTestiZoom(src); else setTestiIdx(i); }}
                  style={{
                    transform: `translateX(${pos * 64}%) scale(${isActive ? 1 : 0.78})`,
                    opacity: isActive ? 1 : 0.32,
                    filter: isActive ? "none" : "blur(1px)",
                    zIndex: isActive ? 3 : 1,
                    cursor: "pointer",
                  }}
                >
                  <img src={src} alt={`Momento de boda en el bosque ${i + 1}`} loading="lazy" decoding="async" />
                </figure>
              );
            })}

            {/* Flechas */}
            <button className="testi-arrow testi-arrow-prev" aria-label="Anterior"
              onClick={() => setTestiIdx((i) => (i - 1 + TESTIMONIO_IMGS.length) % TESTIMONIO_IMGS.length)}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button className="testi-arrow testi-arrow-next" aria-label="Siguiente"
              onClick={() => setTestiIdx((i) => (i + 1) % TESTIMONIO_IMGS.length)}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>

          {/* Dots */}
          <div style={{ display: "flex", gap: "6px", justifyContent: "center", marginTop: "2.25rem" }}>
            {TESTIMONIO_IMGS.map((_, i) => (
              <button key={i} aria-label={`Ir a recomendación ${i + 1}`} onClick={() => setTestiIdx(i)}
                style={{ width: i === testiIdx ? "22px" : "7px", height: "7px", borderRadius: "999px", border: "none", padding: 0, cursor: "pointer", background: i === testiIdx ? "#2e3b2b" : "rgba(46,59,43,0.22)", transition: "width 0.3s ease, background 0.3s ease" }} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="proceso" className="cv-section" style={{ background: "#f4f2ec", padding: "5rem 3rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          {/* Header row: label + headline left, statement right */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "flex-end", marginBottom: "3.5rem" }} className="two-col-grid proc-header">
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#929186", marginBottom: "1.25rem" }}>Cómo trabajamos</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 3.5vw, 3.2rem)", fontWeight: 400, color: "#2e3b2b", lineHeight: 1.15 }}>
                Acompañamiento único<br /><em style={{ fontStyle: "italic" }}>y personalizado</em>
              </h2>
            </div>
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1.05rem", lineHeight: 1.85, color: "#3a3a36", borderLeft: "2px solid #7c4a36", paddingLeft: "1.5rem" }}>
                Nos esforzamos para que cada experiencia sea única en su tipo, como la historia única de cada pareja. Entregamos el alma en cada boda, acompañando de cerca a la pareja y plasmando sus ideas en una experiencia verdaderamente inolvidable.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }} className="four-col-grid">
            {[
              {
                overhead: "01",
                label: "Acompañamiento Total",
                desc: "Desde la primera conversación hasta el cierre del evento, estamos contigo en cada decisión y cada detalle.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="10" cy="9" r="3.5" />
                    <path d="M3 23c0-4 3.1-7 7-7s7 3 7 7" />
                    <circle cx="20" cy="9" r="3.5" />
                    <path d="M17 23c0-4 3.1-7 7-7" />
                  </svg>
                ),
              },
              {
                overhead: "02",
                label: "Diseño Único",
                desc: "Ninguna boda se parece a otra. Todo se crea a la medida de quiénes son, su historia y el alma del espacio.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 4 L17 11 L25 11 L19 16 L21 24 L14 19 L7 24 L9 16 L3 11 L11 11 Z" />
                  </svg>
                ),
              },
              {
                overhead: "03",
                label: "Tranquilidad Absoluta",
                desc: "Nos encargamos de la coordinación completa para que tú solo vivas el momento. Cero estrés, pura magia.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 3 C7 3 3 8 3 14 C3 20 7 25 14 25 C21 25 25 20 25 14" />
                    <path d="M18 3 C20 5 22 8 22 11" />
                    <path d="M9 13 L13 17 L22 7" />
                  </svg>
                ),
              },
              {
                overhead: "04",
                label: "Atención al Detalle",
                desc: "Cada elemento —floral, iluminación, mobiliario, ambientación— pensado para crear un todo coherente y memorable.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="7" />
                    <line x1="17.5" y1="17.5" x2="24" y2="24" />
                    <line x1="12" y1="9" x2="12" y2="15" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.label}
                className="proc-card"
                style={{
                  background: "#f9f8f4",
                  border: "1px solid rgba(46,59,43,0.1)",
                  padding: "2.5rem 2rem 2.5rem",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                  transition: "transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.35s, border-color 0.35s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-6px)";
                  el.style.boxShadow = "0 16px 40px rgba(46,59,43,0.1)";
                  el.style.borderColor = "rgba(124,74,54,0.3)";
                  const icon = el.querySelector(".card-icon") as HTMLElement;
                  if (icon) { icon.style.color = "#7c4a36"; icon.style.background = "rgba(124,74,54,0.08)"; }
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                  el.style.borderColor = "rgba(46,59,43,0.1)";
                  const icon = el.querySelector(".card-icon") as HTMLElement;
                  if (icon) { icon.style.color = "#929186"; icon.style.background = "rgba(46,59,43,0.05)"; }
                }}
                onMouseMove={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  const rect = el.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  el.style.background = `radial-gradient(200px circle at ${x}px ${y}px, rgba(195,202,168,0.18) 0%, #f9f8f4 70%)`;
                }}
              >
                {/* Overhead number */}
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 400, color: "#7c4a36", marginBottom: "1.25rem", opacity: 0.7 }}>
                  {item.overhead}
                </p>

                {/* Icon */}
                <div
                  className="card-icon"
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "rgba(46,59,43,0.05)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#929186",
                    marginBottom: "1.75rem",
                    transition: "color 0.35s, background 0.35s",
                  }}
                >
                  {item.icon}
                </div>

                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 400, color: "#2e3b2b", marginBottom: "0.85rem", lineHeight: 1.3 }}>
                  {item.label}
                </h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.84rem", lineHeight: 1.8, color: "#929186", margin: 0 }}>
                  {item.desc}
                </p>

                {/* Bottom accent line that grows on hover */}
                <div
                  className="card-line"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    height: "2px",
                    width: "0%",
                    background: "#7c4a36",
                    transition: "width 0.4s cubic-bezier(0.25,0.46,0.45,0.94)",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Bottom CTA strip */}
          <div className="proc-cta" style={{ marginTop: "2.5rem", display: "flex", alignItems: "center", justifyContent: "center", padding: "3rem 2rem", background: "#2e3b2b" }}>
            <a href="#contacto" className="btn-wipe cta-proc"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#2e3b2b", background: "#c3caa8", padding: "1.25rem 3.5rem", textDecoration: "none", display: "inline-block", textAlign: "center", ["--wipe" as string]: "#f9f8f4" }}
            >
              <span className="btn-arrow-wrap">Comencemos a diseñar la tuya <span className="btn-arrow">→</span></span>
            </a>
          </div>

        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contacto" className="cv-section" style={{ background: "#f9f8f4", padding: "5rem 3rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start" }} className="two-col-grid contact-grid">
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#929186", marginBottom: "1.5rem" }}>Contacto</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 3.5vw, 3.5rem)", fontWeight: 400, color: "#2e3b2b", lineHeight: 1.15, marginBottom: "1.25rem" }}>
              Comencemos a diseñar<br /><em style={{ fontStyle: "italic" }}>tu boda en el bosque</em>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem", lineHeight: 1.88, color: "#3a3a36", marginBottom: "2rem" }}>
              Cuéntanos sobre tu fecha aproximada, tu visión y cómo imaginas este momento tan especial.
            </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {[
                { icon: "💬", text: "WhatsApp: +52 777 135 8375", href: "https://wa.me/5217771358375" },
                { icon: "✉", text: "Bodasenelbosque@gmail.com", href: "mailto:Bodasenelbosque@gmail.com" },
              ].map((c) => (
                <a key={c.text} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "flex-start", gap: "0.9rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", color: "#2e3b2b", textDecoration: "none", padding: "1.25rem 0", borderBottom: "1px solid rgba(46,59,43,0.1)", transition: "color 0.3s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#7c4a36")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#2e3b2b")}
                >
                  <span style={{ color: "#7c4a36", flexShrink: 0 }}>{c.icon}</span>
                  {c.text}
                </a>
              ))}
            </div>
          </div>
          <div>
            {sent ? (
              <div className="success-panel" style={{ padding: "3.75rem 2.75rem", background: "rgba(46,59,43,0.05)", border: "1px solid rgba(46,59,43,0.14)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", textAlign: "center" }}>
                <span style={{ fontSize: "2rem", display: "block", marginBottom: "1.25rem" }} aria-hidden="true">🌿</span>
                <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1.7rem", color: "#2e3b2b", marginBottom: "0.85rem" }}>¡Recibimos tu mensaje!</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.92rem", color: "#6b6b62", lineHeight: 1.8, marginBottom: "1.75rem" }}>
                  Te responderemos en menos de 24 horas. Mientras tanto, explora nuestras bodas en Instagram.
                </p>
                <a href="https://www.instagram.com/bodasbosquepremium?igsh=dW83cnNiYzR1aW11" target="_blank" rel="noopener noreferrer" className="link-draw"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#7c4a36", textDecoration: "none" }}>
                  Ver Instagram →
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {[
                  { label: "Nombre completo", key: "nombre", type: "text", placeholder: "Elena & Rodrigo", required: true },
                  { label: "Correo electrónico", key: "email", type: "email", placeholder: "hola@tucorreo.com", required: true },
                  { label: "Teléfono celular", key: "telefono", type: "tel", placeholder: "+52 777 123 4567", required: false },
                  { label: "Fecha aproximada de la boda", key: "fecha", type: "text", placeholder: "Otoño 2025 / Noviembre 2025", required: false },
                ].map((field) => (
                  <div key={field.key}>
                    <label style={labelStyle}>{field.label}</label>
                    <input type={field.type} required={field.required} placeholder={field.placeholder}
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => ((e.target as HTMLElement).style.borderBottomColor = "#2e3b2b")}
                      onBlur={(e) => ((e.target as HTMLElement).style.borderBottomColor = "rgba(46,59,43,0.18)")}
                    />
                  </div>
                ))}
                <div>
                  <label style={labelStyle}>Cuéntanos algo de ustedes</label>
                  <textarea rows={4} placeholder="¿Dónde se conocieron? ¿Qué los hace únicos? ¿Cómo imaginan ese día?"
                    value={form.mensaje}
                    onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={(e) => ((e.target as HTMLElement).style.borderBottomColor = "#2e3b2b")}
                    onBlur={(e) => ((e.target as HTMLElement).style.borderBottomColor = "rgba(46,59,43,0.18)")}
                  />
                </div>
                <button type="submit" className="btn-wipe cta-submit" disabled={sending}
                  style={{ padding: "1.1rem 3rem", background: "#2e3b2b", border: "none", color: "#c3caa8", fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", cursor: sending ? "wait" : "pointer", opacity: sending ? 0.7 : 1, alignSelf: "flex-start", ["--wipe" as string]: "#7c4a36" }}
                >
                  <span>{sending ? "Enviando…" : "Enviar mensaje"}</span>
                </button>
                {sendError && (
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "#a8543b", margin: 0 }}>
                    No se pudo enviar. Intenta de nuevo o escríbenos por WhatsApp.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── SOCIAL ── */}
      <section className="cv-section" style={{ background: "#0f0e0c", padding: "4.5rem 3rem 0" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#929186", marginBottom: "2.5rem" }}>Sigue de cerca nuestro trabajo</p>
          <div className="three-col-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem", textAlign: "left" }}>
            {SOCIALS.map((s) => (
              <a key={s.handle} href={s.url} target="_blank" rel="noopener noreferrer" className="social-card">
                <span className="social-ico" style={{ background: s.net === "ig" ? "linear-gradient(135deg,#feda75,#d62976 45%,#962fbf 80%,#4f5bd5)" : "#1877f2" }}>
                  {s.net === "ig" ? (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="#fff" stroke="none"/></svg>
                  ) : (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff"><path d="M14 8.5h2.5V5.5H14c-2 0-3.5 1.5-3.5 3.5v2H8.5v3h2v6.5h3V14h2.3l.4-3H13.5V9.3c0-.5.2-.8.5-.8z"/></svg>
                  )}
                </span>
                <span style={{ display: "flex", flexDirection: "column", gap: "0.2rem", minWidth: 0 }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.66rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "#929186" }}>{s.platform}</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", color: "#f9f8f4", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{s.handle}</span>
                </span>
                <svg className="social-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5 11L11 5M11 5H6M11 5V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#0f0e0c", padding: "3rem 3rem 2rem", borderTop: "1px solid rgba(195,202,168,0.06)", marginTop: "4.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "2.5rem" }}>
            <div>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "#f9f8f4", marginBottom: "0.4rem" }}>Bodas en el Bosque</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.76rem", color: "#929186", fontWeight: 300, marginBottom: "0.3rem" }}>Servicio integral de bodas en entornos naturales · México</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.76rem", color: "#929186", fontWeight: 300 }}>Servicio en Estado de México, Morelos y CDMX</p>
            </div>
            {/* Contacto directo (#9) */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                { label: "+52 777 135 8375", href: "tel:+5217771358375" },
                { label: "Bodasenelbosque@gmail.com", href: "mailto:Bodasenelbosque@gmail.com" },
              ].map((c) => (
                <a key={c.href} href={c.href}
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "#c3caa8", textDecoration: "none", transition: "color 0.3s" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#f9f8f4")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#c3caa8")}
                >{c.label}</a>
              ))}
            </div>
            <div className="footer-links" style={{ display: "flex", gap: "2.5rem" }}>
              {[
                { label: "Bodas Premium", href: "https://www.instagram.com/bodasbosquepremium?igsh=dW83cnNiYzR1aW11" },
                { label: "Arden del Bosque", href: "https://www.instagram.com/ardenbodasdelbosque?igsh=YTAweHk3cGRkNnRy" },
                { label: "WhatsApp", href: "https://wa.me/5217771358375" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.73rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#929186", textDecoration: "none", transition: "color 0.3s" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#c3caa8")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#929186")}
                >{s.label}</a>
              ))}
            </div>
          </div>
          {/* Bottom bar */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(195,202,168,0.08)" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "#929186", fontWeight: 300, margin: 0 }}>© {new Date().getFullYear()} Bodas en el Bosque. Todos los derechos reservados.</p>
            {/* TODO: enlazar a la página real del Aviso de Privacidad (LFPDPPP) */}
            <a href="/aviso-de-privacidad" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", letterSpacing: "0.08em", color: "#929186", textDecoration: "none", transition: "color 0.3s" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#c3caa8")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#929186")}
            >Aviso de Privacidad</a>
          </div>
        </div>
      </footer>

      {/* ── VENUE MODAL ── */}
      {venueModal && activeVenue && (
        <div
          className="venue-modal-backdrop"
          onClick={() => setVenueModal(null)}
        >
          {/* Main image */}
          <div
            className="modal-inner"
            onClick={(e) => e.stopPropagation()}
            style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", maxWidth: "95vw" }}
          >
            {/* Prev */}
            <button
              className="venue-modal-btn modal-arrows"
              style={{ width: "48px", height: "48px", flexShrink: 0, borderRadius: "50%" }}
              onClick={() => setVenueModal((m) => m ? { ...m, idx: (m.idx - 1 + activeVenue.images.length) % activeVenue.images.length } : null)}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>

            {/* Image + info */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
              <img
                src={activeVenue.images[venueModal.idx]}
                alt={`${activeVenue.name} en ${activeVenue.location} — galería de boda en el bosque, foto ${venueModal.idx + 1} de ${activeVenue.images.length}`}
                className="venue-modal-img"
                decoding="async"
              />
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#929186" }}>
                  {activeVenue.name} — {venueModal.idx + 1} / {activeVenue.images.length}
                </span>
              </div>
              {/* Thumbnail strip — max 12 visible */}
              <div style={{ display: "flex", gap: "3px", maxWidth: "80vw", overflowX: "auto" }}>
                {activeVenue.images.slice(Math.max(0, venueModal.idx - 5), venueModal.idx + 7).map((src, i) => {
                  const realIdx = Math.max(0, venueModal.idx - 5) + i;
                  return (
                    <div
                      key={realIdx}
                      onClick={() => setVenueModal((m) => m ? { ...m, idx: realIdx } : null)}
                      style={{ width: "52px", height: "38px", flexShrink: 0, overflow: "hidden", cursor: "pointer", opacity: realIdx === venueModal.idx ? 1 : 0.45, outline: realIdx === venueModal.idx ? "1px solid #c3caa8" : "none", transition: "opacity 0.2s" }}
                    >
                      <img src={src} alt="" loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Next */}
            <button
              className="venue-modal-btn modal-arrows"
              style={{ width: "48px", height: "48px", flexShrink: 0, borderRadius: "50%" }}
              onClick={() => setVenueModal((m) => m ? { ...m, idx: (m.idx + 1) % activeVenue.images.length } : null)}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>

            {/* Close */}
            <button
              className="venue-modal-btn"
              onClick={() => setVenueModal(null)}
              style={{ position: "absolute", top: "-3rem", right: 0, width: "36px", height: "36px", borderRadius: "50%" }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><line x1="2" y1="2" x2="12" y2="12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><line x1="12" y1="2" x2="2" y2="12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
            </button>
          </div>
        </div>
      )}

      {/* ── TESTIMONIO ZOOM ── */}
      {testiZoom && (
        <div className="venue-modal-backdrop" onClick={() => setTestiZoom(null)}>
          <div onClick={(e) => e.stopPropagation()} style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={testiZoom} alt="Momento de boda en el bosque" decoding="async" className="venue-modal-img" />
            <button className="venue-modal-btn" onClick={() => setTestiZoom(null)} aria-label="Cerrar"
              style={{ position: "absolute", top: "-3rem", right: 0, width: "36px", height: "36px", borderRadius: "50%" }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><line x1="2" y1="2" x2="12" y2="12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><line x1="12" y1="2" x2="2" y2="12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
            </button>
          </div>
        </div>
      )}

      {/* ── TENDENCIAS 2027 MODAL ── */}
      {tendenciasOpen && (
        <div className="tend-overlay" onClick={() => setTendenciasOpen(false)}>
          <div className="tend-modal" onClick={(e) => e.stopPropagation()}>

            {/* ─── LEFT PANEL ─── */}
            <div className="tend-left">
              {/* Concentric rings, echoing the radial wash behind them */}
              <svg style={{ position: "absolute", top: "-70px", right: "-90px", width: "330px", opacity: 0.5, pointerEvents: "none" }} viewBox="0 0 330 330" fill="none" aria-hidden="true">
                <circle cx="165" cy="165" r="164" stroke="rgba(195,202,168,0.16)" strokeWidth="1" />
                <circle cx="165" cy="165" r="126" stroke="rgba(195,202,168,0.12)" strokeWidth="1" />
                <circle cx="165" cy="165" r="88" stroke="rgba(195,202,168,0.09)" strokeWidth="1" />
              </svg>

              <p className="tend-urgency">Últimos espacios disponibles</p>

              <p className="tend-kicker">Showroom · Edición 2027</p>

              <h2 className="tend-title">Tendencias<br />en Bodas</h2>

              <p className="tend-meta">24 — 26 de julio · Rincón del Bosque</p>

              <button type="button" className="tend-directions-btn" onClick={() => setLocationModalOpen(true)}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Cómo llegar
              </button>

              <div className="tend-countdown">
                <div className="tend-countdown-item">
                  <span className="tend-countdown-num">{String(tendDays).padStart(2, "0")}</span>
                  <span className="tend-countdown-label">Días</span>
                </div>
                <span className="tend-countdown-sep">·</span>
                <div className="tend-countdown-item">
                  <span className="tend-countdown-num">{String(tendHours).padStart(2, "0")}</span>
                  <span className="tend-countdown-label">Hrs</span>
                </div>
                <span className="tend-countdown-sep">·</span>
                <div className="tend-countdown-item">
                  <span className="tend-countdown-num">{String(tendMinutes).padStart(2, "0")}</span>
                  <span className="tend-countdown-label">Min</span>
                </div>
                <span className="tend-countdown-sep">·</span>
                <div className="tend-countdown-item">
                  <span className="tend-countdown-num">{String(tendSeconds).padStart(2, "0")}</span>
                  <span className="tend-countdown-label">Seg</span>
                </div>
              </div>
            </div>

            {/* Close — direct child of .tend-modal so it stays put even when the
                form panel scrolls, and reads clearly against either half. */}
            <button className="tend-close" onClick={() => setTendenciasOpen(false)} aria-label="Cerrar">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/>
              </svg>
            </button>

            {/* ─── RIGHT PANEL ─── */}
            <div className="tend-right">
              {!tendenciasSent ? (
                <>
                  <h3 className="tend-offer-title">Tenemos una entrada para ti</h3>
                  <p className="tend-offer-body">
                    Tu pase de cortesía al Showroom.<br />
                    Ingresa tu correo para enviártelo de inmediato.
                  </p>

                  <form onSubmit={handleTendenciasSubmit} noValidate>
                    <label style={labelStyle} htmlFor="tend-email">Correo electrónico</label>
                    <input
                      id="tend-email"
                      className={`tend-input${tendenciasEmailError ? " has-error" : ""}`}
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder="tu@correo.com"
                      aria-invalid={tendenciasEmailError}
                      aria-describedby={tendenciasEmailError ? "tend-email-error" : undefined}
                      value={tendenciasEmail}
                      onChange={(e) => {
                        setTendenciasEmail(e.target.value);
                        if (tendenciasEmailError) setTendenciasEmailError(false);
                      }}
                    />
                    {tendenciasEmailError && (
                      <p className="tend-error" id="tend-email-error">Ingresa un correo válido</p>
                    )}

                    <button type="submit" className="tend-cta" disabled={tendenciasSending}>
                      <span>{tendenciasSending ? "Enviando…" : "Recibir mi pase gratis"}</span>
                      {!tendenciasSending && <span aria-hidden="true">→</span>}
                    </button>
                  </form>
                </>
              ) : (
                <div className="success-panel" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "380px", textAlign: "center", padding: "2.5rem 0" }}>
                  <div style={{ width: "50px", height: "50px", borderRadius: "50%", background: "rgba(46,59,43,0.07)", border: "1px solid rgba(46,59,43,0.12)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2e3b2b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.45rem", fontStyle: "italic", color: "#2e3b2b", marginBottom: "0.75rem" }}>Tu pase va en camino</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.87rem", color: "#929186", lineHeight: 1.75, maxWidth: "260px" }}>
                    Lo enviamos a tu correo. Revisa tu bandeja de entrada. Nos vemos en el Showroom.
                  </p>
                  <button onClick={() => setTendenciasOpen(false)}
                    style={{ marginTop: "2rem", background: "none", border: "1px solid rgba(46,59,43,0.16)", padding: "0.72rem 1.6rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.66rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#2e3b2b", cursor: "pointer", transition: "border-color 0.25s" }}>
                    Cerrar
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── CÓMO LLEGAR — Rincón del Bosque location modal ── */}
      {locationModalOpen && (
        <div className="loc-overlay" onClick={() => setLocationModalOpen(false)}>
          <div className="loc-card" onClick={(e) => e.stopPropagation()}>
            <button className="tend-close" style={{ position: "absolute", top: "0.9rem", right: "0.9rem", background: "rgba(46,59,43,0.08)", border: "1px solid rgba(46,59,43,0.14)", color: "#2e3b2b" }}
              onClick={() => setLocationModalOpen(false)} aria-label="Cerrar">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/>
              </svg>
            </button>

            <p className="loc-eyebrow">Venue</p>
            <h3 className="loc-title">Rincón del Bosque</h3>
            <p className="loc-address">Carr. Federal México–Cuernavaca Km 61+200<br />Rincón del Bosque, 62514 Huitzilac, Morelos</p>

            {/* z=12 keeps Cuernavaca and the highway in frame for context; the
                embed stays pannable/zoomable so visitors can explore from here. */}
            <iframe
              className="loc-map"
              title="Ubicación de Rincón del Bosque en el mapa"
              src="https://www.google.com/maps?q=19.0094194,-99.2276144&z=12&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <a className="loc-cta" href="https://maps.app.goo.gl/sfwNPG9j4inYHE1T8" target="_blank" rel="noopener noreferrer">
              Abrir en Google Maps
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </div>
        </div>
      )}

      {/* ── TENDENCIAS PILL — reopens modal after dismiss ── */}
      {!tendenciasOpen && !menuOpen && (
        <button className="tend-pill" onClick={() => setTendenciasOpen(true)} aria-label="Ver Tendencias 2027">
          <span style={{ color: "#b8996a" }}>♡</span>
          <span>Tendencias 2027</span>
        </button>
      )}

      {/* ── AMBIENT FOREST AUDIO ── */}
      <audio ref={ambientRef} src="https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/AMBForst_Forest%20(ID%200100)_BigSoundBank.com.mp3" loop preload="auto" aria-hidden="true" />

      {/* ── SOUND TOGGLE ── */}
      {!menuOpen && (
        <button
          onClick={toggleSound}
          aria-label={soundOn ? "Silenciar ambiente" : "Activar ambiente de bosque"}
          aria-pressed={soundOn}
          title={soundOn ? "Silenciar ambiente" : "Activar ambiente de bosque"}
          style={{ position: "fixed", bottom: "2rem", left: "2rem", zIndex: 99, width: "46px", height: "46px", background: "rgba(46,59,43,0.92)", borderRadius: "50%", border: "1px solid rgba(195,202,168,0.25)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 4px 18px rgba(15,14,12,0.3)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", transition: "transform 0.3s, box-shadow 0.3s", color: "#c3caa8" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.08)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
        >
          {soundOn ? (
            <span className="sound-bars" aria-hidden="true">
              <span /><span /><span /><span />
            </span>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 9v6h4l5 4V5L8 9H4z" />
              <line x1="17" y1="9" x2="23" y2="15" />
              <line x1="23" y1="9" x2="17" y2="15" />
            </svg>
          )}
        </button>
      )}

      {/* ── WHATSAPP FAB ── */}
      {!menuOpen && (
      <a href="https://wa.me/5217771358375?text=Hola,%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20Bodas%20en%20el%20Bosque"
        target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp"
        style={{ position: "fixed", bottom: "2rem", right: "2rem", zIndex: 99, width: "52px", height: "52px", background: "#2e3b2b", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(46,59,43,0.35)", transition: "transform 0.3s, box-shadow 0.3s", textDecoration: "none" }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.1)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(46,59,43,0.5)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(46,59,43,0.35)"; }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#c3caa8">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>
      )}
    </div>
  );
}
