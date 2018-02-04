# Task Manager

## Quickstart

1. Install Docker
1. Install Docker Compose
1. Build and create the Docker containers: `docker-compose up --build -d`
1. Run the Django migrations against the Postgres container: `docker-compose exec api python manage.py migrate`