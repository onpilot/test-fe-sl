# # Stage 1 build app
# FROM node:16-slim AS build-app

# WORKDIR /usr/locals/app

# # Copying source files
# COPY . .

# RUN npm install -g pnpm
# RUN apt update && apt install -y git && pnpm install && pnpm run build

# # Stage 2 install runtime dependencies
# FROM node:16-slim AS build-runtime

# WORKDIR /usr/locals/app

# COPY package.json pnpm-lock.yaml ./

# RUN npm install -g pnpm
# RUN apt update && apt install -y git && pnpm install --production --frozen-lockfile

# # Stage 3
# FROM node:16-slim

# WORKDIR /usr/locals/app

# COPY --from=build-app /usr/locals/app .
# COPY --from=build-runtime /usr/locals/app/node_modules ./node_modules

# RUN npm install -g pnpm

# EXPOSE 3000

# # Start the app
# # CMD ["node", "./build/index.js"]
# CMD ["pnpm", "run", "deploy"]

# ==== CONFIGURE =====
# Use a Node 16 base image
FROM node:16-alpine 
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .
# ==== BUILD =====
# Install dependencies (makes sure the exact versions in the lockfile gets installed)
COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile
# Build the app
RUN pnpm run build
# ==== RUN =======
# Set the env to "production"
ENV NODE_ENV production
# Expose the port on which the app will be running (as in the vite.config)
EXPOSE 4173
# Start the app
CMD [ "pnpm", "run", "preview" ]