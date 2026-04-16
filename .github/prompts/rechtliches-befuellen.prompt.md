---
mode: agent
description: "Rechtliche Seiten (Impressum, Datenschutz, AGB, Cookies) mit Kundendaten befüllen"
---

# Rechtliche Seiten befüllen

Die Website enthält vorbereitete Rechtstexte nach österreichischem Recht mit Platzhaltern `[...]`. Diese müssen mit den tatsächlichen Daten des Kunden befüllt werden.

## Benötigte Informationen

Frage den User nach folgenden Daten (soweit nicht bereits bekannt):

### Pflichtangaben (Impressum & Datenschutz)
- **Firmenname** oder Vor-/Nachname des Betreibers
- **Rechtsform** (Einzelunternehmen, GmbH, OG, KG, etc.)
- **Adresse** (Straße, Hausnummer, PLZ, Ort)
- **E-Mail-Adresse**
- **Telefonnummer**
- **Unternehmensgegenstand**
- **UID-Nummer** (ATU...)
- **Firmenbuchnummer** (FN...)
- **Zuständiges Gericht** (Landesgericht...)
- **Aufsichtsbehörde/Gewerbebehörde**
- **Berufsbezeichnung** und zuständige Kammer (falls zutreffend)

### Für Cookie-Richtlinie
- Welche Cookies werden verwendet? (z.B. Google Analytics, Facebook Pixel)
- Cookie-Namen, Zweck und Speicherdauer

### Für AGB
- **Gerichtsstand** (Ort)
- Besondere Geschäftsbedingungen (falls vorhanden)

## Dateien bearbeiten

Ersetze alle `[...]`-Platzhalter in folgenden Dateien:
1. `src/app/impressum/page.tsx`
2. `src/app/datenschutz/page.tsx`
3. `src/app/agb/page.tsx`
4. `src/app/cookie-richtlinie/page.tsx`

Setze das aktuelle Datum als Stand-Datum ein.

## Wichtig

- Die Rechtstexte sind **Vorlagen** und ersetzen keine Rechtsberatung
- Weise den User darauf hin, dass eine Prüfung durch einen Rechtsanwalt empfohlen wird
- Alle Texte müssen auf Deutsch (Österreich) sein
