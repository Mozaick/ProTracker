# Specifiy a version to use
FROM mongo:latest
# Set the required environment variables
# ENV POSTGRES_PASSWORD=password
# Copy everything from the sql folder into docker entrypoint
# ie your script to create/populate your database
# See the initialization scripts for more detail https://hub.docker.com/_/postgres
COPY ./dbdata/ /docker-entrypoint-initdb.d