# Build stage
FROM node:14-alpine AS build

# Set working directory
WORKDIR /app

RUN mkdir /app/dist

# Copy package.json and package-lock.json
COPY package*.json ./

RUN ls -la
# Install dependencies
RUN npm i

# Copy the entire project
COPY . .

# Build the Vite React application
RUN npm run build

# RUN mkdir /app/build

# Production stage
FROM nginx:alpine

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy static assets from builder stage
COPY --from=build /app/dist .

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]