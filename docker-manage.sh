#!/bin/bash

# Docker management script for Portfolio application
# Usage: ./docker-manage.sh [command]

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Commands
COMMAND=${1:-help}

function print_header() {
    echo -e "${GREEN}========================================${NC}"
    echo -e "${GREEN}$1${NC}"
    echo -e "${GREEN}========================================${NC}"
}

function print_error() {
    echo -e "${RED}Error: $1${NC}"
}

function print_info() {
    echo -e "${YELLOW}→ $1${NC}"
}

case $COMMAND in
    build)
        print_header "Building Docker Images"
        print_info "Building server and client images..."
        docker-compose build
        print_info "✓ Build complete!"
        ;;

    up)
        print_header "Starting Portfolio Application"
        print_info "Starting containers in background..."
        docker-compose up -d
        print_info "✓ Containers started!"
        echo -e "\n${GREEN}Application URLs:${NC}"
        echo "  Frontend: http://localhost:${CLIENT_PORT:-80}"
        echo "  Backend:  http://localhost:${API_PORT:-5000}"
        echo ""
        print_info "View logs with: docker-compose logs -f"
        ;;

    down)
        print_header "Stopping Portfolio Application"
        print_info "Stopping all containers..."
        docker-compose down
        print_info "✓ Containers stopped!"
        ;;

    logs)
        print_header "Viewing Logs"
        SERVICE=${2:-}
        if [ -z "$SERVICE" ]; then
            docker-compose logs -f
        else
            docker-compose logs -f "$SERVICE"
        fi
        ;;

    restart)
        print_header "Restarting Portfolio Application"
        print_info "Restarting containers..."
        docker-compose restart
        print_info "✓ Containers restarted!"
        ;;

    clean)
        print_header "Cleaning Up Docker Resources"
        print_info "Removing containers and networks..."
        docker-compose down -v
        print_info "✓ Clean complete!"
        ;;

    ps)
        print_header "Container Status"
        docker-compose ps
        ;;

    shell)
        print_header "Opening Shell in Container"
        SERVICE=${2:-server}
        print_info "Opening shell in $SERVICE container..."
        docker-compose exec "$SERVICE" /bin/sh
        ;;

    rebuild)
        print_header "Rebuilding Everything"
        print_info "Stopping containers..."
        docker-compose down
        print_info "Building images..."
        docker-compose build --no-cache
        print_info "Starting containers..."
        docker-compose up -d
        print_info "✓ Rebuild complete!"
        ;;

    dev)
        print_header "Starting in Development Mode"
        print_info "Starting containers with output in foreground..."
        docker-compose up
        ;;

    *)
        echo "Portfolio Docker Management Script"
        echo ""
        echo "Usage: $0 [command] [options]"
        echo ""
        echo "Commands:"
        echo "  build              Build Docker images"
        echo "  up                 Start containers in background"
        echo "  down               Stop containers"
        echo "  logs [service]     View logs (optionally filter by service)"
        echo "  restart            Restart all containers"
        echo "  clean              Remove all containers and volumes"
        echo "  ps                 Show container status"
        echo "  shell [service]    Open shell in container (default: server)"
        echo "  rebuild            Clean rebuild everything"
        echo "  dev                Start in development mode (foreground)"
        echo "  help               Show this message"
        echo ""
        echo "Examples:"
        echo "  $0 up              # Start application"
        echo "  $0 logs server     # View server logs"
        echo "  $0 shell client    # Open client container shell"
        echo ""
        ;;
esac
