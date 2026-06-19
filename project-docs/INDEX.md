# Índice Operativo · Bodas en el Bosque

Inicio rápido: lee `CLAUDE.md` primero. Luego sigue esta guía según el tipo de cambio.

---

## Por tipo de tarea

### CAMBIO DE TEXTO (Tipo A)
→ `02_SECTION_MAP.md` — localiza el ID y el texto actual  
→ `src/app/App.tsx` en la línea indicada — reemplaza solo el string

### CAMBIO DE IMAGEN (Tipo B)
→ `02_SECTION_MAP.md` — localiza el ID y la key/URL actual  
→ `03_DESIGN_SYSTEM.md` — verifica proporción correcta (tabla Imágenes)  
→ `src/app/App.tsx` — reemplaza URL (en `IMAGES` línea 3, o inline)

### CAMBIO DE DATOS (Tipo B/C) — espacios, galería, pilares
→ `02_SECTION_MAP.md` — ve la tabla de datos de la sección  
→ `05_CHANGE_PROTOCOL.md` — sigue el ejemplo del tipo correspondiente  
→ `src/app/App.tsx` — modifica el array (`SPACES` L14, `GALLERY` L22, pilares L283)

### NUEVO COMPONENTE UI
→ `04_COMPONENTS.md` — revisa si ya existe en shadcn/ui  
→ `src/app/components/ui/` — importa el componente  
→ No instalar dependencias adicionales

### CAMBIO VISUAL GLOBAL (Tipo D) — colores, tipografía, layout
→ `03_DESIGN_SYSTEM.md` — revisa tabla ✅/❌ (confirmar que es realmente necesario)  
→ `CLAUDE.md` — restricciones globales  
→ Todos los documentos — validar impacto completo

---

## Por sección

| Sección | ID | Línea App.tsx | Doc principal |
|---------|----|---------------|---------------|
| Navegación | NAV | 103 | `02_SECTION_MAP.md` |
| Hero | S01 | 143 | `02_SECTION_MAP.md` |
| Filosofía intro | S02.A | 204 | `02_SECTION_MAP.md` |
| Filosofía pilares | S02.B | 283 | `02_SECTION_MAP.md` |
| Espacios | S03 | 424 | `02_SECTION_MAP.md` |
| Galería | S04 | 454 | `02_SECTION_MAP.md` |
| Proceso | S05 | 487 | `02_SECTION_MAP.md` |
| Contacto / Form | S06 | 658 | `02_SECTION_MAP.md` |
| Footer | FOOTER | 733 | `02_SECTION_MAP.md` |
| WhatsApp FAB | FAB | 753 | `02_SECTION_MAP.md` |

---

## Documentos del proyecto

| Archivo | Propósito |
|---------|-----------|
| `CLAUDE.md` | Contexto global, restricciones, flujo |
| `INDEX.md` | Este archivo — navegación rápida |
| `AGENT_RULES.md` | Reglas operativas para agentes |
| `01_QUICK_START.md` | Stack, estructura, comandos |
| `02_SECTION_MAP.md` | Mapa detallado de secciones, textos actuales, líneas |
| `03_DESIGN_SYSTEM.md` | Colores, tipografía, spacing, animaciones, restricciones |
| `04_COMPONENTS.md` | Componentes disponibles y patrones inline |
| `05_CHANGE_PROTOCOL.md` | Tipos A/B/C/D, líneas clave, checklist |
| `DOCUMENTATION_AUDIT.md` | Auditoría y riesgos |
