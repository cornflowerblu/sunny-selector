FROM node:lts-alpine as builder
WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build

FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY --from=builder --chown=node /app/dist ./dist
COPY --from=builder --chown=node /app/package.json ./
RUN npm install --legacy-peer-deps --omit=dev
RUN npm prune
EXPOSE 80
USER node