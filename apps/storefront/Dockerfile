# --- STAGE 1: Build ---
FROM node:20-alpine AS builder

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV CI=true
RUN corepack enable && apk add --no-cache libc6-compat

WORKDIR /app

# Copy root lockfile and workspace files from your monorepo context
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
# Copy package manifests from workspaces
COPY apps/backend/package.json ./apps/backend/
COPY apps/storefront/package.json ./apps/storefront/

# Mount the pnpm store cache so it doesn't redownload every time
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# Copy the entire workspace code base
COPY . .

# Re-run install to link workspaces and source code correctly
RUN pnpm install --frozen-lockfile --offline

RUN pnpm --filter @dtc/storefront build

# --- STAGE 2: Runner ---
FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=8000

# Copy application files and node_modules from builder
COPY --from=builder /app /app

# Expose storefront port
EXPOSE 8000

# Set workdir to storefront package to run it
WORKDIR /app/apps/storefront

# Start storefront application
CMD ["npm", "run", "start"]