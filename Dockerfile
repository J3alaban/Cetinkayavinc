# Stage 1: Build the application
FROM node:18-alpine as build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
# Nginx ayarını dışarıdan alacağız
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Sertifikalar için klasör oluştur
RUN mkdir -p /etc/letsencrypt

EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
