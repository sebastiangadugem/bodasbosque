# Auditoría de Documentación · 2026-06-16

---

## Tamaños antes / después

| Documento | Antes (líneas) | Después (líneas) | Reducción |
|-----------|---------------|-----------------|-----------|
| 01_QUICK_START.md | 71 | 47 | −34% |
| 02_SECTION_MAP.md | 194 | 177 | −9% |
| 03_DESIGN_SYSTEM.md | 197 | 130 | −34% |
| 04_COMPONENTS.md | 82 | 44 | −46% |
| 05_CHANGE_PROTOCOL.md | 316 | 114 | −64% |
| **Total docs originales** | **860** | **512** | **−40%** |
| CLAUDE.md (nuevo) | — | 73 | — |
| INDEX.md (nuevo) | — | 64 | — |
| AGENT_RULES.md (nuevo) | — | 81 | — |
| DOCUMENTATION_AUDIT.md (nuevo) | — | ~70 | — |
| **Total con nuevos docs** | **860** | **800** | **−7%** (bruto) |

> La reducción neta en los 5 docs originales es **40%** exacto. Los 4 docs nuevos añaden infraestructura operativa que no existía antes.

---

## Redundancias eliminadas

| Información duplicada | Estaba en | Resuelto |
|----------------------|-----------|---------|
| Stack técnico completo | 01_QUICK_START + implícito en otros | Consolidado en `CLAUDE.md`; 01 queda compacto |
| "Todo el código en App.tsx" | Repetido en cada doc (4 veces) | Solo en `CLAUDE.md` + nota en 01 |
| Colores de fondo por sección | `02_SECTION_MAP` (matriz) + `03_DESIGN_SYSTEM` (tabla separada) | Unificado en matriz de 02 |
| "Puede/no puede cambiar" | `03_DESIGN_SYSTEM` (texto narrativo) + restricciones en `05_CHANGE_PROTOCOL` | Tabla ✅/❌ única en 03 |
| Texto narrativo en definiciones de tipos A/B/C/D | 05 tenía bloques de 10+ líneas por tipo | Comprimido a tabla + párrafo breve |
| Plantillas de ejemplo largas (3-4 bloques de código) | 05 | Reducido a 4 ejemplos esenciales |
| Checklist "antes de solicitar" | 05 (pre y post por separado) | Unificado en checklist post-cambio |
| Lista de 19 shadcn/ui componentes con descripción | 04 | Reducido a 7 más útiles |
| Función/Ubicación descriptiva de cada sección | 02 (texto narrativo) | Eliminado — la función es obvia por el nombre |

---

## Información nueva añadida

| Información | Documento | Valor |
|-------------|-----------|-------|
| Regla R9 WhatsApp en dos lugares | `AGENT_RULES.md` | Previene bug frecuente de actualización parcial |
| Regla R7 galería acoplada | `AGENT_RULES.md` | Documenta dependencia oculta dots/imágenes |
| Anti-patrones prohibidos | `AGENT_RULES.md` | Previene refactoring no solicitado |
| Señales de alerta | `AGENT_RULES.md` | Reduce riesgo de cambios destructivos |
| Contexto de negocio | `CLAUDE.md` | Útil para generación de copy coherente |
| Datos de contacto como placeholders | `CLAUDE.md` | Marca pendientes de producción |
| Navegación por sección en INDEX | `INDEX.md` | Acceso O(1) a cualquier sección |

---

## Riesgos detectados en el código

| Riesgo | Severidad | Ubicación | Recomendación |
|--------|-----------|-----------|---------------|
| Número de WhatsApp es placeholder (+52 55 0000 0000) | 🔴 Alta | App.tsx L671 + L754 | Actualizar antes de ir a producción |
| Links sociales footer apuntan a `href="#"` | 🟡 Media | App.tsx L741 | Añadir URLs reales |
| Email de contacto puede ser placeholder | 🟡 Media | App.tsx L672 | Verificar con cliente |
| `meta robots: noindex, nofollow` en index.html | 🟠 Media | index.html | Cambiar a `index, follow` en producción |
| Formulario de contacto no tiene endpoint real | 🔴 Alta | App.tsx L68 | `handleSubmit` solo setea `sent=true` — no envía datos |
| Imágenes Unsplash con parámetro `w=1600` sin lazy loading | 🟡 Media | App.tsx L3-12 | Añadir `loading="lazy"` en imágenes below-fold |

---

## Información faltante para futuras iteraciones

| Faltante | Impacto | Acción sugerida |
|----------|---------|-----------------|
| URL real del sitio en producción | Medio | Documentar cuando se defina |
| Endpoint del formulario de contacto | Alto | Decidir: EmailJS, Formspree, backend propio, etc. |
| URLs reales de redes sociales | Medio | Añadir al SECTION_MAP cuando el cliente las provea |
| Política de imágenes a largo plazo | Medio | Unsplash es temporal — definir si las fotos reales vienen de Supabase |
| Estrategia SEO | Bajo | Title, meta description, OG tags están básicos en index.html |
| Proceso de deploy | Bajo | Documentar plataforma (Vercel, Netlify, etc.) cuando se defina |
