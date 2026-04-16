---
mode: agent
description: "Entwicklungsserver starten und Vorschau-Link anzeigen"
---

# Dev Server starten

Wenn der User die Website testen, ansehen oder eine Vorschau möchte:

## Schritt 1: Dependencies prüfen

Prüfe ob `node_modules` existiert. Falls nicht:

```bash
npm install
```

## Schritt 2: Dev Server starten

Starte den Entwicklungsserver:

```bash
npm run dev
```

## Schritt 3: Link ausgeben

Gib dem User den Link aus:

**Die Website ist jetzt erreichbar unter: http://localhost:3000**

Falls der Port belegt ist, lies den tatsächlichen Port aus der Konsolenausgabe und gib den korrekten Link an.
