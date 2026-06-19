# CLAUDE.md · Bodas en el Bosque

Contexto operativo para Claude Code. Leer antes de cualquier modificación.

> 📌 **Progreso reciente:** ver [`SESSION_PROGRESS.md`](./SESSION_PROGRESS.md) — resume
> el rediseño, la optimización de imágenes y el fix de despliegue en Vercel
> (commit `1bfd870`). El sitio ya está en GitHub (`sebastiangadugem/bodasbosque`)
> con deploy automático en Vercel.

---

## Proyecto

Landing page SPA premium para servicio de bodas en bosques, México.  
**Un solo archivo de contenido:** `src/app/App.tsx` (766 líneas).  
No hay CMS, router, ni archivos de datos separados.

## Stack

| | |
|---|---|
| React 18.3.1 + Vite 6.3.5 | SPA sin router |
| Tailwind CSS 4 + inline CSSProperties | Todo el styling |
| CSS keyframes inline + JS hover handlers | Todas las animaciones |
| Google Fonts: Playfair Display + DM Sans | Tipografía — NO cambiar |
| Supabase Storage + Unsplash | Imágenes |
| shadcn/ui (Radix UI) — `src/app/components/ui/` | Disponible, no usada en landing |
| pnpm | `pnpm dev` → http://localhost:5173 |

## Convenciones importantes

1. **Todo el contenido editable** está en arrays/objetos al inicio de `App.tsx`: `IMAGES` (línea 3), `SPACES` (línea 14), `GALLERY` (línea 22).
2. **Estilos** se aplican inline con objetos CSSProperties. No hay clases de Tailwind en el JSX de la landing — solo `.two-col-grid`, `.four-col-grid`, `.navlinks`, `.hamburger` para responsive.
3. **Interactividad** se implementa con `onMouseEnter`/`onMouseLeave`/`onMouseMove` en JSX. No hay state separado de animaciones (solo `menuOpen`, `form`, `sent`).
4. **Imágenes** tienen aspect ratios fijos — respetar siempre: hero=fullscreen, filosofía-galería=3:4, pilares=4:5, espacios=4:3, galería=3:4.
5. **Anclas de navegación** (`id="filosofía"`, `id="espacios"`, etc.) son referenciadas por el NAV — no renombrar.

## Restricciones globales

| ❌ NUNCA | ✅ SIEMPRE |
|----------|----------|
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
4. Localizar línea exacta → tabla "Referencia rápida" en 05_CHANGE_PROTOCOL.md
5. Aplicar cambio mínimo
6. Validar: desktop (1280px) + mobile (375px) + animaciones + consola
```

## Documentos por tipo de modificación

| Tarea | Documentos a consultar |
|-------|----------------------|
| Cambiar texto | `02_SECTION_MAP.md` |
| Cambiar imagen | `02_SECTION_MAP.md` + `03_DESIGN_SYSTEM.md` (proporciones) |
| Añadir item a un array | `02_SECTION_MAP.md` + `05_CHANGE_PROTOCOL.md` |
| Añadir nuevo componente UI | `04_COMPONENTS.md` |
| Cambio de layout o colores | `03_DESIGN_SYSTEM.md` + todos los docs |
| Duda sobre qué puede cambiar | `03_DESIGN_SYSTEM.md` (tabla ✅/❌ al final) |

## Contexto de negocio

- Empresa: Bodas en el Bosque
- Servicio: bodas integrales en entornos boscosos, México
- Venues: Rincón del Bosque (Edo. Méx.), Boschetto (Morelos), Arden (Michoacán), Valle de Bravo
- Contacto actual en código: +52 55 0000 0000 / hola@bodasenelbosque.mx (placeholders — pendiente actualizar)
- Redes sociales en footer: placeholders `href="#"` — pendiente actualizar
