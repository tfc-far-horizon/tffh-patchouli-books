FROM node:22-bookworm-slim
WORKDIR /app
COPY package.json ./
COPY server.mjs ./
COPY lib ./lib
COPY public ./public
COPY scripts ./scripts
COPY parser-dist ./parser-dist
RUN mkdir -p /data/documents /data/backups
ENV HOST=0.0.0.0 PORT=4173 DOCUMENT_ROOT=/data/documents BACKUP_ROOT=/data/backups
EXPOSE 4173
CMD ["node", "server.mjs"]
