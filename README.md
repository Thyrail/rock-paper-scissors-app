# Rock-Paper-Scissors App 🪨📜✂️

Ein kleines, webbasiertes **Schere-Stein-Papier-Spiel**, das gegen den Computer gespielt werden kann. Die Anwendung läuft in einem Docker-Container und ist mit Traefik als Reverse Proxy konfiguriert.

## 🚀 Features

- **Webbasiert:** Einfaches Interface für den Browser.
- **Traefik-Integration:** Automatische HTTPS-Unterstützung dank Let's Encrypt.
- **Dockerized:** Plattformunabhängig dank Docker.
- **ARM-kompatibel:** Funktioniert auf ARM- und x86-Architekturen.

## 🛠 Anforderungen

- Docker (mindestens Version 20.x)
- Docker Compose
- Traefik (als Reverse Proxy)
- Eine Domain, die auf den Server verweist

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

## 🛠️ Konfiguration
### Traefik
Die `traefik.yml` muss so konfiguriert werden, dass die App als Backend hinzugefügt wird. Ein Beispiel findest du im Repository.

### Docker Compose
Die `docker-compose.yml` ist bereits so vorkonfiguriert, dass sie mit Traefik funktioniert. Wenn du Änderungen am internen Port vornehmen möchtest, passe die server.js und docker-compose.yml entsprechend an.

## 🐋 Docker Hub
Das image ist auf Docker Hub verfügbar:
```bash
docker pull thyrail/rock-paper-scissors:latest
```

## 🤝 Mitwirken
Beiträge sind willkommen! Bitte öffne ein Issue oder erstelle einen Pull Request.