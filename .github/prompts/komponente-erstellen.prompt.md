---
mode: agent
description: "Komponente erstellen – wiederverwendbare React-Komponente"
---

# Neue Komponente erstellen

Erstelle eine wiederverwendbare React-Komponente.

## Regeln

- Speichere die Komponente in `src/components/[KomponentenName].tsx`
- Verwende **ausschließlich TailwindCSS-Klassen** für Styling
- Verwende TypeScript mit typisiertem Props-Interface
- Verwende den `@/`-Path-Alias bei Imports
- Die Komponente soll als **Default Export** exportiert werden

## Template

```tsx
interface [KomponentenName]Props {
  // Props hier definieren
}

export default function [KomponentenName]({ ...props }: [KomponentenName]Props) {
  return (
    <div>
      {/* Inhalt */}
    </div>
  );
}
```

## Nach Erstellung

- Zeige dem User, wie die Komponente importiert und verwendet wird
- Starte den Dev Server falls nötig und gib den Link aus: **http://localhost:3000**
