FROM node:18-alpine

WORKDIR /app

COPY public .
COPY src .
COPY package* .

RUN npm install

CMD ["npm", "dev"]