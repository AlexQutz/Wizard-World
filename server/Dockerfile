# Use Node.js image as base
FROM node:14-alpine

# Set working directory
WORKDIR /app1

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port 3000
EXPOSE 3000

# Command to run the server
CMD ["node", "server.js"]