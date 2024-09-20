# Nombre del Proyecto

Descripción breve de tu proyecto y su propósito.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Uso](#uso)
- [Ejemplos](#ejemplos)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Características

- Lista de características y funcionalidades del proyecto.
- Ejemplo: Gestión de tareas con autenticación de usuarios.
- Ejemplo: Documentación de API con Swagger.

## Tecnologías Utilizadas

- Node.js
- Express
- Sequelize (ORM)
- MySQL
- JWT (JSON Web Tokens) para autenticación
- Swagger para documentación de API

## Instalación

Sigue estos pasos para instalar el proyecto en tu máquina local:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu_usuario/nombre_del_proyecto.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd task-manager-api
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Crea un archivo .env y configura tus variables de entorno:

   ```makefile
   DB_DATABASE=nombre_base_de_datos
   DB_USER=usuario
   DB_PASSWORD=contraseña
   DB_HOST=localhost
   PORT=3000
   JWT_SECRET=tu_secreto

   ```

5. Crea la base de datos:
   ```bash
   nombre_base_de_datos
   ```
6. Inicia el servidor:

   ```bash
   npm run local
   ```

7. Visita la documentacion:
   ```http
    Visita http://localhost:3000/api-docs para acceder a la documentación de la API generada con Swagger.
   ```
