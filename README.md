# Rock-Paper-Scissors App Template 🪨📜✂️

A small, web-based **rock-paper-scissors game** that can be played against the computer.  
The application runs in a **Docker container** and can optionally be configured with **Traefik** as a reverse proxy.

## 📺 Live Preview on
[rock-paper-scissors-app](https://rps.thyrail.de).

## 🚀 Features

- **Web-based:** Simple browser interface.
- **Traefik integration:** Automatic HTTPS support via Let's Encrypt.
- **Dockerized:** Platform-independent thanks to Docker.
- **ARM-compatible:** Works on both ARM and x86 architectures.

## 🛠 Requirements

- **Docker** (at least version 20.x)
- **Docker Compose**
- **Traefik** (as a reverse proxy) **| (optional)**
- **A domain** pointing to the server **| (optional)**

**(Optional) Without the above requirements:**  
Simply start directly using the following command:

```bash
node server.js
```

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/thyrail/rock-paper-scissors.git
cd rock-paper-scissors
```

2. **Create a `.env` file**
Create a .env file in the project directory and add the required variables:

```.env
EMAIL=deine-email@example.com
RPS_APP_DOMAIN=rps.your-domain.de
```
3. **Start Docker Compose**

```bash
docker compose up -d
```

4. **Access**
Visit the app in your browser at:
https://rps.deine-domain.de

### OR - Start the container with docker-compose.yml only (without Traefik & domain):
For this, simply create the docker-compose.yml on the target system:

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
Then execute the following commands in sequence:

```bash
# Das aktuelle Image zu beziehen
docker compose pull
# Container im "Detached Mode" zu starten
docker compose up -d
# Container zu stoppen und entfernen
docker compose down
```

## 🛠️ Configuration
### Traefik
The traefik.yml must be configured to add the app as a backend.

### Docker Compose
The `docker-compose.yml` is already preconfigured to work with Traefik. If you want to change the internal port, adjust both server.js and docker-compose.yml accordingly.

## 🐋 Docker Hub
The image is available on Docker Hub:

```bash
docker pull thyrail/rock-paper-scissors:latest
```

## 🤝 Contributions
This is a simple template, so if you have ideas to improve it, feel free to contribute 😄
Contributions are welcome! Please open an issue or create a pull request.

This project is licensed under the [MIT-License](LICENSE).
