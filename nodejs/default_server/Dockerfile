FROM node:current

WORKDIR /user/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "server.js"]