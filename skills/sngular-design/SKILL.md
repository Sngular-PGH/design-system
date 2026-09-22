---
name: sngular-design
description: Diseña presentaciones, sitios web, landings, pantallas de app y piezas visuales con la marca Sngular, siguiendo el Sngular Design System (colores Navy/Blue, tipografía Outfit, cursor, S|, texto seleccionado, títulos especiales) y el Brand Book 2025. Usa esta skill SIEMPRE que alguien de Sngular pida un deck, slides, una propuesta a cliente, un caso de éxito, una presentación ejecutiva, una web, una landing, un mockup, una app, un post o cualquier pieza con la marca Sngular, aunque no diga "marca" ni "design system", y también cuando pida revisar si algo cumple la marca Sngular. Works in Spanish and English.
---

# Sngular Design

Esta skill convierte cualquier pedido visual de Sngular en una pieza fiel a la marca. La marca tiene pocas reglas pero muy reconocibles: si se respetan, cualquier persona (desde un desarrollador hasta el CEO) produce algo que parece hecho por el equipo de marca. Si se ignoran, sale "una plantilla azul genérica", que es justo lo que queremos evitar.

## 1. Decide qué se está haciendo

| Pedido | Canal | Lee después |
|---|---|---|
| deck, slides, presentación, propuesta, pitch, caso de éxito, kick-off, webinar | Presentación (prioridad 1) | `references/presentations.md` |
| web, landing, página, hero, newsletter, banner | Web (prioridad 2) | `references/web.md` |
| app, pantalla, flujo, dashboard, prototipo | App (prioridad 3) | `references/apps.md` |
| post de redes, portada, cartel, invitación | Pieza visual | `references/presentations.md` (recursos) + `references/web.md` (formatos) |
| "revisa si esto cumple la marca" | Revisión | la checklist de la sección 5 |

Lee **siempre** `references/brand-foundations.md` (color, tipo, logo, recursos, accesibilidad) y `references/voice-and-messaging.md` (tono, mensajes y cifras). Después, solo la referencia del canal.

## 2. Carga el Design System

La fuente de verdad es el **Sngular Design System**. Úsalo así, por orden:

1. **En claude.ai con la herramienta Artifact:** el Design System publicado es `https://claude.ai/artifact/EcM2J9oVHkk7ExgXXMwDVM`. Si está marcado como predeterminado de la organización, las Slides y los Designs lo usan solos. Si no, pásalo explícitamente como design system al crear la pieza. Lee su `project/README.md` antes de elegir colores o tipografía. Si el enlace no responde, busca en la lista de Design Systems uno titulado "Sngular Design System".
2. **Sin acceso al artefacto** (Claude Code, API, otro entorno): usa los archivos de esta skill. `assets/tokens.json` y `assets/tokens.css` tienen todos los valores, `assets/logos/` los 8 SVG oficiales y `assets/fonts/` la Outfit.
3. **Nunca** inventes un color, un tamaño o un logo que no esté en esas fuentes. Si algo falta, usa el valor más cercano del sistema y dilo en la entrega.

## 3. Construye la pieza

Sigue la referencia del canal. Las cinco decisiones que más pesan en el resultado son:

1. **Fondo y ritmo.** La paleta primaria ocupa el 95% (`navy`, `navy-light`, `white`, `blue`). En un deck, alterna slides blancas de contenido con separadores y slides de impacto en navy o blue.
2. **Un solo gesto de marca por composición.** Elige uno: un `SpecialTitle` (S| + caja azul), un par de `Highlight` (texto seleccionado), un cursor junto a la foto o la S gigante. Nunca todos a la vez. Así el recurso destaca.
3. **Tipografía de marca a escala.** Outfit, con los estilos del sistema (`display-1` 92/98, `heading-1` 48/52, `heading-2` 32/38 en blue, `paragraph` 20/30…). Los títulos siempre en color primario.
4. **Área segura.** En 16:9, 96px a los lados y 144px arriba y abajo, sobre un lienzo de 1920×1080. El título se pega al margen superior. Solo las fotos salen a sangre.
5. **Contenido real.** Usa los mensajes y las cifras de `voice-and-messaging.md`, en el idioma del pedido. Nunca uses lorem ipsum en una entrega.

## 4. Formatos de entrega

- **Presentación:** tipo Slides con el Design System de Sngular. Si piden explícitamente PowerPoint o Google Slides, entrega .pptx: Google Slides lo importa sin problema.
- **Web, landing o mockup:** tipo Design con el Design System. Si piden código, HTML o React con `assets/tokens.css` y las clases de los componentes.
- **App:** pantallas en Design. En código, los tokens y los componentes del sistema.
- Siempre en **tema claro**. Las zonas oscuras se hacen con `surface-inverse` (navy), no con un modo oscuro.

## 5. Checklist antes de entregar

Repasa cada punto. Si algo falla, corrígelo antes de entregar; no te limites a avisar.

- [ ] Solo colores del sistema. Los secundarios (`purple`, `green`, `red`) solo en iconos, líneas o detalles, nunca en títulos, párrafos ni cajas con texto.
- [ ] Todo el texto en Outfit (o Verdana si el entorno no la tiene) con estilos del sistema. Títulos en navy, white o blue.
- [ ] Contraste AA: `blue` como texto pequeño solo sobre `white`, y ningún texto `green` sobre fondo claro. Puedes comprobar pares con `python scripts/check_contrast.py 0070F6 F2F3F4`.
- [ ] Logo original, en la variante correcta para el fondo y con su tamaño mínimo (36px a color, 24px sólido). Isotipo S| arriba a la derecha en las slides.
- [ ] Como máximo un título especial y uno o dos resaltados por composición.
- [ ] Área segura respetada, cajas alineadas, sin viudas y sin cajas vacías.
- [ ] Fotos reales, de gama cromática limitada y en rectángulo recto.
- [ ] Idioma único y coherente. Las cifras salen de `voice-and-messaging.md` y lo dudoso se ha marcado para revisar.
- [ ] El pie de slide lleva "Copyright © Sngular. All rights reserved".

Al entregar, di en una o dos líneas qué recursos de marca usaste y qué supuestos hiciste (por ejemplo, una cifra por confirmar o una foto que hay que sustituir).
