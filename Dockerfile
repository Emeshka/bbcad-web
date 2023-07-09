FROM node

WORKDIR /app

EXPOSE 3000

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

ENTRYPOINT [ "npm", "run" ]

CMD [ "dev" ]