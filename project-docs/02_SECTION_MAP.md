# Mapa de Secciones · `src/app/App.tsx`

IDs estables. Referencia cruzada con `03_DESIGN_SYSTEM.md` para colores/tipografía.

## Matriz rápida

| ID | Sección | Anchor | Fondo |
|----|---------|--------|-------|
| NAV | Navegación | fixed | transparente |
| S01 | Hero | `#inicio` | `#2e3b2b` |
| S02 | Filosofía | `#filosofía` | `#f9f8f4` |
| S03 | Espacios | `#espacios` | `#f9f8f4` |
| S04 | Galería | `#galería` | `#0f0e0c` |
| S05 | Proceso | `#proceso` | `#f4f2ec` |
| S06T | Testimonios / Carrusel | — | `#f9f8f4` |
| S06 | Contacto | `#contacto` | `#f9f8f4` |
| FOOTER | Footer | — | `#0f0e0c` |
| FAB | WhatsApp | — | fixed |

---

## [NAV] Navegación

| ID | Elemento | Valor |
|----|----------|-------|
| NAV.1 | Logo | `"Bodas en el Bosque"` |
| NAV.2 | Links | `Filosofía · Espacios · Galería · Proceso · Contacto` |
| NAV.3 | Hamburguesa | solo mobile < 768px |
| NAV.4 | Overlay móvil | fondo verde, links Playfair Display 2rem |
| NAV.5 | Toggle sonido | botón con `.sound-bars` (3 barras, keyframe `soundBar`). Aparece siempre. Inicia audio en primer clic. |

Hover links: color → `#c3caa8`

---

## [S01] HERO

| ID | Elemento | Texto actual |
|----|----------|-------------|
| S01.1 | Eyebrow | `"Servicio integral de bodas en entornos boscosos · México"` |
| S01.2 | H1 | `"Bodas en / el Bosque"` (2ª línea en cursiva arena) |
| S01.3 | Descripción 1 | `"Diseñamos bodas que se sienten parte del bosque…"` |
| S01.4 | Descripción 2 | `"Te acompañamos desde la primera idea hasta el último momento…"` |
| S01.5 | CTA primario | `"Diseñemos tu boda"` → `#contacto` |
| S01.6 | CTA secundario | `"Revisa nuestro trabajo"` → `#galería` |
| S01.7 | Imagen fondo | Unsplash hero, `objectPosition: "center 20%"` |
| S01.8 | Scroll indicator | línea vertical pulsante, bottom-right |

Animación entrada staggered: S01.1→S01.2→S01.3/4→S01.5/6 (heroFade, delays 0/0.12/0.24/0.38s)

---

## [S02] FILOSOFÍA

### Sub-sección A — Intro + Galería

| ID | Elemento | Texto actual |
|----|----------|-------------|
| S02.A.1 | Eyebrow | `"Filosofía"` |
| S02.A.2 | H2 | `"Quiénes somos"` |
| S02.A.3 | Párrafo 1 (cursiva) | `"Bodas en el Bosque nace de la profunda convicción…"` |
| S02.A.4 | Párrafo 2 | `"Somos un equipo especializado en crear bodas integrales…"` |
| S02.A.5 | CTA intermedio | `"Comencemos a diseñar la tuya →"` → `#contacto` |
| S02.A.6 | Galería cycling | 4 fotos Supabase, 20s/imagen, CSS crossfade |
| S02.A.7 | Dots | 4 barras sincronizadas con galería |
| S02.A.8 | Pull quote | `"Una boda que solo podría existir para ustedes."` |

### Sub-sección B — 4 Pilares

Eyebrow: `"Nuestros pilares"` | Grid 4 cols | Cada card: imagen 4:5

**Interactividad premium:**
- Hover → auto-cycling suave con fade (1000ms, intervalo 2400ms).
- Click → card **activa/fija**: flechas prev/next + dots navegables.
- Solo una card activa a la vez.

| ID | Pilar | Fotos | Descripción |
|----|-------|-------|-------------|
| S02.B.1 | Calma | 6 | `"Un proceso humano y claro para que vivas la organización con tranquilidad."` |
| S02.B.2 | Equilibrio | 10 | `"La belleza natural del bosque combinada con diseño sofisticado y funcional."` |
| S02.B.3 | Intención | 6 | `"Cada decisión responde a tu historia como pareja."` |
| S02.B.4 | Presencia | 8 | `"Te acompañamos de cerca en cada etapa, especialmente el día de tu boda."` |

**State:** `activePillar: string|null`, `pillarIdx: Record<string,number>`, `pillarIntervals: useRef`

---

## [S03] ESPACIOS

| ID | Elemento | Texto actual |
|----|----------|-------------|
| S03.0 | Eyebrow | `"Nuestro trabajo"` |
| S03.1 | H2 | `"El bosque se transforma / en tu boda"` (2ª línea en cursiva) |
| S03.2 | Descripción | `"Cada boda que creamos es única porque cada pareja y cada espacio lo es…"` |

Datos en array `SPACES`:

| ID | Nombre | Ubicación | Fotos | Carpeta |
|----|--------|-----------|-------|---------|
| S03.3 | Rincón del Bosque | Estado de México | 22 | `venues_bosque/rincon/` |
| S03.4 | Suspiro | Morelos | 84 | `venues_bosque/suspiro/` |

