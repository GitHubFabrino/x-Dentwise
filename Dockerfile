# ÉTAPE 1: Utiliser une image Node.js légère basée sur Alpine Linux
# Alpine est une distribution minimale qui réduit la taille de l'image finale
FROM node:20-alpine

# Définit le répertoire de travail dans le conteneur
# Toutes les commandes suivantes seront exécutées depuis ce répertoire
WORKDIR /app

# ÉTAPE 2: Copier les fichiers de dépendances
# On copie d'abord uniquement les fichiers nécessaires à l'installation des dépendances
# pour tirer parti du cache de Docker et accélérer les builds ultérieurs
COPY package*.json ./
COPY prisma ./prisma/

# ÉTAPE 3: Installer les dépendances avec npm ci (clean install)
# Plus rapide et plus fiable que npm install car:
# - Supprime le node_modules existant
# - Installe exactement les versions spécifiées dans package-lock.json
RUN npm ci

# ÉTAPE 4: Copier le reste du code source
# Cette étape vient après l'installation des dépendances pour optimiser le cache
# Seules les modifications du code source déclencheront un nouveau build à partir d'ici
COPY . .

# ÉTAPE 5: Générer le client Prisma
# Crée le code TypeScript nécessaire pour interagir avec la base de données
# basé sur le schéma défini dans prisma/schema.prisma
RUN npx prisma generate

# ÉTAPE 6: Construire l'application
# Pour Next.js, cela va:
# - Compiler le code TypeScript
# - Générer les pages statiques
# - Optimiser les ressources (images, CSS, etc.)
RUN npm run build

# Documentation du port sur lequel l'application écoute
# À noter: cette instruction n'expose pas réellement le port
# C'est juste une documentation pour les utilisateurs du Dockerfile
EXPOSE 3000

# ÉTAPE 7: Commande de démarrage par défaut
# Sera exécutée quand le conteneur démarrera
# Utilisation de la forme tableau pour éviter les problèmes d'interprétation du shell
CMD ["npm", "start"]