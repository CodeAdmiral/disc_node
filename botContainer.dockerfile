FROM node:latest

COPY . /home/node/app
WORKDIR /home/node/app


RUN ls
