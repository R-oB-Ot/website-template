# Copilot Agent Instructions – Statische Website (Next.js)

## Projektübersicht

Dies ist ein **statisches Website-Projekt** basierend auf:

- **React 18** als UI-Library
- **Next.js 14** mit `output: "export"` für statischen HTML-Export
- **TailwindCSS 3** für das Styling
- **TypeScript** als Sprache

Die Website richtet sich an den **österreichischen Markt** und muss dem österreichischen Recht entsprechen (ECG, DSG, DSGVO, TKG 2021, KSchG, FAGG).

## Ordnerstruktur

```
src/
  app/              # Next.js App Router – Seiten und Layouts
    layout.tsx      # Root-Layout mit Header, Footer, Navigation
    page.tsx        # Startseite
    globals.css     # Globale Styles (TailwindCSS)
    impressum/      # Impressum (§ 5 ECG, § 25 MedienG)
    datenschutz/    # Datenschutzerklärung (DSGVO, DSG)
    agb/            # Allgemeine Geschäftsbedingungen
    cookie-richtlinie/  # Cookie-Richtlinie (TKG 2021)
  components/       # Wiederverwendbare React-Komponenten
  lib/              # Hilfsfunktionen und Utilities
public/
  robots.txt        # SEO – Crawler-Steuerung
  sitemap.xml       # SEO – Sitemap
  images/           # Statische Bilder
```

## Allgemeine Regeln

1. **Sprache**: Alle sichtbaren Texte auf der Website sind auf **Deutsch (Österreich)**.
2. **Statischer Export**: Es gibt **kein serverseitiges Rendering zur Laufzeit**. Alles wird statisch exportiert (`next build` erzeugt `out/`-Ordner). Verwende keine `getServerSideProps`, keine API-Routes, keine dynamischen Server-Funktionen.
3. **Styling**: Verwende ausschließlich **TailwindCSS-Klassen**. Kein inline CSS, kein CSS-Modules, kein styled-components.
4. **Komponenten**: Erstelle wiederverwendbare Komponenten in `src/components/`. Verwende den `@/`-Path-Alias für Imports.
5. **Bilder**: Verwende das Next.js `<Image>`-Tag mit `unoptimized={true}` (da statischer Export) oder einfache `<img>`-Tags.
6. **Links**: Verwende `<a>`-Tags mit `trailingSlash` (z.B. `/ueber-uns/`), da `next/link` bei statischem Export Vorteile bietet aber nicht zwingend ist.
7. **SEO**: Jede Seite muss ein `export const metadata: Metadata` haben mit `title` und `description`.
8. **Rechtliches**: Die Seiten Impressum, Datenschutz, AGB und Cookie-Richtlinie enthalten Platzhalter in eckigen Klammern `[...]`, die vom Kunden ausgefüllt werden müssen.

## Dev Server

Wenn der User die Website sehen oder testen will:
1. Führe `npm run dev` aus
2. Gib dem User den Link: **http://localhost:3000**

## Deployment

Wenn der User die Website deployen möchte:
1. Führe `npm run build` aus, um den statischen Export zu erzeugen
2. Committe alle Änderungen: `git add -A && git commit -m "Deploy: [Beschreibung]"`
3. Pushe auf den Remote: `git push`

## Neue Seiten erstellen

Wenn der User eine neue Seite erstellen möchte:
1. Erstelle einen Ordner unter `src/app/[seitenname]/`
2. Erstelle eine `page.tsx` darin mit `metadata` Export
3. Füge die Seite zur Navigation in `src/app/layout.tsx` hinzu (wenn gewünscht)
4. Aktualisiere `public/sitemap.xml`

## SEO-Checkliste

Bei jeder neuen Seite oder Änderung:
- `metadata` mit `title` und `description` gesetzt
- `sitemap.xml` aktualisiert
- `robots.txt` korrekt konfiguriert
- Semantisches HTML verwenden (`<h1>`, `<h2>`, `<nav>`, `<main>`, `<footer>` etc.)
- Alt-Texte für alle Bilder
- Nur ein `<h1>` pro Seite
