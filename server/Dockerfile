# Get the node 16 Alpine image
FROM node:16-alpine
# Create a folder called App
WORKDIR /app
# Copy everything apart from node modules into app folder
# See dockerignore file
COPY . /app
# run these commands
RUN ["npm", "install"]
# expose a port
EXPOSE 7000
# run this command at entrypoint/on start
ENTRYPOINT ["npm", "run", "start:dev"]

