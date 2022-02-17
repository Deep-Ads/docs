FROM node:16-alpine

COPY . /docs
WORKDIR /docs

RUN yarn install
RUN yarn build

CMD ["yarn", "run", "serve", "--port", "80", "--host" ,"0.0.0.0"]
