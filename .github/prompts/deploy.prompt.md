---
mode: agent
description: "Website deployen – Build erstellen und auf Git pushen"
---

# Website deployen

Der User möchte die Website deployen. Führe folgende Schritte aus:

## Schritt 1: Build erstellen

Führe im Terminal aus:

```bash
npm run build
```

Warte ab, bis der Build erfolgreich abgeschlossen ist. Bei Fehlern: behebe sie und versuche es erneut.

## Schritt 2: Änderungen committen

Frage den User nach einer kurzen Beschreibung der Änderungen, falls nicht bereits angegeben.

```bash
git add -A
git commit -m "Deploy: {Beschreibung}"
```

## Schritt 3: Pushen

```bash
git push
```

## Schritt 4: Bestätigung

Bestätige dem User, dass der Deploy erfolgreich war und nenne die Commit-Message.
