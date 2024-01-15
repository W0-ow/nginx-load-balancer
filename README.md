
# Simple Load Balancer With NGINX

Load balancer with NGINX using 3 simple servers built with Node and Express.

![Captura de pantalla 2024-01-15 a las 20 02 13](https://github.com/W0-ow/nginx-load-balancer/assets/121321031/f1f68531-9dea-43be-a017-202e4d37d109)

## Requirements

 - [Docker & Docker-compose](https://docs.docker.com/compose/install/)

## Run Locally

Clone the project

```bash
  git clone https://github.com/W0-ow/nginx-load-balancer.git
```

Go to the project directory

```bash
  cd nginx-load-balancer
```

Build images and start containers

```bash
  docker compose up -d
```

See active containers

```bash
  docker ps -a
```

Local URL

- [http://localhost:8080](http://localhost:8080)

