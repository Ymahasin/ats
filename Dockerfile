# Use the official Node.js 16 image as a parent image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application's source code
COPY . .

# Build your TypeScript application
RUN npm run build

# Your application's build command might output to the 'dist' directory
# Adjust the start command according to your setup
CMD ["node", "dist/index.js"]