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
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

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
- `CLIENT_URL`: Frontend URL for CORS configuration
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
5. **CORS**: Configure `CLIENT_URL` to restrict API access

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
