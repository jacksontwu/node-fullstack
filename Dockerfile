FROM alpine:3.14

RUN sed -i 's/https/http/' /etc/apk/repositories

RUN apk add curl bash ca-certificates openssh nginx

# nodejs
RUN apk add --update nodejs npm
RUN npm config set registry https://registry.npm.taobao.org

# nginx
COPY ./nginx.conf /etc/nginx/nginx.conf

# frontend
RUN mkdir -p /home/www/web
WORKDIR /home/www/web
COPY ./frontend /home/www/web
RUN npm install --force
RUN npm run build

# backend
RUN mkdir -p /home/www/server
WORKDIR /home/www/server
COPY ./backend /home/www/server
RUN npm install

EXPOSE 80
EXPOSE 8080

CMD (nohup npm run start &) && (nginx -g "daemon off;") 
