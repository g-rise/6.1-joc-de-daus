FROM node:20-alpine
# directori de destí
WORKDIR /joc
# copia del package.json i del package-lock.json
COPY package*.json ./
# instalació de totes les dependències
RUN npm install
# copiar tots el directoris a la direcció de destí
COPY . .

RUN npm run build

EXPOSE 3001

CMD ["node", "dist/app.js"]
