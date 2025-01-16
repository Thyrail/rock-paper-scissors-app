# Rock-Paper-Scissors App Template 🪨📜✂️

Ein kleines, webbasiertes **Schere-Stein-Papier-Spiel**, das gegen den Computer gespielt werden kann.
Die Anwendung läuft in einem **Docker-Container** und **"kann"** zusätzlich mit **Traefik** als Reverse Proxy konfiguriert werden.

## 🚀 Features

- **Webbasiert:** Einfaches Interface für den Browser.
- **Traefik-Integration:** Automatische HTTPS-Unterstützung dank Let's Encrypt.
- **Dockerized:** Plattformunabhängig dank Docker.
- **ARM-kompatibel:** Funktioniert auf ARM- und x86-Architekturen.

## 🛠 Anforderungen

- **Docker** (mindestens Version 20.x)
- **Docker Compose**
- **Traefik** (als Reverse Proxy) **| (optional)**
- **Eine Domain**, die auf den Server verweist **| (optional)**

**(Optional) ohne oben genannten Anforderungen:**
Einfach direkt mit folgendem Befehl starten:
```bash
node server.js
```

## 📦 Installation

1. **Repository klonen**
```bash
git clone https://github.com/thyrail/rock-paper-scissors.git
cd rock-paper-scissors
```

2. **`.env`-Datei erstellen**
Erstelle eine `.env`-Datei im Projektverzeichnis und füge die benötigten Variablen hinzu:
```.env
EMAIL=deine-email@example.com
RPS_APP_DOMAIN=rps.your-domain.de
```
3. **Docker Compose starten**
```bash
docker compose up -d
```

4. **Zugriff** Besuche die App im Browser unter:
https://rps.deine-domain.de

### ODER - Container nur mit `docker-compose.yml` starten (ohne Traefik && Domain):
Dafür erstellt man auf dem gewünschten Zielsytem einfach die `docker-compose.yml`:
```yaml
services:
  rock-paper-scissors:
    image: thyrail/rock-paper-scissors:latest
    container_name: rps-app
#    labels:
#      - "traefik.enable=true"
#      - "traefik.http.routers.rps.rule=Host(`${APP_DOMAIN}`)"
#      - "traefik.http.routers.rps.entrypoints=websecure"
#      - "traefik.http.routers.rps.tls.certresolver=le"
#      - "traefik.http.services.rps.loadbalancer.server.port=${APP_PORT}"
#    networks:
#      - proxy
    restart: always

#networks:
#  proxy:
#    external: true
```
Und führt folgende Befehle hintereinander aus:
```bash
# Das aktuelle Image zu beziehen
docker compose pull
# Container im "Detached Mode" zu starten
docker compose up -d
# Container zu stoppen und entfernen
docker compose down
```

## 🛠️ Konfiguration
### Traefik
Die `traefik.yml` muss so konfiguriert werden, dass die App als Backend hinzugefügt wird.

### Docker Compose
Die `docker-compose.yml` ist bereits so vorkonfiguriert, dass sie mit Traefik funktioniert. Wenn du Änderungen am internen Port vornehmen möchtest, passe die server.js und docker-compose.yml entsprechend an.

## 🐋 Docker Hub
Das image ist auf Docker Hub verfügbar:
```bash
docker pull thyrail/rock-paper-scissors:latest
```

## 🤝 Mitwirken
Es handelt sich hier um ein schlichtes Template, wer also Ideen hat, es weiter auszubessern, nur zu 😄
Beiträge sind willkommen! Bitte öffne ein Issue oder erstelle einen Pull Request.