# Landing Page · Bodas en el Bosque

Landing premium para servicio de bodas en bosques (México). Una SPA React de página única — **todo el contenido editable vive en `src/app/App.tsx`**.

## Stack

| | |
|---|---|
| Framework | React 18.3.1 + Vite 6.3.5 |
| Styling | Tailwind CSS 4 + estilos inline (CSSProperties) |
| Animaciones | CSS keyframes inline + JS onMouseEnter/Leave |
| Fuentes | Google Fonts: Playfair Display + DM Sans |
| Imágenes | Unsplash (stock) + Supabase Storage (reales) |
| UI Library | shadcn/ui (Radix UI) — instalada, no usada en landing |
| Package manager | pnpm |

## Orden de secciones

```
[NAV]    fixed top, transparente
[S01]    HERO          — 100dvh, fondo #2e3b2b
[S02]    FILOSOFÍA     — fondo #f9f8f4, galería auto-cycling + 4 pilares
[S03]    ESPACIOS      — fondo #f9f8f4, grid 2×2
[S04]    GALERÍA       — fondo #0f0e0c, grid 4 cols
[S05]    PROCESO       — fondo #f4f2ec, 4 cards + CTA strip
[S06]    CONTACTO      — fondo #f9f8f4, 2 cols: info + formulario
[FOOTER] fondo #0f0e0c
[FAB]    WhatsApp, fixed bottom-right
```

## Ejecutar

```bash
pnpm install && pnpm dev   # http://localhost:5173
pnpm build                 # producción
```

## Archivos clave

| Archivo | Rol |
|---------|-----|
| `src/app/App.tsx` | **TODO el contenido de la landing** |
| `src/styles/theme.css` | Tokens de color y tema |
| `src/styles/fonts.css` | Import Google Fonts |
| `index.html` | HTML raíz, meta tags |
| `vite.config.ts` | Configuración build |
| `src/app/components/ui/` | Biblioteca shadcn/ui |
