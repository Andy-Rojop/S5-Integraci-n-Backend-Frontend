Tecnologías utilizadas
Frontend:

HTML5
JavaScript (ES6)
Nginx (servidor de archivos estáticos, proxy para API)
Backend:

Node.js
Express.js (estructura inspirada en Nest.js, pero en JavaScript puro)
Knex.js (query builder para PostgreSQL)
Base de datos:

PostgreSQL
DevOps:

Docker
Docker Compose
Cómo ejecutar el proyecto
Clona este repositorio:

git clone <url-del-repo>
cd Tarea_S5
dentro de la carpeta backend/ ejecuta estos comando en la terminal
npm init -y
npm install
Construye y levanta los servicios con Docker Compose en /homewordS5:

docker-compose up --build
Accede al frontend en tu navegador:
http://localhost:8080

El backend está disponible en:
http://localhost:3000

Migraciones
La tabla y columnas necesarias se crean automáticamente al iniciar el contenedor de PostgreSQL usando los scripts en la carpeta migrations/.

Estructura del proyecto
frontend/: HTML, JS y configuración de Nginx para el formulario y el listado.
backend/: API en Express (Nest.js style) y lógica de acceso a datos.
migrations/: Scripts SQL para la estructura de la base de datos.
docker-compose.yml: Orquestación de servicios.
README.md: Documentación del proyecto.
Notas
Los datos enviados desde el formulario se almacenan en la base de datos y pueden verse en el listado junto al formulario.
Puedes consultar los datos directamente en PostgreSQL o mediante el endpoint GET /form del backend.
Para detener los servicios, ejecuta:
docker-compose down
