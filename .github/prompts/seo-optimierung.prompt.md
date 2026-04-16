---
mode: agent
description: "SEO und Google Search Optimierung durchführen"
---

# SEO Optimierung

Führe eine SEO-Optimierung für die Website durch. Prüfe und optimiere folgende Punkte:

## 1. Metadata prüfen

Gehe durch alle `page.tsx`-Dateien in `src/app/` und stelle sicher:
- Jede Seite hat `export const metadata: Metadata` mit `title` und `description`
- Titles sind aussagekräftig und unter 60 Zeichen
- Descriptions sind unter 160 Zeichen und enthalten relevante Keywords
- OpenGraph-Tags sind im Root-Layout gesetzt (`og:title`, `og:description`, `og:type`, `og:locale`)

## 2. Sitemap aktualisieren

Öffne `public/sitemap.xml` und stelle sicher:
- Alle Seiten aus `src/app/` sind enthalten
- Die Domain `https://www.example.com` muss durch die tatsächliche Domain ersetzt werden (frage den User)
- `lastmod` ist auf das aktuelle Datum gesetzt
- `priority` ist sinnvoll verteilt (Startseite: 1.0, Hauptseiten: 0.8, Rechtstexte: 0.3)
- `changefreq` ist realistisch gesetzt

## 3. robots.txt prüfen

Öffne `public/robots.txt` und stelle sicher:
- `Sitemap:`-Eintrag verweist auf die korrekte Domain
- Keine wichtigen Seiten werden blockiert
- `/api/` und andere interne Pfade sind blockiert

## 4. Semantisches HTML prüfen

Gehe durch alle Seiten und prüfe:
- Nur ein `<h1>` pro Seite
- Heading-Hierarchie ist korrekt (h1 → h2 → h3, keine Sprünge)
- `<nav>`, `<main>`, `<footer>`, `<header>` werden im Layout korrekt verwendet
- Bilder haben `alt`-Attribute

## 5. Performance-Hinweise

- Bilder sollten in modernen Formaten vorliegen (WebP)
- Externe Schriften sollten mit `font-display: swap` geladen werden
- Keine unnötigen JavaScript-Bundles

## 6. Structured Data (optional)

Schlage dem User vor, JSON-LD Structured Data im Layout hinzuzufügen:
- `Organization` oder `LocalBusiness` Schema
- `BreadcrumbList` für die Navigation
