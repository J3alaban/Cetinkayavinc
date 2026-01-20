# --------------------------
# Stage 1: Build the application
# --------------------------
FROM node:18-alpine as build
WORKDIR /app

# Paketleri kopyala ve yükle
COPY package.json package-lock.json ./  
RUN npm ci --legacy-peer-deps   # npm install yerine ci, lock dosyasını kullanır

# Uygulama dosyalarını kopyala ve build et
COPY . .  
RUN npm run build

# --------------------------
# Stage 2: Nginx ile servis
# --------------------------
FROM nginx:alpine

# React build çıktılarını Nginx dizinine kopyala
COPY --from=build /app/dist /usr/share/nginx/html  

# Nginx konfigürasyonu
COPY nginx.conf /etc/nginx/conf.d/default.conf  

# Sertifikalar için klasör oluştur
RUN mkdir -p /etc/letsencrypt

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
