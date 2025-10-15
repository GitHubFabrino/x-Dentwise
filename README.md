# DentWise - Application de Gestion Dentaire avec IA assistante

![DentWise Logo](public/pub.png)

Application web moderne de gestion de cabinet dentaire avec assistance vocale IA, développée avec Next.js et PostgreSQL, conteneurisée avec Docker. L'application intègre une intelligence artificielle avancée pour faciliter la gestion des rendez-vous et le suivi des patients.

## 🤖 Fonctionnalités IA

- **Assistant vocal intelligent** pour une interaction naturelle
- Prise de rendez-vous automatisée
- Rappels intelligents pour les patients
- Analyse des données pour des insights prédictifs

## 🚀 Fonctionnalités principales

- Interface utilisateur moderne et réactive
- Gestion complète des patients et des rendez-vous
- Tableau de bord administratif avec indicateurs en temps réel
- Base de données PostgreSQL pour un stockage fiable
- Conteneurisation avec Docker pour un déploiement facile

## 🛠 Prérequis

- Docker (version 20.10.0 ou supérieure)
- Docker Compose (version 1.29.0 ou supérieure)
- Git (pour cloner le dépôt)

## 🚀 Installation

1. **Cloner le dépôt**
   ```bash
   git clone [URL_DU_DEPOT]
   cd x-Dentwise
   ```

2. **Configurer les variables d'environnement**
   Créez un fichier `.env` à la racine du projet :
   ```env
   # Configuration de la base de données
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=postgres
   POSTGRES_DB=dentwise
   
   # Configuration de l'application
   NODE_ENV=development
   DATABASE_URL=postgresql://postgres:postgres@db:5432/dentwise?schema=public
   ```

## 🐳 Démarrage avec Docker Compose

### Développement

```bash
# Démarrer les conteneurs en arrière-plan
sudo docker-compose up -d

# Suivre les logs en temps réel
sudo docker-compose logs -f
```

L'application sera disponible à l'adresse : http://localhost:3000

### Arrêter les conteneurs

```bash
sudo docker-compose down
```

## 🔧 Commandes utiles

```bash
# Accéder au shell du conteneur de l'application
sudo docker-compose exec app sh

# Exécuter des commandes dans le conteneur
sudo docker-compose exec app npm run [commande]

# Redémarrer un service spécifique
sudo docker-compose restart app

# Voir l'état des conteneurs
sudo docker-compose ps

# Nettoyer les ressources inutilisées
sudo docker system prune
```

## 🌐 Configuration des ports

| Service | Port conteneur | Port hôte |
|---------|----------------|-----------|
| Application | 3000 | 3000 |
| Base de données | 5432 | 5434 |

## 💾 Volumes

- `postgres_data` : Persistance des données PostgreSQL
- `./:/app` : Montage du code source pour le développement
- `/app/node_modules` : Cache des dépendances Node.js
- `/app/.next` : Cache des builds Next.js

## 🔍 Dépannage

### Problèmes de ports

Si un port est déjà utilisé, modifiez-le dans `docker-compose.yml`.

### Erreurs de permission

```bash
# Ajouter l'utilisateur au groupe docker
sudo usermod -aG docker $USER

# Redémarrer la session utilisateur
newgrp docker
```

### Reconstruire les images

```bash
sudo docker-compose up -d --build
```

## 🚀 Production

Pour un environnement de production :
1. Modifiez `NODE_ENV=production`
2. Utilisez des variables d'environnement sécurisées
3. Configurez un reverse proxy (Nginx, Traefik)
4. Activez HTTPS avec Let's Encrypt

## 🛠️ Technologies et Bibliothèques

### Backend
- **Next.js 14** - Framework React full-stack
- **Prisma** - ORM pour la base de données
- **Clerk** - Authentification et gestion des utilisateurs
- **VAPI** - Intégration d'assistant vocal IA
- **PostgreSQL** - Base de données relationnelle

### Frontend
- **React 18** - Bibliothèque JavaScript pour les interfaces utilisateur
- **Tailwind CSS** - Framework CSS utilitaire
- **Shadcn/ui** - Composants UI accessibles et personnalisables
- **Framer Motion** - Animations fluides

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Docker Documentation](https://docs.docker.com/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Clerk Documentation](https://clerk.com/docs)
- [VAPI Documentation](https://docs.vapi.ai/)

## 📝 Licence

[À spécifier selon la licence de votre projet]
