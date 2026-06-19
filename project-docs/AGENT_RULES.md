# Reglas para Agentes · Bodas en el Bosque

Reglas operativas no negociables. Aplican a cualquier agente que modifique este proyecto.

---

## Reglas de modificación

### R1 — Archivo mínimo
Modificar el menor número posible de archivos. En el 95% de los casos, solo `src/app/App.tsx`.

### R2 — Cambio mínimo
Aplicar solo lo solicitado. No refactorizar, limpiar, ni "mejorar" código adyacente al cambio pedido.

### R3 — Design system intocable
No modificar `src/styles/theme.css`, `src/styles/fonts.css`, ni los valores de color/tipografía en `App.tsx` sin solicitud **explícita** de Tipo D.

### R4 — Sin componentes duplicados
Antes de crear cualquier componente nuevo: verificar `src/app/components/ui/` (58 componentes disponibles). Si existe uno equivalente, usarlo.

### R5 — Responsive siempre
Cualquier cambio estructural debe funcionar en los 3 breakpoints: mobile (375px), tablet (768px), desktop (1280px+).

### R6 — Animaciones intactas
No alterar keyframes (`heroFade`, `scrollPulse`, `galleryFade`, `dotPulse`) ni sus duraciones. No eliminar clases `.hero-fade-*`.

### R7 — Galería auto-cycling acoplada
`galleryFade` y `dotPulse` están sincronizados con 4 imágenes. Si el número cambia, actualizar **ambos** arrays de delays (imágenes línea ~221 y dots línea ~249).

### R8 — Anclas de navegación fijas
Los `id` de sección (`inicio`, `filosofía`, `espacios`, `galería`, `proceso`, `contacto`) son referenciados por el NAV. No renombrar.

### R9 — WhatsApp en dos lugares
El número/URL de WhatsApp aparece en S06.4 (línea 671) Y en el FAB (línea 754). Actualizar siempre ambos.

### R10 — Reportar cambios
Al finalizar cualquier modificación, listar:
- Archivos modificados
- Líneas cambiadas
- Secciones afectadas
- Validación realizada (desktop/mobile/animaciones)

---

## Validación obligatoria post-cambio

```
[ ] Desktop 1280px+: sección afectada OK
[ ] Mobile 375px: sección afectada OK
[ ] Animaciones de la sección: funcionando
[ ] Elementos adyacentes: no desplazados
[ ] Consola del navegador: sin errores
[ ] Links y CTAs afectados: funcionales
```

Para Tipo C o D: validar TODAS las secciones.

---

## Señales de alerta — pausar y confirmar antes de continuar

- El cambio afecta más de 1 sección
- Se necesita modificar los keyframes o su duración
- El cambio requiere instalar una dependencia nueva
- La solicitud implica cambiar colores o tipografía globalmente
- Se necesita añadir una nueva sección completa
- El número de imágenes en la galería auto-cycling (S02.A) cambia
- Se modifican los anchor IDs de sección

---

## Anti-patrones prohibidos

| ❌ No hacer | ✅ En su lugar |
|-------------|---------------|
| Reescribir JSX para "mejorar legibilidad" | Cambiar solo el string solicitado |
| Convertir estilos inline a clases Tailwind | Mantener el patrón inline existente |
| Crear un archivo `.json` de datos | Editar los arrays en `App.tsx` |
| Añadir `useState` o efectos nuevos sin pedirlo | Usar los 3 estados existentes |
| Instalar `framer-motion` u otras libs de animación | Usar CSS keyframes inline como el proyecto |
| Crear componentes wrapper para "reusar" | Editar inline en el array correspondiente |
