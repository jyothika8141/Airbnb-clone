#!/bin/sh

if [ "$DATABASE" = "postgres" ]; then
    echo "Check if database is running..."

    # Wait until the PostgreSQL server is available
    while ! nc -z "$SQL_HOST" "$SQL_PORT"; do
        sleep 0.1
    done

    echo "The database is up and running :D"
fi

# Run Django migrations
python manage.py makemigrations
python manage.py migrate

# Execute the CMD from Dockerfile
exec "$@"
