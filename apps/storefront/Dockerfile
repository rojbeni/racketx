# Base image
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install build dependencies
RUN apk add --no-cache libc6-compat

# Copy package files for dependency installation
COPY package.json package-lock.json turbo.json ./
COPY apps/backend/package.json ./apps/backend/
COPY apps/storefront/package.json ./apps/storefront/

# Install dependencies (including devDependencies for build)
RUN npm ci

# Copy application code
COPY apps/storefront ./apps/storefront

# Set build-time arguments for Next.js (crucial for client-side bundle generation)
ARG NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY
ARG NEXT_PUBLIC_MEDUSA_BACKEND_URL
ARG NEXT_PUBLIC_DEFAULT_REGION=dk
ARG NEXT_PUBLIC_BASE_URL=http://localhost:8000

# Set env variables for build time
ENV NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=$NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY
ENV NEXT_PUBLIC_MEDUSA_BACKEND_URL=$NEXT_PUBLIC_MEDUSA_BACKEND_URL
ENV NEXT_PUBLIC_DEFAULT_REGION=$NEXT_PUBLIC_DEFAULT_REGION
ENV NEXT_PUBLIC_BASE_URL=$NEXT_PUBLIC_BASE_URL
ENV NODE_ENV=production

# Build storefront application
RUN npm run build --workspace=apps/storefront

# Clean up dev dependencies to keep runner size smaller
RUN npm prune --omit=dev

# Runner stage
FROM node:20-alpine AS runner

WORKDIR /app

# Copy application files and node_modules from builder
COPY --from=builder /app /app

# Expose storefront port (from package.json start script: 8000)
EXPOSE 8000

# Set default env variables
ENV NODE_ENV=production
ENV PORT=8000

# Set workdir to storefront package to run it
WORKDIR /app/apps/storefront

# Start storefront application
CMD ["npm", "run", "start"]
