FROM node:latest as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

# stage 2
FROM nginx:alpine
COPY --from=build-step /app/dist/personal-website /usr/share/nginx/html
EXPOSE 4200:8080 