---
mode: agent
description: "Styling und Design der Website anpassen"
---

# Styling anpassen

Wenn der User das Design oder Styling der Website ändern möchte:

## Regeln

- Verwende **ausschließlich TailwindCSS-Klassen**
- Kein inline CSS, kein CSS-Modules, kein styled-components
- Farben und Theme-Anpassungen in `tailwind.config.ts` unter `theme.extend`
- Globale Styles nur in `src/app/globals.css` mit TailwindCSS `@apply` oder CSS-Variablen

## Typische Anpassungen

### Farben ändern
In `tailwind.config.ts`:
```ts
theme: {
  extend: {
    colors: {
      primary: '#....',
      secondary: '#....',
    },
  },
},
```

### Schriftart ändern
1. Lade die Schriftart in `src/app/layout.tsx` via `next/font`
2. Wende die Font-Klasse auf `<body>` an

### Layout ändern
- Header/Footer in `src/app/layout.tsx`
- Container-Breite über TailwindCSS `container` Klasse

## Nach Änderungen

Starte den Dev Server und gib den Link aus:
**Die Änderungen sind sichtbar unter: http://localhost:3000**
