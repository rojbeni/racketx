# --- STAGE 1: Build & Prune ---
FROM node:20-alpine AS builder

# Install pnpm globally and setup system dependencies for node-gyp build tools
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV CI=true
RUN corepack enable && apk add --no-cache python3 make g++ gcc

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

RUN pnpm --filter @dtc/backend build

# --- STAGE 2: Runner ---
FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production
# Copy application files and node_modules from builder

COPY --from=builder /app /app

# Set workdir to backend package
WORKDIR /app/apps/backend

# Create a symbolic link for the public assets folder to serve the admin dashboard
RUN ln -s .medusa/server/public public

EXPOSE 9000

# Execute database migrations and boot the framework
CMD ["sh", "-c", "npx medusa db:migrate && npx medusa start"]