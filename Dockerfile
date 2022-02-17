FROM node:16-alpine

COPY . /docs
WORKDIR /docs

RUN yarn install
RUN yarn build

CMD ["npm", "run", "serve"]
