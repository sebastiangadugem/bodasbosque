# Protocolo de Cambios · `src/app/App.tsx`

---

## Formato de solicitud

```
Sección:      [ID — ej: S01.2]
Tipo:         [A / B / C / D]
De:           [valor actual]
A:            [valor nuevo]
Restricción:  [qué no tocar]
```

---

## Tipos de cambio

| Tipo | Qué es | Riesgo | Validación |
|------|--------|--------|------------|
| **A** | Solo textos | Bajo | Desktop + mobile |
| **B** | Textos + imágenes/datos visuales | Medio | Desktop + mobile + proporciones |
| **C** | Estructura interna de una sección | Alto | Responsive + interactividad |
| **D** | Layout global, tipografía, colores, nueva sección | Muy alto | Todas las secciones + animaciones |

### Tipo A — Copy
Textos permitidos: headings, párrafos, eyebrows, CTAs, placeholders, labels form, nombres/descripciones de espacios/pilares/proceso, datos contacto, copyright.  
**No:** alterar HTML, mover elementos, cambiar tamaños.

### Tipo B — Visual
Todo del Tipo A +: URLs de imágenes (misma proporción), nº fotos en pilares, íconos SVG, datos completos de un espacio.  
**No:** cambiar estructura de arrays, estilos de contenedores, JSX.  
Ver proporciones en `03_DESIGN_SYSTEM.md`.

### Tipo C — Componente interno
Añadir/quitar items en arrays (SPACES, GALLERY, pilares, proceso cards), nuevo link de contacto, links sociales footer.  
**No:** romper `galleryFade`/`dotPulse` (depende de 4 imágenes exactas — ver nota abajo), cambiar anchor IDs, alterar estado React.

⚠️ **Galería auto-cycling S02.A:** al cambiar nº de imágenes, actualizar también dots (línea 249). Delays: `["0s", "-(N-1)*5s", ..., "-5s"]`

### Tipo D — Layout global
Requiere auditoría completa: todas las secciones, responsive (375/768/1280px), animaciones.

---

## Referencia rápida — líneas en `App.tsx`

| Qué | Línea |
|-----|-------|
| `IMAGES` (URLs fotos stock) | 3 |
| `SPACES` (venues) | 14 |
| `GALLERY` | 22 |
| CSS keyframes + responsive | 29 |
| NAV | 103 |
| S01 Hero | 143 |
| S02 Filosofía | 183 |
| Galería auto-cycling | 221 |
| Dots indicadores | 247 |
| Pilares (4 cards) | 283 |
| S03 Espacios | 424 |
| S04 Galería | 454 |
| S05 Proceso | 487 |
| CTA Strip proceso | 641 |
| S06 Contacto | 658 |
| Info contacto (tel/email) | 670 |
| Formulario | 693 |
| Footer | 733 |
| FAB WhatsApp | 753 |

---

## Ejemplos de solicitud

**Tipo A — texto:**
```
Sección:  S06.4
De:       "+52 55 0000 0000" / "https://wa.me/5215500000000"
A:        "+52 55 1234 5678" / "https://wa.me/5215512345678"
Nota:     Actualizar también FAB (línea 753)
```

**Tipo B — imagen hero:**
```
Sección:  S01.7
De:       URL Unsplash actual (línea 4)
A:        [nueva URL]
Nota:     objectPosition "center 20%" — sujeto debe estar en tercio inferior
```

**Tipo B — fotos pilar:**
```
Sección:  S02.B.1 Calma (~línea 288)
Cambio:   Añadir URLs al array images: [...]
Proporción: 4/5 vertical obligatorio
```

**Tipo C — nuevo espacio:**
```
Sección:  S03 — array SPACES (línea 14)
Añadir:   { name: "X", desc: "...", img: IMAGES.nuevaClave }
También:  Añadir clave a IMAGES (línea 3)
Nota:     Con 5 items el grid 2×2 cambia visualmente — verificar
```

---

## Checklist post-cambio

- [ ] Sección afectada: OK desktop (1280px+)
- [ ] Sección afectada: OK mobile (375px)
- [ ] Animaciones de la sección: funcionando
- [ ] Sin desplazamiento de elementos adyacentes
- [ ] Sin errores en consola
- [ ] Links/CTAs afectados: funcionales
