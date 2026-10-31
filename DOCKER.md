# Docker Setup Guide

This project includes Docker configuration for both client and server, making it easy to run the entire portfolio application in containers.

## Prerequisites

- Docker (v20.10+)
- Docker Compose (v2.0+)

## Quick Start

1. **Clone and setup environment**
   ```bash
   git clone <repo-url>
   cd Bijay_portfolio
   cp server/.env.example server/.env
   # Edit server/.env with your configuration
   ```

2. **Build and start containers**
   ```bash
   docker-compose up --build
   ```

   The application will be available at:
   - Frontend: http://localhost (set `CLIENT_PORT` to change the host port)
   - Backend API: http://localhost:5000 (bound to loopback only)

## Docker Configuration

### Services

- **Server**: Node.js/Express API running on port 5000
- **Client**: React/Vite frontend served by Nginx on port 3000

### Architecture

```
┌─────────────────────────────────────┐
│    Nginx (Port 80)                  │
│    Serving React Frontend           │
└────────────────┬────────────────────┘
                 │ Proxies API calls
                 ↓
┌─────────────────────────────────────┐
│    Node.js Express (Port 5000)      │
│    REST API                         │
└─────────────────────────────────────┘
```

## Common Commands

### Development

```bash
# Start containers in foreground (useful for logs)
docker-compose up

# Start containers in background
docker-compose up -d

# Stop containers
docker-compose down

# View logs
docker-compose logs -f

# View logs for specific service
docker-compose logs -f server
docker-compose logs -f client

# Rebuild images after code changes
docker-compose up --build
```

### Production Deployment

```bash
# Use the included docker-compose.yml
docker-compose -f docker-compose.yml up -d

# Build images for production
docker-compose build --no-cache
```

## Environment Variables

Configure server environment variables by editing `server/.env`:

- `NODE_ENV`: Set to `production` for production builds
- `PORT`: Server port (default: 5000)
- `CORS_ORIGIN`: Frontend URL for CORS configuration
- `SMTP_*`: Email configuration for contact form
- `RATE_LIMIT_*`: Rate limiting settings

## Building Individual Containers

### Build server only
```bash
docker build -t portfolio-api:latest ./server
```

### Build client only
```bash
docker build -t portfolio-client:latest ./client
```

## Troubleshooting

### Port already in use
If port 3000 or 5000 is already in use, modify the ports in `docker-compose.yml`:

```yaml
services:
  server:
    ports:
      - "5001:5000"  # Change external port
  client:
    ports:
      - "3001:80"    # Change external port
```

### Container won't start
Check logs for errors:
```bash
docker-compose logs server
docker-compose logs client
```

### Permission denied errors
Ensure Docker daemon is running and you have proper permissions:
```bash
sudo usermod -aG docker $USER
newgrp docker
```

## Health Checks

Both services include health checks that run every 30 seconds. Check container health:

```bash
docker-compose ps
```

## Performance Optimization

### Client (Nginx)
- Gzip compression enabled for text and application files
- Static asset caching (1 year for images, fonts, JS, CSS)
- Security headers configured
- SPA routing with fallback to index.html

### Server (Node.js)
- Multi-stage build to reduce image size
- Non-root user (nodejs) for security
- dumb-init for proper signal handling
- Health checks implemented

## Security Considerations

1. **Environment Variables**: Never commit `.env` files; use `.env.example` as template
2. **Images**: Built images are optimized for production with minimal attack surface
3. **Non-root User**: Application runs as non-root user for better isolation
4. **Network**: Services communicate over internal Docker network
5. **CORS**: Configure `CORS_ORIGIN` to restrict API access

## Cleanup

Remove all containers and volumes:
```bash
docker-compose down -v
```

Remove all images:
```bash
docker rmi portfolio-api portfolio-client
```

## Next Steps

- Configure your environment variables in `server/.env`
- Update Nginx configuration if needed (see `client/nginx.conf`)
- Add CI/CD pipeline for automated builds and deployments
- Consider using Docker registry (Docker Hub, ECR, etc.) for image storage

## Deploying to AWS EC2 (Ubuntu)

The containers are self-contained: the client image serves the built React app with
Nginx and proxies `/api/*` to the `server` container over the private Docker network.

### 1. Prepare the EC2 instance

Launch an Ubuntu 22.04/24.04 instance and allow inbound ports **22**, **80** and
**443** in its security group (port 5000 does **not** need to be public).

Install Docker Engine and the Compose plugin:

```bash
sudo apt update
sudo apt install -y ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo $VERSION_CODENAME) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo usermod -aG docker "$USER"
newgrp docker
```

### 2. Deploy the application

```bash
git clone <repository-url> ~/portfolio
cd ~/portfolio

# Create the backend environment file (never commit this file)
cp server/.env.example server/.env
nano server/.env

docker compose up -d --build
docker compose ps
curl http://localhost/api/health
```

The site is now reachable at `http://<ec2-public-ip>/`. Point your domain's DNS
`A` record (for `bijaychand.me` and `www`) at the instance's Elastic IP.

### 3. Enable HTTPS (recommended)

Terminate TLS on the host with Nginx + Certbot, and keep the app container bound
to a private port:

```bash
# On the EC2 host
echo 'CLIENT_PORT=8080' >> .env
docker compose up -d

sudo apt install -y nginx certbot python3-certbot-nginx
sudo tee /etc/nginx/sites-available/portfolio > /dev/null <<'NGINX'
server {
    listen 80;
    server_name bijaychand.me www.bijaychand.me;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
NGINX
sudo ln -sf /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/portfolio
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx

sudo certbot --nginx -d bijaychand.me -d www.bijaychand.me
```

Alternatively use an AWS Application Load Balancer with an ACM certificate and
keep the container on port 80.

### 4. Automated deployment with GitHub Actions

`.github/workflows/main.yml` syncs the repository to EC2 and runs
`docker compose up -d --build` on every push to `main`.

Add these repository secrets (Settings → Secrets and variables → Actions):

| Secret | Example |
| --- | --- |
| `EC2_HOST` | `ec2-1-2-3-4.compute-1.amazonaws.com` or public IP |
| `EC2_USER` | `ubuntu` |
| `EC2_TARGET_DIR` | `/home/ubuntu/portfolio` |
| `EC2_SSH_KEY` | private key whose public key is in `~/.ssh/authorized_keys` |

`server/.env` is excluded from the sync, so production secrets stay on the server.
On the very first deploy the workflow copies `server/.env.example` if `.env` is
missing — edit it on the server afterwards.

### 5. Operations

```bash
docker compose ps
docker compose logs -f
docker compose up -d --build      # redeploy after code changes
docker compose down               # stop
docker system prune -f            # reclaim disk space
```
