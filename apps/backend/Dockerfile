# Base image
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install build dependencies (needed for some node packages)
RUN apk add --no-cache python3 make g++ git libc6-compat

# Copy package files for dependency installation
COPY package.json package-lock.json turbo.json ./
COPY apps/backend/package.json ./apps/backend/
COPY apps/storefront/package.json ./apps/storefront/

# Install dependencies (including devDependencies for build)
RUN npm ci

# Copy the rest of the application code
COPY apps/backend ./apps/backend

# Build the backend application
RUN npm run build --workspace=apps/backend

# Clean up dev dependencies to keep runner size smaller
RUN npm prune --omit=dev

# Runner stage
FROM node:20-alpine AS runner

WORKDIR /app

# Install dos2unix to handle Windows line endings in entrypoint script
RUN apk add --no-cache dos2unix

# Copy application files and node_modules from builder
COPY --from=builder /app /app

# Convert line endings of the entrypoint script just in case
RUN dos2unix /app/apps/backend/entrypoint.sh && chmod +x /app/apps/backend/entrypoint.sh

# Expose backend port
EXPOSE 8000

# Set workdir to the backend package to run commands correctly
WORKDIR /app/apps/backend

# Set default env variables
ENV NODE_ENV=production
ENV PORT=8000

ENTRYPOINT ["./entrypoint.sh"]
