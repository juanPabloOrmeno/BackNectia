# BackNectia
Backend
- Crear un API usando el framework con el cual te sientas más cómodo (Java Spring Boot , NodeJs , Asp.net Core).
- Consumir Spotify API obteniendo un access_token (Client Credentials Flow).
- Usar access_token para obtener una lista de álbumes desde el Spotify Search API
- Guardar la lista de resultados en una base de datos local o cloud  (mongodb,( o mongo atlas ), sqlite, etc).
- Exponer un endpoint con los resultados.


## System
- Node              : v8.12.0 
- npm               : 6.9.0

## instalar typescript para correr comando tsc 
- npm install typescript -g

## instalar los paquetes de package.json 
- npm install

## iniciar proyecto, en caso de no querer partir proyecto ejecutar en consola tsc
- npm run dev

## compilar proyecto y dockerizar  (verificar nombre de package y version)
- npm run docker:build

## subir el proyecto al docker-registry
- npm run docker:push

## correr el docker local para pruebas
- npm run docker:run

## correr docker con docker-compose (Puerto expuesto 3000)
- docker-compose -f docker-compose.yml  up -d

# IMPORTANTE: 
- Tener la variable de ambiente DB_HOST definida, se agrego al package si lo corren local solo para sismate unix


