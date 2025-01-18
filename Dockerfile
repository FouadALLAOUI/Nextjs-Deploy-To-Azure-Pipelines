FROM node:20-alpine3.19
ENV NODE_ENV=production \
    NPM_CONFIG_LOGLEVEL=error \
    NPM_CONFIG_FUND=false
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production --silent && \
    npm cache clean --force && \
    mv node_modules ../ && \
    chmod -R 555 . && \
    addgroup -g 1001 nodejs && \
    adduser -S -u 1001 -G nodejs nodejs && \
    chown -R nodejs:nodejs .
COPY --chown=nodejs:nodejs . .
EXPOSE 3000
USER nodejs
CMD ["npm", "start"]
