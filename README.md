# Examen Web janvier 2019

## Démarrer le projet

* Il faut avoir une base de données qui tourne (voir plus bas)
* Pas besoin de faire un `npm install` dans le projet, tous les modules sont déjà installés
* Entrez la commande `npm run dev` à la racine du projet
* L'application est disponible à l'adresse `http://localhost:3030/`

## Démarrer mongoDB

* Ouvrez un terminal (PowerShell sur Windows) dans le dossier `mongodb/bin/` fourni
* Entrez la commande `./mongod --dbpath ./data/db/`
* Vous allez voir un message apparaître du type `waiting for connections on port 27017`. Vous pouvez alors vous connecter à la DB sur le port 27017
* Gardez la fenêtre ouverte pour garder le serveur actif

/!\ Sur windows, il faut parfois appuyer sur `enter` dans la console pour avoir la suite de l'output.

## Structure des documents

### user
``` json
{
    "firstName": "Alfred",
    "lastName": "Shaw",
    "email": "alfred.shaw49@example.com",
    "password": "piazza"
}
```

### task
``` json
{
    "content": "Something to do..."
}
```
