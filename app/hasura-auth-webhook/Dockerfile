FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY --chown=node . .
RUN npm install --legacy-peer-deps --omit=dev
RUN npm prune
EXPOSE 80
USER node