FROM node:16
WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
ADD config config
ADD packages packages
RUN yarn
run yarn build
CMD ["yarn", "start"]