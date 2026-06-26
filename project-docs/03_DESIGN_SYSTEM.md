# Design System · Bodas en el Bosque

Todo lo marcado **INMUTABLE** no debe modificarse sin solicitud explícita Tipo D.

---

## Colores · `src/styles/theme.css` (INMUTABLE)

| Token | Hex | Uso |
|-------|-----|-----|
| `--forest` | `#2e3b2b` | Fondos oscuros, botón primario, nav overlay |
| `--sand` | `#c3caa8` | Texto sobre fondos oscuros, CTAs secundarios |
| `--earth` | `#929186` | Eyebrows, texto muted, labels formulario |
| `--terracotta` | `#7c4a36` | Iconos activos, hover submit, líneas decorativas |
| `--cream` | `#f9f8f4` | Fondo principal, texto sobre fondos oscuros |
| Negro | `#0f0e0c` | Fondo Galería, Footer |
| Hueso | `#f4f2ec` | Fondo Proceso, cards |

### Texto por contexto

| Contexto | Hex |
|----------|-----|
| Sobre crema (base) | `#0f0e0c` |
| Cuerpo oscuro | `#3a3a36` |
| Muted / eyebrows | `#929186` |
| Sobre fondos oscuros | `#c3caa8` / `rgba(195,202,168,0.82)` |
| Headings sobre crema | `#2e3b2b` |
| Headings sobre negro | `#f9f8f4` |

---

## Tipografía · `src/styles/fonts.css` (INMUTABLE)

**Playfair Display** (serif) → H1, H2, H3, logo, pull quotes  
**DM Sans** (sans-serif) → párrafos, labels, botones, links, eyebrows  
**Cormorant Garamond** (serif display) → subtítulos alternativos, carrusel editorial

| Elemento | Tamaño | Weight | Line-height |
|----------|--------|--------|-------------|
| H1 Hero | `clamp(3rem, 8vw, 6.5rem)` | 400 | 1.02 |
| H2 Secciones | `clamp(2rem, 3.5vw, 3.2rem)` | 400 | 1.15 |
| H2 Contacto | `clamp(2rem, 3.5vw, 3.5rem)` | 400 | 1.15 |
| H3 Cards | `1.15rem` | 400 | — |
| H3 Espacios | `1.5rem` | 400 | — |
| Eyebrow | `0.72rem` | 400 | — · `letter-spacing: 0.22em` · uppercase |
| Nav links | `0.78rem` | 400 | — · `letter-spacing: 0.14em` · uppercase |
| Párrafo principal | `1.1rem` | 300 | 1.65 |
| Párrafo cuerpo | `1rem–1.05rem` | 300 | 1.82–1.88 |
| Descripción cards | `0.84rem` | 300 | 1.78–1.8 |
| Botones / CTAs | `0.75–0.78rem` | 400 | — · `letter-spacing: 0.16–0.18em` · uppercase |
| Pull quote | `1rem–1.05rem` | 400 | 1.65 · italic |

---

## Espaciado & Grid · `src/app/App.tsx:41` (INMUTABLE)

| Concepto | Valor |
|----------|-------|
| Padding horizontal desktop | `3rem` |
| Padding horizontal mobile | `1.5rem` |
| Padding vertical secciones | `8rem` |
| Max-width contenedor | `1200px` |
| Gap 2-col (filosofía/contacto) | `8rem` |
| Gap 2-col (proceso header) | `6rem` |
| Gap 4-col pilares/galería | `1px` |
| Gap 4-col proceso cards | `1.5rem` |

### Breakpoints y grids CSS

| Clase | Desktop | ≤768px | ≤480px |
|-------|---------|--------|--------|
| `.two-col-grid` | `1fr 1fr` | `1fr` | `1fr` |
| `.four-col-grid` | `repeat(4,1fr)` | `1fr 1fr` | `1fr` |
| `.navlinks` | visible | oculto | oculto |
| `.hamburger` | oculto | visible | visible |

---

## Animaciones · `src/app/App.tsx:29` (INMUTABLE)

### Keyframes

| Nombre | Efecto | Duración | Uso |
|--------|--------|----------|-----|
| `heroFade` | fade-in + translateY(16px→0) | 0.8–0.9s | Entrada hero |
| `scrollPulse` | opacity 0.35→1→0.35 | 2.2s ∞ | Indicador scroll |
| `galleryFade` | crossfade imágenes | 20s ∞ | Galería S02.A |
| `dotPulse` | scaleX + opacity | 20s ∞ | Dots S02.A |
| `soundBar` | scaleY 0.3→1→0.3 con delays escalonados | 1.1–1.3s ∞ | Ecualizador toggle de sonido |

### Transiciones hover

