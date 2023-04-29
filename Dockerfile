FROM node:18
WORKDIR /usr/src/app
COPY package.json .
COPY pnpm-lock.yaml .
COPY pnpm-workspace.yaml .
ADD config config
ADD packages packages
RUN npm install -g pnpm
RUN pnpm
run pnpm build
CMD ["pnpm", "start"]