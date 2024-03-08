FROM node:latest

RUN apt update -y && apt install xdg-utils -y

WORKDIR /app

COPY  . .

RUN [ -e "node_modules" ] && echo "node_modules exists" || npm install

ENTRYPOINT [ "npm", "run", "start:dev" ]