**Interactividad:**
- Hover → scale(1.05) + overlay `.venue-overlay`.
- Click → modal lightbox con flechas, ESC/ArrowKeys, thumbnails, counter.

---

## [S04] GALERÍA

| ID | Elemento | Texto actual |
|----|----------|-------------|
| S04.0 | Eyebrow | `"Detalles que enamoran"` |
| S04.1 | H2 | `"Ambientes y detalles / que cuentan tu historia"` (2ª línea cursiva arena) |
| S04.2 | Link | `"Ver más →"` → `#contacto` |

Datos en array `GALLERY` — proporción 3:4:

| ID | Label | Key imagen |
|----|-------|-----------|
| S04.3 | Mesa bajo los árboles | `weddingTable` |
| S04.4 | Ceremonia en el claro | `ceremony` |
| S04.5 | El primer camino juntos | `newlyweds` |
| S04.6 | Detalles florales | `weddingFlowers` |

---

## [S05] PROCESO

| ID | Elemento | Texto actual |
|----|----------|-------------|
| S05.0 | Eyebrow | `"Cómo trabajamos"` |
| S05.1 | H2 | `"Acompañamiento único / y personalizado"` |
| S05.2 | Cita lateral | `"Nos esforzamos para que cada experiencia sea única en su tipo…"` (borde terracota) |

Cards (grid 4 cols):

| ID | Nº | Título | Descripción |
|----|-----|--------|-------------|
| S05.3 | 01 | Acompañamiento Total | `"Desde la primera conversación hasta el cierre del evento…"` |
| S05.4 | 02 | Diseño Único | `"Ninguna boda se parece a otra. Todo se crea a la medida…"` |
| S05.5 | 03 | Tranquilidad Absoluta | `"Nos encargamos de la coordinación completa…"` |
| S05.6 | 04 | Atención al Detalle | `"Cada elemento —floral, iluminación, mobiliario, ambientación…"` |

| S05.7 | CTA Strip | `"Una boda que solo podría existir para ustedes."` + `"Comencemos a diseñar la tuya →"` |

---

## [S06T] CARRUSEL EDITORIAL — "Momentos mágicos que hemos creado"

| ID | Elemento | Detalle |
|----|----------|---------|
| S06T.1 | Eyebrow | `"Momentos mágicos que hemos creado"` |
| S06T.2 | Componente | `.testi-stage` / `.testi-frame` |
| S06T.3 | Fuente de imágenes | Bucket Supabase `testimonios_recomendaciones` (público) |
| S06T.4 | Array | `TESTIMONIO_FILES` — 8 archivos (filenames con `encodeURIComponent`) |
| S06T.5 | Auto-advance | cada 4.5 s |
| S06T.6 | Estilo | editorial fashion, minimalista |

---

## [S06] CONTACTO

| ID | Elemento | Texto actual |
|----|----------|-------------|
| S06.1 | Eyebrow | `"Contacto"` |
| S06.2 | H2 | `"Comencemos a diseñar / tu boda en el bosque"` |
| S06.3 | Intro | `"Cuéntanos sobre tu fecha aproximada, tu visión…"` |
| S06.4 | WhatsApp | `+52 777 135 8375` / `wa.me/5217771358375` — **también en FAB** |
| S06.5 | Email | `Bodasenelbosque@gmail.com` |
| S06.6 | Ubicaciones | `"Rincón del Bosque · Suspiro · Valle de Bravo y más"` |

Formulario:

| ID | Campo | Requerido | Placeholder |
|----|-------|-----------|-------------|
| S06.F1 | Nombre completo | ✅ | `"Elena & Rodrigo"` |
| S06.F2 | Correo electrónico | ✅ | `"hola@tucorreo.com"` |
| S06.F3 | Teléfono celular | — | `"+52 777 123 4567"` |
| S06.F4 | Fecha boda | — | `"Otoño 2025 / Noviembre 2025"` |
| S06.F5 | Textarea mensaje | — | `"¿Dónde se conocieron?…"` |
| S06.F6 | Submit | — | `"Enviar mensaje"` |

Post-envío: panel verde `🌿 Gracias por escribirnos · El bosque ya sabe su nombre.` + link a Instagram.

El formulario hace POST a `/api/contact` (Vercel Serverless Function) que proxea a `WEBHOOK_URL`.

---

## [FOOTER]

| ID | Elemento | Valor actual |
|----|----------|-------------|
| F.1 | Nombre | `"Bodas en el Bosque"` |
| F.2 | Tagline | `"Servicio integral de bodas en entornos naturales · México"` |
| F.3 | Teléfono | `+52 777 135 8375` (`tel:+5217771358375`) |
| F.4 | Email | `Bodasenelbosque@gmail.com` |
| F.5 | Instagram | `@bodasbosquepremium`, `@ardenbodasdelbosque` |
| F.6 | Aviso de Privacidad | `/aviso-de-privacidad` (placeholder — página pendiente de crear) |
| F.7 | Copyright | `"© [año dinámico] Bodas en el Bosque. Todos los derechos reservados."` |

## [FAB] WhatsApp

Fixed bottom-right. Link: `https://wa.me/5217771358375?text=Hola…`
