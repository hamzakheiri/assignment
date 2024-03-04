FROM node:latest

RUN apt update -y && apt install xdg-utils -y

WORKDIR /app

COPY  . .

# RUN chmod +x setup.sh

ENTRYPOINT [ "bash" ]