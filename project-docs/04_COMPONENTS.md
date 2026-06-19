# Componentes · Bodas en el Bosque

La landing usa **estilos inline** en `App.tsx`. No hay componentes propios reutilizables activos.

---

## Componente disponible: ImageWithFallback

`src/app/components/figma/ImageWithFallback.tsx`  
Acepta todas las props de `<img>`. Si falla la carga → placeholder SVG gris.  
No está en uso actualmente (las imágenes usan `<img>` directo).

---

## Patrones inline reutilizados

Definidos en `App.tsx` como variables, aplicados directamente en JSX:

| Patrón | Línea | Descripción |
|--------|-------|-------------|
| `inputStyle` | 73 | border-bottom solo, DM Sans 300, 0.95rem, foco → `#2e3b2b` |
| `labelStyle` | 88 | DM Sans, 0.68rem, `letter-spacing:0.18em`, uppercase, color `#929186` |
| Eyebrow | múltiple | DM Sans, 0.72rem, `letter-spacing:0.22em`, uppercase, color `#929186` |
| Card hover elevation | ~560 | `translateY(-6px)` + sombra + borde terracota + radial cursor gradient |

---

## Biblioteca shadcn/ui (disponible, no usada en landing)

`src/app/components/ui/` — 58 componentes Radix UI + Tailwind, listos para usar sin instalar dependencias.

Más útiles para expansiones futuras:

| Componente | Archivo | Para qué |
|-----------|---------|----------|
| Button | `button.tsx` | variantes: default/outline/ghost/link |
| Dialog | `dialog.tsx` | modales/overlays |
| Carousel | `carousel.tsx` | carrusel Embla |
| Sheet | `sheet.tsx` | panel lateral |
| Sonner | `sonner.tsx` | notificaciones toast |
| Form | `form.tsx` | wrappers React Hook Form |
| Tabs | `tabs.tsx` | pestañas |

Utilidad: `utils.ts` → `cn(...classes)` para combinar clases Tailwind.
