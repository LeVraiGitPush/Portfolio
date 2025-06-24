# Étape 1 : build
FROM node:20 AS build

WORKDIR /app

# Copier uniquement package.json + package-lock.json pour cache
COPY package.json package-lock.json* ./

RUN npm install

# Copier le reste des fichiers (ignore node_modules, dist via .dockerignore)
COPY . .

# Forcer les droits d'exécution sur vite binaire
RUN chmod +x node_modules/.bin/vite

# Build l'app (en local via npm script)
RUN npm run build

# Étape 2 : nginx pour servir les fichiers statiques
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
