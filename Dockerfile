FROM cypress/base:18.6.0

WORKDIR /app

COPY . /app


RUN npm install -g npm@9.4.2


RUN $(npm bin)/cypress verify


RUN ["npm", "run","cy:run"]
