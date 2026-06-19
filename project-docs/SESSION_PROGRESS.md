# Progreso de sesión — Junio 2026

> Bitácora de los cambios hechos en la conversación con Claude. Léela para entender
> en qué estado quedó el proyecto y qué falta. Complementa a `CLAUDE.md`.

**Última actualización:** 2026-06-19
**Commit de referencia:** `1bfd870` (rama `main`, ya en GitHub)

---

## 1. Estado del despliegue (LO MÁS IMPORTANTE)

- **Repo GitHub:** `sebastiangadugem/bodasbosque` — `main` tiene la versión correcta.
- **Vercel:** conectado a ese repo vía integración Git.
- **Build verificado localmente:** `npm run build` → `dist/` incluye `dist/venues_bosque/...`.

### Problema resuelto: imágenes no cargaban en Vercel
**Causa raíz #1 — symlink absoluto.** `public/venues_bosque` era un *enlace simbólico*
a una ruta absoluta del Mac (`/Users/gadu/...`). En Vercel esa ruta no existe → las
imágenes daban 404. **Solución:** se reemplazó por una **carpeta real** dentro de
`public/venues_bosque/` con los archivos `.jpg`.

**Causa raíz #2 — deploy viejo de drag-and-drop.** El primer deploy se subió manualmente
(drag-and-drop) con el symlink roto. Darle "Redeploy" reconstruía ese mismo snapshot, no
git. **Solución:** forzar deploy desde git con un push nuevo (la integración Git de Vercel
construye automáticamente en cada push a `main`).

> ⚠️ Si las imágenes vuelven a fallar: verificar que Vercel esté desplegando el **commit
> de git** (no un deploy manual) y que `public/venues_bosque/` exista como carpeta real
> (no symlink). Comando: `git ls-files public/venues_bosque | wc -l` debe dar **106**.

---

## 2. Optimización de imágenes

- Las 106 fotos de venues eran PNG (~3.5 MB c/u, 350 MB total) → el push a GitHub
  fallaba por tamaño (HTTP 408) y el scroll se trababa por decodificar PNGs pesados.
- **Convertidas a JPEG** con `sips` (nativo macOS): máx 1600px, calidad 72 → **~430 KB
  promedio (8× más ligeras)**. Originales `.png` eliminados.
- **Repo:** de ~395 MB a ~45 MB. Historial reescrito (commit raíz) para que los PNG
  nunca entraran a git.
- Rutas en `App.tsx` actualizadas de `.png` → `.jpg`.

---

## 3. Rediseño y features (todo en `src/app/App.tsx`)

- **Hero:** rediseño con título "Bodas en el Bosque", prueba social (avatares +
  "+120 bodas diseñadas en bosques de México"), CTA cuadrado "Cuéntanos tu fecha".
- **Pilares (Filosofía):** tarjetas con transición fade (1000ms), hover/click,
  auto-cycle de imágenes por pilar.
- **Espacios:** dos venues (Rincón del Bosque / Suspiro) con imagen principal
  auto-cíclica, badge "N fotos", tira de miniaturas y modal lightbox con teclado
  (ESC / flechas).
- **Confían en nosotros:** carrusel marquee (48s) de logos en cajas de tamaño
  uniforme (`.partner-box`), fondo blanco.
- **Síguenos (redes):** eyebrow "SIGUE DE CERCA NUESTRO TRABAJO" + 3 tarjetas
  (Instagram @zahro_bodas, @bodasbosquepremium, Facebook Zahro Bodas) con iconos
  de marca y flecha animada.
- **Contacto:** sin fila de ubicación; email `Bodasenelbosque@gmail.com`;
  WhatsApp `+52 777 135 8375` (`wa.me/5217771358375`).

### Estados de botón "crafteados" (evitando animaciones genéricas)
- `.btn-wipe`: relleno que sube con `scaleY` + cambio de color del texto sincronizado.
  Hero (texto → crema `#f9f8f4` para contraste), Proceso, Submit.
- Flecha deslizante en CTA de proceso; `.link-draw` (subrayado dibujado).

### Performance
- `content-visibility: auto` en 6 secciones (omite render fuera de viewport).
- Auto-cycle de venues pausado cuando la sección no está visible / pestaña oculta
  (IntersectionObserver + `document.hidden`).
- Aceleración GPU en marquee; `loading="lazy"` + `decoding="async"` en imágenes.

---

## 4. Higiene de repo
- `.gitignore` creado: `node_modules/`, `dist/`, `.env`, `.env.*`, `.DS_Store`, `*.log`.

---

## 5. Pendientes / riesgos conocidos

1. **Logos de Facebook** (Boschetto, Rincón del Bosque) en `App.tsx` usan URLs del CDN
   de Facebook con **token que expira en días** (`oe=...`). Cuando dejen de verse,
   descargarlos a `public/` y servirlos local (como se hizo con los venues).
   Bodas.com.mx y Arden son estables.
2. **Token de GitHub** `ghp_…` fue expuesto en chat → **debe revocarse/regenerarse**.
3. Tras confirmar el deploy, considerar quitar `<meta name="robots" content="noindex">`
   de `index.html` si se quiere que Google indexe el sitio.
