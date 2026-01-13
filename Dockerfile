# Stage 1: Build the application
FROM node:18-alpine as build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

# Stage 2: Production server
FROM nginx:alpine
# Build sonucunu kopyala
COPY --from=build /app/dist /usr/share/nginx/html
# Hazırladığımız nginx.conf dosyasını kopyala
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