| Elemento | Efecto | Duración |
|----------|--------|----------|
| Nav links | color → `#c3caa8` | 0.3s |
| CTAs Hero | inversión color/fondo | 0.35s |
| Venues Espacios hover | scale(1.05) + overlay con nombre/ubicación (`.venue-overlay`) | 0.7s / 0.45s |
| Imágenes Galería | scale(1.06) | 0.6s |
| Cards Proceso | translateY(-6px) + sombra + borde + radial cursor | 0.35s cubic |
| Línea inferior cards | width 28px→100% terracota (activa) | 0.5s ease |
| Cards Pilares — fade galería | opacity via state React | 1000ms ease |
| Cards Pilares — hover | auto-cycling 2400ms, `.pillar-card:hover` sombra | — |
| Cards Pilares — activo | sombra elevada, flechas + dots, `.pillar-active` | — |
| Botón submit | `#2e3b2b` → `#7c4a36` | 0.35s |
| FAB WhatsApp | scale(1.1) | 0.3s |
| Carrusel `.testi-frame` | opacity crossfade | 0.6s ease |

---

## Sistema de audio · `src/app/App.tsx`

Todo el audio se genera en el navegador con la Web Audio API. No hay archivos `.mp3` de SFX en el repo.

### Arquitectura

| Función | Descripción |
|---------|-------------|
| `ensureCtx()` | Crea `AudioContext` la primera vez que el usuario interactúa. |
| `tick()` | Sintetiza un clic ASMR: dos transitorios de ruido blanco (gain 0.13 + 0.06), highpass 1400 Hz, bandpass 3400 Hz. |
| `initEarth()` | Inicia la textura de hojas: ruido blanco granular, highpass 1800 Hz, bandpass 4200 Hz. El gain se escala con la velocidad del cursor (multiplier 0.02, máx **0.045**). |
| `toggleSound()` | Alterna on/off. En off: fade a 0 + `.sound-bars` se pausa. |
| `fadeAudio()` | Rampa de volumen del ambient (target 0.16, 800 ms). |

### Valores de referencia

| Parámetro | Valor | Notas |
|-----------|-------|-------|
| Ambient volume | 0.16 | Objetivo de `fadeAudio()` |
| Leaves gain máx | 0.045 | Reducido desde 0.12 para equilibrio con ambient |
| Leaves speed multiplier | 0.02 | Escala la velocidad del cursor a gain |
| Click transient 1 | 0.13 | Primer pico del clic |
| Click transient 2 | 0.06 | Segundo pico (eco) |
| Click highpass | 1400 Hz | Filtra frecuencias bajas del clic |
| Click bandpass | 3400 Hz | Timbre del clic |
| Leaves highpass | 1800 Hz | Filtra graves de la textura |
| Leaves bandpass | 4200 Hz | Textura "crujido" ASMR |

### Audio ambient

URL del archivo en Supabase (CC0, BigSoundBank):
```
https://vlmoncatqrdlrneznpma.supabase.co/storage/v1/object/public/photos/AMBForst_Forest%20(ID%200100)_BigSoundBank.com.mp3
```
- Elemento `<audio>` en el JSX apuntado a esta URL.
- **Sin** atributo `crossOrigin` (Supabase no envía los headers CORS necesarios para Web Audio API). El ambient no pasa por el grafo de Web Audio — se controla con `.volume` directamente.
- Auto-play: solo tras primer `pointerdown` / `keydown`.

---

## Imágenes

| Elemento | Aspect ratio | Origen |
|----------|-------------|--------|
| Hero fondo | `100dvh` | Unsplash |
| Galería auto-cycling S02.A | `3/4` | Supabase |
| Cards Pilares S02.B | `4/5` | Supabase |
| Cards Espacios S03 | `4/3` | `venues_bosque/` local (symlink en `public/`) |
| Cards Galería S04 | `3/4` | Unsplash |

Objeto `IMAGES` (línea 3): claves → `hero, coupleForest, forestTrees, weddingTable, weddingFlowers, newlyweds, forestLight, ceremony`

---

## ✅ Puede cambiar / ❌ No puede cambiar

| ✅ Permitido | ❌ Inmutable |
|-------------|-------------|
| Textos (headings, párrafos, CTAs, placeholders) | Familias tipográficas |
| URLs de imágenes (misma proporción) | Tamaños y pesos de texto |
| Nº de fotos en pilares | Paleta de colores |
| Datos de espacios (nombre, desc, img) | Padding/spacing de secciones |
| Datos de galería (img, label) | Breakpoints |
| Íconos SVG de pilares/proceso | Keyframes y duraciones |
| Info de contacto (tel, email, sociales) | Estructura JSX/HTML |
| Nº de items en arrays (SPACES, GALLERY) | Aspect ratios de contenedores |
