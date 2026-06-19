# Mapa de Secciones · `src/app/App.tsx`

IDs estables. Referencia cruzada con `03_DESIGN_SYSTEM.md` para colores/tipografía.

## Matriz rápida

| ID | Sección | Anchor | Línea | Fondo |
|----|---------|--------|-------|-------|
| NAV | Navegación | fixed | 103 | transparente |
| S01 | Hero | `#inicio` | 143 | `#2e3b2b` |
| S02 | Filosofía | `#filosofía` | 183 | `#f9f8f4` |
| S03 | Espacios | `#espacios` | 424 | `#f9f8f4` |
| S04 | Galería | `#galería` | 454 | `#0f0e0c` |
| S05 | Proceso | `#proceso` | 487 | `#f4f2ec` |
| S06 | Contacto | `#contacto` | 658 | `#f9f8f4` |
| FOOTER | Footer | — | 733 | `#0f0e0c` |
| FAB | WhatsApp | — | 753 | fixed |

---

## [NAV] Línea 103

| ID | Elemento | Texto actual |
|----|----------|-------------|
| NAV.1 | Logo | `"Bodas en el Bosque"` |
| NAV.2 | Links | `Filosofía · Espacios · Galería · Proceso · Contacto` |
| NAV.3 | Hamburguesa | solo mobile < 768px |
| NAV.4 | Overlay móvil | fondo verde, links Playfair Display 2rem |

Hover links: color → `#c3caa8`

---

## [S01] HERO · Línea 143

| ID | Elemento | Texto actual |
|----|----------|-------------|
| S01.1 | Eyebrow | `"Servicio integral de bodas en entornos boscosos · México"` |
| S01.2 | H1 | `"Bodas en / el Bosque"` (2ª línea en cursiva arena) |
| S01.3 | Descripción 1 | `"Diseñamos bodas que se sienten parte del bosque. Auténticas, profundas y llenas de significado…"` |
| S01.4 | Descripción 2 | `"Te acompañamos desde la primera idea hasta el último momento…"` |
| S01.5 | CTA primario | `"Diseñemos tu boda"` → `#contacto` |
| S01.6 | CTA secundario | `"Ver nuestro trabajo"` → `#galería` |
| S01.7 | Imagen fondo | Unsplash hero, `objectPosition: "center 20%"` |
| S01.8 | Scroll indicator | línea vertical pulsante, bottom-right |

Animación entrada staggered: S01.1→S01.2→S01.3/4→S01.5/6 (heroFade, delays 0/0.12/0.24/0.38s)

---

## [S02] FILOSOFÍA · Línea 183

### Sub-sección A — Intro + Galería (línea 204)

| ID | Elemento | Texto actual |
|----|----------|-------------|
| S02.A.1 | Eyebrow | `"Filosofía"` |
| S02.A.2 | H2 | `"Quiénes somos"` |
| S02.A.3 | Párrafo 1 (cursiva) | `"Bodas en el Bosque nace de la profunda convicción de que una boda debe sentirse tan natural y eterna como el bosque mismo."` |
| S02.A.4 | Párrafo 2 | `"Somos un equipo especializado en crear bodas integrales en entornos boscosos…"` |
| S02.A.5 | Galería cycling | 4 fotos Supabase, 20s/imagen, CSS crossfade |
| S02.A.6 | Dots | 4 barras sincronizadas con galería |
| S02.A.7 | Pull quote | `"Una boda que solo podría existir para ustedes."` |

### Sub-sección B — 4 Pilares (línea ~400)

Eyebrow: `"Nuestros pilares"` | Grid 4 cols | Cada card: imagen 4:5

**Interactividad premium:**
- Hover → auto-cycling suave con fade (1000ms, intervalo 2400ms). Se detiene al salir.
- Click → card **activa/fija**: detiene cycling, muestra flechas prev/next + dots navegables en la imagen.
- Click en card activa → desactiva (vuelve a estado normal).
- Solo una card puede estar activa a la vez.
- Sombra elevada en hover y estado activo (via `.pillar-card` y `.pillar-active` CSS).
- La barra inferior se expande a 100% en estado activo (indicador visual).

| ID | Pilar | Fotos | Descripción |
|----|-------|-------|-------------|
| S02.B.1 | Calma | 6 | `"Un proceso humano y claro para que vivas la organización con tranquilidad."` |
| S02.B.2 | Equilibrio | 10 | `"La belleza natural del bosque combinada con diseño sofisticado y funcional."` |
| S02.B.3 | Intención | 6 | `"Cada decisión responde a tu historia como pareja."` |
| S02.B.4 | Presencia | 8 | `"Te acompañamos de cerca en cada etapa, especialmente el día de tu boda."` |

**State:** `activePillar: string|null`, `pillarIdx: Record<string,number>`, `pillarIntervals: useRef`

---

## [S03] ESPACIOS · Línea ~600

| ID | Elemento | Texto actual |
|----|----------|-------------|
| S03.0 | Eyebrow | `"Nuestro trabajo"` |
| S03.1 | H2 | `"El bosque se transforma / en tu boda"` (2ª línea en cursiva) |
| S03.2 | Descripción | `"Cada boda que creamos es única porque cada pareja y cada espacio lo es…"` |

