FROM node:18

RUN mkdir -p /home/app

COPY ./dist /home/app/dist
COPY ./node_modules /home/app/node_modules

EXPOSE 3001

CMD ["node", "/home/app/dist/app.js"]