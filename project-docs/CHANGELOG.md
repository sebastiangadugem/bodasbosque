# Changelog · Bodas en el Bosque

Historial de cambios significativos del proyecto. Formato: [Keep a Changelog](https://keepachangelog.com/es-ES/).

---

## [2026-06-25] — Mejoras de producto, despliegue a producción y nuevo campo en formulario

**Commits:** `640b08b` (audio + SEO + seguridad), `47d7cd8` (volumen hojas + SEO + texto)

### Añadido

- **Campo de teléfono celular en el formulario de contacto** — input `type="tel"`, placeholder `"+52 777 123 4567"`, opcional. Se envía al webhook junto con nombre, email, fecha y mensaje.
- **Carrusel editorial** "Momentos mágicos que hemos creado" con 8 fotos reales del bucket `testimonios_recomendaciones` de Supabase. Estilo minimalista fashion, auto-advance 4.5 s. Componentes CSS `.testi-stage` / `.testi-frame`.
- **Sistema de audio Web Audio API** completo:
  - Clicks ASMR sintéticos (`tick()`) — dos transitorios, highpass 1400 Hz, bandpass 3400 Hz.
  - Textura "hojas" movida por cursor (`initEarth()`) — noise granular, highpass 1800 Hz, bandpass 4200 Hz, gain máx 0.045.
  - Ambient forestal en loop desde Supabase, volumen 0.16 (`fadeAudio()`).
  - Toggle con `.sound-bars` (ecualizador animado, keyframe `soundBar`).
  - Arranque solo tras primer gesto de usuario.
- **SEO completo**:
  - `public/hero-og.jpg` — imagen Open Graph 1200×630.
  - `public/robots.txt` — permite indexación, apunta a sitemap.
  - `public/sitemap.xml` — URL raíz, lastmod 2026-06-25.
  - JSON-LD `ProfessionalService` (schema.org).
  - Open Graph completo con dimensiones y alt de imagen.
  - Twitter Card `summary_large_image`.
  - `theme-color: #2e3b2b`, keywords, author, canonical.
- **Cormorant Garamond** añadida a `src/styles/fonts.css`.
- **CTA intermedio** en sección Filosofía: `"Comencemos a diseñar la tuya →"` → `#contacto`.
- **Panel de éxito** mejorado: emoji 🌿 + link a Instagram.
- **Footer**: teléfono real, email real, Instagram links reales, Aviso de Privacidad, año dinámico.

### Cambiado

- CTA secundario Hero: `"Ver bodas reales"` → **`"Revisa nuestro trabajo"`**.
- Título sección testimonios: → **`"Momentos mágicos que hemos creado"`**.
- `api/contact.ts`: `WEBHOOK_URL` eliminado del código fuente → solo en Vercel env vars.
- Volumen textura de hojas: 0.12 → **0.045** (equilibrio con ambient).
- Speed multiplier del cursor para hojas: 0.05 → **0.02**.

### Eliminado

- Sección **equipo** ("Quiénes estarán contigo") — removida del JSX y de las secciones de navegación.
- Bloque **criterios** ("Este servicio es para ti si buscas:") — removido del JSX.
- Todas las menciones visibles de **"bodas reales"** / **"boda real"** en textos del sitio.
- Foto con overlay de UI de Supabase (`...3.39.52 a.m..png`) del array `TESTIMONIO_FILES`.

### Seguridad

- `WEBHOOK_URL` movido a Vercel Environment Variables (cifradas, todos los entornos). Nunca más en el código fuente.
- `api/contact.ts` devuelve `500` si `WEBHOOK_URL` no está configurada.
- **⚠️ Pendiente:** Rotar credenciales S3 de Supabase (key `6c9c7ae…` expuesta en chat de sesión).

### Pendiente

- Crear página real `/aviso-de-privacidad` (LFPDPPP México).
- Probar formulario de contacto end-to-end en producción.
- Verificar indexación SEO en Google Search Console (~2–4 semanas tras despliegue).

---

## [2026-06-19] — Rediseño inicial y optimización de imágenes

**Commit:** `1bfd870`

### Añadido

- Hero rediseñado: prueba social (avatares + "+120 bodas diseñadas en bosques de México"), CTA "Cuéntanos tu fecha".
- Pilares con transición fade (1000ms), hover/click, auto-cycle de imágenes.
- Espacios (Rincón del Bosque + Suspiro): modal lightbox con teclado (ESC / flechas), thumbnails, counter.
- `.gitignore` creado.

### Cambiado

- 106 fotos de venues: PNG (~3.5 MB c/u) → JPEG (máx 1600px, calidad 72) — **8× más ligeras**.
- Symlink `public/venues_bosque` reemplazado por carpeta real (fix crítico Vercel).

### Seguridad

- **⚠️ Token GitHub** `ghp_…` expuesto en chat → debe revocarse.
