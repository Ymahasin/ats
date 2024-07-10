# Step 1: Build the React application
# Use a Node.js image to build the application
FROM node:16 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to work directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Step 2: Serve the application using nginx
# Use an nginx image to serve the built application
FROM nginx:alpine

# Copy the built application from the build stage to the nginx serve directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to the Docker host, so we can access the application
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]