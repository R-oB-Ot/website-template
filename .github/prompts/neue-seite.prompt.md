---
mode: agent
description: "Neue Seite zur Website hinzufügen"
---

# Neue Seite erstellen

Der User möchte eine neue Seite erstellen. Frage nach dem Seitennamen und Inhalt, falls nicht angegeben.

## Schritt 1: Seiten-Ordner erstellen

Erstelle einen neuen Ordner unter `src/app/[seitenname]/` mit dem URL-freundlichen Namen (Kleinbuchstaben, Bindestriche statt Leerzeichen, keine Umlaute in URLs – verwende `ue`, `ae`, `oe`, `ss`).

## Schritt 2: page.tsx erstellen

Erstelle `src/app/[seitenname]/page.tsx` mit:

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "[Seitentitel]",
  description: "[Seitenbeschreibung für SEO]",
};

export default function [KomponentenName]() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">[Seitentitel]</h1>
      {/* Inhalt hier */}
    </div>
  );
}
```

## Schritt 3: Navigation aktualisieren

Frage den User, ob die Seite in die Navigation aufgenommen werden soll.
Wenn ja, füge einen Link in `src/app/layout.tsx` in der `<nav>` hinzu:

```tsx
<li>
  <a href="/[seitenname]/" className="hover:underline">
    [Anzeigename]
  </a>
</li>
```

## Schritt 4: Sitemap aktualisieren

Füge einen neuen Eintrag in `public/sitemap.xml` hinzu:

```xml
<url>
  <loc>https://www.example.com/[seitenname]/</loc>
  <lastmod>[DATUM]</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

## Schritt 5: Dev Server starten

Starte den Dev Server (falls nicht bereits laufend) und gib den Link aus:

```bash
npm run dev
```

**Die neue Seite ist erreichbar unter: http://localhost:3000/[seitenname]/**
