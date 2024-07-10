# Use the official Node.js 16 image as a parent image
FROM node:22.0.0-alpine3.19 as build

# Set the working directory inside the container
WORKDIR /app
COPY package.json .

# Install dependencies
RUN npm install

# Copy the rest of your application's source code
COPY . .

# Build your TypeScript application
RUN npm run build

# Your application's build command might output to the 'dist' directory
# Adjust the start command according to your setup
CMD ["node", "dist/index.js"]