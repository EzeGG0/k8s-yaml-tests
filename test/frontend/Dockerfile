FROM node as BUILD
WORKDIR /home/node/
COPY . .
RUN npm i \
    && npm run build


FROM nginx
COPY --from=BUILD /home/node/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]