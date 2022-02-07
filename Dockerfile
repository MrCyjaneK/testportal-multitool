FROM debian:stable

RUN apt update
RUN apt install -y nodejs npm
RUN npm install --global web-ext
