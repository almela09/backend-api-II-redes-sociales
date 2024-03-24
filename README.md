# Backend II: Api Redes Sociales 🗣️✍️

<image src="./img/chicamovil.jpg" alt="Red Social">

### Tabla de contenidos:

- Sobre el proyecto
-Especificaciones
-Instalacion en local
-Diseño Base de Datos
-Endpoints
-Autor

### Sobre el proyecto ✏️📋:
Se trata de una api de una red social en la que puedes registrarte, acceder a tu área personal y escribir posts, tambien podrás ver las publicaciones de otros usuarios y darles like. Este proyecto forma parte del Bootcamp de GeeksHubs.
Enlace al DEPLOY: https://backend-api-ii-redes-sociales-dev-fnbs.2.ie-1.fl0.io

### Especificaciones 📏 :
Api rest conectada a una base de datos de MongoDB en la que podemos encontrar dos colecciones: User y Post.

Se han utilizado las siguientes tecnologías:

📌 ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

📌 ![MongoBD](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

📌 ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)


📌![Express](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

📌![ThunderClient](https://img.shields.io/badge/Thunder_Client-%237A1FA2?style=for-the-badge)

📌![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)


### Instalación en local 💾:

1. Clonar repositorio.

2. Instalar dependencias: `$ npm install`.
3. Crear una conexión con MongoAtlas.
4. Conectar el repositorio en Mongo Compass.
5. Ejecutar seeders: `$ npm run seeder`.

6. Poner en marcha el servidor `$ npm run dev`.

#### Diseño Base De Datos ✍️
<image src="./img/IMG_1363.jpg" alt="Red Social">

 #### Endpoints 🚩:

 ##### Superadmin:
 {
   "email": "superadmin@superadmin.com"
   "password": "123456789"
   }

##### Admin:
{
   "email": "admin@admin.com"
   "password": "123456789"
   }

##### User:
    {
   "email": "user@user.com"
   "password": "123456789"
   }


##### Register:

https://backend-api-ii-redes-sociales-dev-fnbs.2.ie-1.fl0.io/api/auth/register

 ##### Login:

 https://backend-api-ii-redes-sociales-dev-fnbs.2.ie-1.fl0.io/api/auth/login 



##### Crear post:

https://backend-api-ii-redes-sociales-dev-fnbs.2.ie-1.fl0.io/api/posts

##### Delete post:

https://backend-api-ii-redes-sociales-dev-fnbs.2.ie-1.fl0.io/api/posts/{id}

##### Update post:
https://backend-api-ii-redes-sociales-dev-fnbs.2.ie-1.fl0.io/api/posts/65ffdfbd1c331a830afeaade

##### Get my Own post:
https://backend-api-ii-redes-sociales-dev-fnbs.2.ie-1.fl0.io/api/posts/

##### Dar/quitar like:

https://backend-api-ii-redes-sociales-dev-fnbs.2.ie-1.fl0.io/api/posts/like/65fb09073b95ec635e8b6fb9



 #### Autor 🌱

 Paula Almela






     


