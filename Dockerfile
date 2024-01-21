# Use a Node base image
FROM node:latest

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./


# Copy the entire application's code first
COPY . .

# Remove the node_modules directory that may have been copied from the host
RUN rm -rf node_modules

# Then, install dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
