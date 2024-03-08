FROM node:latest

Run apt update -y

WORKDIR /app

COPY  . .

RUN [ -e "node_modules" ] && echo "node_modules exists" || npm install

ENTRYPOINT [ "npm", "start" ]