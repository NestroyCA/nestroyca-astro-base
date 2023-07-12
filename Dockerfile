# syntax=docker/dockerfile:1

# build
FROM node:18-slim AS build

RUN corepack enable

RUN mkdir /app && chown -R node:node /app
WORKDIR /app

USER node

COPY --chown=node:node .npmrc package.json pnpm-lock.yaml ./

RUN pnpm fetch

COPY --chown=node:node astro.config.ts tailwind.config.ts tsconfig.json ./
COPY --chown=node:node public ./public
COPY --chown=node:node src ./src

ARG PUBLIC_APP_BASE_URL
ARG PUBLIC_REDMINE_ID
ARG PUBLIC_MATOMO_BASE_URL
ARG PUBLIC_MATOMO_ID

RUN pnpm install --frozen-lockfile --offline

ENV NODE_ENV=production

RUN pnpm run build

# serve
FROM caddy:2-alpine AS serve

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/dist /srv

EXPOSE 3000
