# CLAUDE.md · Bodas en el Bosque

Contexto operativo para Claude Code. Leer antes de cualquier modificación.

> 📌 **Progreso reciente:** ver [`SESSION_PROGRESS.md`](./SESSION_PROGRESS.md) — cubre
> los cambios de la sesión 2026-06-25: carrusel editorial, sistema de audio, SEO,
> seguridad del webhook y despliegue a producción (commits `640b08b`, `47d7cd8`).

---

## Proyecto

Landing page SPA premium para servicio de bodas en bosques, México.  
**Un solo archivo de contenido:** `src/app/App.tsx` (~1500 líneas).  
No hay CMS, router, ni archivos de datos separados.

## Stack

| | |
|---|---|
| React 18.3.1 + Vite 6.3.5 | SPA sin router |
| Tailwind CSS 4 + inline CSSProperties | Todo el styling |
| CSS keyframes inline + JS hover handlers | Animaciones |
| Google Fonts: Playfair Display + DM Sans + Cormorant Garamond | Tipografía — NO cambiar |
| Web Audio API (sintético) | Sistema de audio ASMR — sin dependencias |
| Supabase Storage | Imágenes carrusel + audio ambient |
| Vercel (Serverless Functions en `/api/`) | Deploy + proxy webhook |
| shadcn/ui (Radix UI) — `src/app/components/ui/` | Disponible, no usada en landing |
| pnpm | `pnpm dev` → http://localhost:5173 |

## Variables de entorno (Vercel)

Configuradas en Vercel → Settings → Environment Variables (cifradas). **Nunca en el código fuente.**

| Variable | Requerida | Descripción |
|----------|-----------|-------------|
| `WEBHOOK_URL` | ✅ Sí | Endpoint n8n de producción. `api/contact.ts` devuelve 500 si no está definida. |
| `WEBHOOK_TOKEN` | No | Bearer token para autenticación en n8n. Si está definida se envía como `Authorization: Bearer <token>`. |

## Assets en producción

| Archivo | Descripción |
|---------|-------------|
| `public/robots.txt` | Permite indexación, apunta a sitemap |
| `public/sitemap.xml` | URL raíz del sitio |
| `public/hero-og.jpg` | Imagen Open Graph 1200×630 |
| Audio ambient | Servido desde Supabase (no en `public/`) — ver `SESSION_PROGRESS.md` para URL |

## Datos de contacto reales

| Dato | Valor |
|------|-------|
| Teléfono | `+52 777 135 8375` / `tel:+5217771358375` / `wa.me/5217771358375` |
| Email | `Bodasenelbosque@gmail.com` |
| Instagram | `@bodasbosquepremium`, `@ardenbodasdelbosque` |
| Venues | Rincón del Bosque (Edo. Méx.), Suspiro (Morelos) |

## Convenciones importantes

1. **Todo el contenido editable** está en arrays/objetos al inicio de `App.tsx`: `IMAGES`, `SPACES`, `GALLERY`, `TESTIMONIO_FILES`.
2. **Estilos** se aplican inline con objetos CSSProperties. No hay clases de Tailwind en el JSX de la landing — solo `.two-col-grid`, `.four-col-grid`, `.navlinks`, `.hamburger`, `.testi-stage`, `.testi-frame`, `.sound-bars`, `.pillar-card`, `.venue-card` para responsive e interactividad.
3. **Audio** se inicializa solo en el primer gesto del usuario. `ensureCtx()` crea el `AudioContext`. No modificar valores de gain ni frecuencias sin prueba auditiva.
4. **Imágenes** tienen aspect ratios fijos — respetar siempre: hero=fullscreen, filosofía-galería=3:4, pilares=4:5, espacios=4:3, galería=3:4, carrusel testimonios=libre.
5. **Anclas de navegación** (`id="filosofía"`, `id="espacios"`, etc.) son referenciadas por el NAV — no renombrar.

## Restricciones globales

| ❌ NUNCA | ✅ SIEMPRE |
|----------|----------|
| Poner `WEBHOOK_URL` en el código fuente | Usar `process.env.WEBHOOK_URL` en `api/contact.ts` |
| Modificar `src/styles/theme.css` sin solicitud explícita | Preservar proporciones de imagen |
| Cambiar familias tipográficas | Mantener `onMouseEnter`/`Leave` existentes |
| Alterar keyframes de animación | Verificar desktop + mobile tras cada cambio |
| Romper el sistema `galleryFade`/`dotPulse` | Respetar la paleta de 5 colores |
| Renombrar anchor IDs de secciones | Modificar solo lo solicitado |
| Instalar dependencias nuevas para casos de uso UI estándar | Usar shadcn/ui si se necesita nuevo componente |
| Crear archivos nuevos para contenido (va en App.tsx) | Reportar cada archivo modificado |

## Flujo para cambios

```
1. Identificar sección → 02_SECTION_MAP.md
2. Verificar restricciones → 03_DESIGN_SYSTEM.md (tabla ✅/❌)
3. Determinar tipo (A/B/C/D) → 05_CHANGE_PROTOCOL.md
4. Aplicar cambio mínimo
5. Validar: desktop (1280px) + mobile (375px) + animaciones + consola
```

## Documentos por tipo de modificación

| Tarea | Documentos a consultar |
|-------|----------------------|
| Cambiar texto | `02_SECTION_MAP.md` |
| Cambiar imagen | `02_SECTION_MAP.md` + `03_DESIGN_SYSTEM.md` (proporciones) |
| Añadir item a un array | `02_SECTION_MAP.md` + `05_CHANGE_PROTOCOL.md` |
| Añadir nuevo componente UI | `04_COMPONENTS.md` |
| Cambio de layout o colores | `03_DESIGN_SYSTEM.md` + todos los docs |
| Cambio de audio | `03_DESIGN_SYSTEM.md` sección "Sistema de audio" |
| Historial de cambios | `CHANGELOG.md` / `SESSION_PROGRESS.md` |

## Contexto de negocio

- Empresa: Bodas en el Bosque
- Servicio: bodas integrales en entornos boscosos, México
- Venues activos: Rincón del Bosque (Edo. Méx.), Suspiro (Morelos)
- Instagram: `@bodasbosquepremium`, `@ardenbodasdelbosque`
- Contacto: `+52 777 135 8375` / `Bodasenelbosque@gmail.com`
