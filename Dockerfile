FROM node:16
WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
ADD config config
ADD packages packages
RUN npm install -g pnpm
RUN pnpm
run pnpm build
CMD ["pnpm", "start"]