Datos en array `SPACES` (línea ~115) — imágenes reales de `venues_bosque/`:

| ID | Nombre | Ubicación | Fotos | Carpeta |
|----|--------|-----------|-------|---------|
| S03.3 | Rincón del Bosque | Estado de México | 22 | `RINCON_IMGS` → `venues_bosque/rincon/` |
| S03.4 | Suspiro | Morelos | 84 | `SUSPIRO_IMGS` → `venues_bosque/suspiro/` |

**Interactividad:**
- Hover → scale(1.05) + overlay con nombre, ubicación, descripción y "Ver galería (N fotos) →". CSS via `.venue-card` / `.venue-overlay`.
- Click → abre modal lightbox con galería completa del venue.

**Modal (`.venue-modal-backdrop`):**
- Flechas prev/next en los costados.
- Botón cerrar (X) arriba-derecha.
- ESC y ArrowLeft/ArrowRight via `keydown` listener.
- Tira de thumbnails navegables abajo (ventana deslizante de 12).
- Counter `N / Total` visible.
- State: `venueModal: { key: string; idx: number } | null`

**Symlink:** `public/venues_bosque` → `venues_bosque/` (imágenes servidas como assets estáticos)

---

## [S04] GALERÍA · Línea 454

| ID | Elemento | Texto actual |
|----|----------|-------------|
| S04.0 | Eyebrow | `"Detalles que enamoran"` |
| S04.1 | H2 | `"Ambientes y detalles / que cuentan tu historia"` (2ª línea cursiva arena) |
| S04.2 | Link | `"Ver más bodas →"` → `#contacto` |

Datos en array `GALLERY` (línea 22) — proporción 3:4:

| ID | Label | Key imagen |
|----|-------|-----------|
| S04.3 | Mesa bajo los árboles | `weddingTable` |
| S04.4 | Ceremonia en el claro | `ceremony` |
| S04.5 | El primer camino juntos | `newlyweds` |
| S04.6 | Detalles florales | `weddingFlowers` |

---

## [S05] PROCESO · Línea 487

| ID | Elemento | Texto actual |
|----|----------|-------------|
| S05.0 | Eyebrow | `"Cómo trabajamos"` |
| S05.1 | H2 | `"Acompañamiento único / y personalizado"` |
| S05.2 | Cita lateral | `"Nos esforzamos para que cada experiencia sea única en su tipo…"` (borde terracota) |

Cards (grid 4 cols, línea 508):

| ID | Nº | Título | Descripción |
|----|-----|--------|-------------|
| S05.3 | 01 | Acompañamiento Total | `"Desde la primera conversación hasta el cierre del evento…"` |
| S05.4 | 02 | Diseño Único | `"Ninguna boda se parece a otra. Todo se crea a la medida…"` |
| S05.5 | 03 | Tranquilidad Absoluta | `"Nos encargamos de la coordinación completa…"` |
| S05.6 | 04 | Atención al Detalle | `"Cada elemento —floral, iluminación, mobiliario, ambientación…"` |

| S05.7 | CTA Strip (línea 641) | frase: `"Una boda que solo podría existir para ustedes."` + link: `"Comencemos a diseñar la tuya →"` |

---

## [S06] CONTACTO · Línea 658

| ID | Elemento | Texto actual |
|----|----------|-------------|
| S06.1 | Eyebrow | `"Contacto"` |
| S06.2 | H2 | `"Comencemos a diseñar / tu boda en el bosque"` |
| S06.3 | Intro | `"Cuéntanos sobre tu fecha aproximada, tu visión…"` |
| S06.4 | WhatsApp | `"+52 55 0000 0000"` / `https://wa.me/5215500000000` — **también en FAB línea 754** |
| S06.5 | Email | `"hola@bodasenelbosque.mx"` |
| S06.6 | Ubicaciones | `"Rincón del Bosque · Boschetto · Valle de Bravo y más"` |

Formulario (línea 693):

| ID | Campo | Requerido | Placeholder |
|----|-------|-----------|-------------|
| S06.F1 | Nombre completo | ✅ | `"Elena & Rodrigo"` |
| S06.F2 | Correo electrónico | ✅ | `"hola@tucorreo.com"` |
| S06.F3 | Fecha boda | — | `"Otoño 2025 / Noviembre 2025"` |
| S06.F4 | Textarea mensaje | — | `"¿Dónde se conocieron?…"` |
| S06.F5 | Submit | — | `"Enviar mensaje"` (hover: verde→terracota) |

Post-envío: panel verde, `"Gracias por escribirnos"` + `"El bosque ya sabe su nombre."`

---

## [FOOTER] · Línea 733

| ID | Elemento | Texto actual |
|----|----------|-------------|
| F.1 | Nombre | `"Bodas en el Bosque"` |
| F.2 | Tagline | `"Servicio integral de bodas en entornos naturales · México"` |
| F.3 | Sociales | Instagram · Pinterest · WhatsApp (links `#` — pendiente actualizar) |
| F.4 | Copyright | `"© 2025 Bodas en el Bosque. Todos los derechos reservados."` |

## [FAB] WhatsApp · Línea 753

Fixed bottom-right. Link: `https://wa.me/5215500000000?text=Hola…` — actualizar junto con S06.4.
