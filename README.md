# WebDesign, Front-end for Cinema Manager

## Descripción

Este es un proyecto creado en React para la gestión de reservas en linea de funciones en una empresa de cine **CINEDISTRITO** (Empresa Ficticia). En el cual se realizan peticiones http a traves de la Librería **Axios** a un servidor creado en **Node.js** y **Express** con una base de datos creada en **PostgreSQL** que se puede observar en [este link del repositorio](https://github.com/shootface/Cine_distrito_BackEnd).

El proyecto esta en su primera versión y en esta se gestionan aspectos como:

- **Clientes y Usuarios:** Registro de clientes con sus respectivos usuarios, seguridad de claves, ingreso de tarjeta de crédito, Muestra de información de clientes.
- **Películas:** Muestra de películas que hay en Cartelera, Muestra de información detallada de películas.
- **Snacks:** Muestran los productos que se encuentran en Store donde el usuario puede escoger cuales reservar en linea.
- **Salas y Teatros:** Se tiene una base de teatros y salas que están contenidas en la base de datos y son clave para la creación de funciones y gestión de reservas.
- **Funciones:** Muestra los horarios por fecha y hora separadas por las diferentes teatros y por tipo de función (2D doblada, 3D doblada, 2D subtitulada, 3D subtitulada).
- **Reservas:** Se realiza la gestión en tiempo real de reservas de **Asientos** en la sala y **Snaks** de las funciones proporcionando 3 estados principales de reservas para controlar las reservas en tiempo real tanto de asientos con snacks que hayan en store:
  - En proceso
  - En Reserva
  - Cancelada

# Demostración

![](video_demostracion1.gif)

![](video_demostracion2.gif)

Para ver mas de la aplicación y su funcionamiento con el backend este puede verse a traves del siguiente enlace que contiene el video donde se ve corriendo la aplicación.

## [Video de Demostración](https://www.youtube.com/watch?v=wanQiRBcQS4&t=515s)

# Cosas por hacer en futuras versiones.

- Gestión de pagos por tarjeta a traves de PSE o un sistema estándar de seguridad de pagos.
- Gestión de usuarios para modificación de datos, revision de historial de compras, historial de puntos e historial de películas vistas.
- Modulo de administración para añadir snakcs, películas, funciones, horarios etc.
- Gestión de empleados con sus respectivos usuarios y acciones dentro de la aplicación web.
- Gestión de estadísticas donde los administradores puedan ver datos históricos y revisar los datos y asi hacer inteligencia de negocios.

# indicaciones Técnicas

Este proyecto fue Creado con [Create React App](https://github.com/facebook/create-react-app).

## Scripts disponibles

En el directorio del proyecto, puede correr:

### `npm install`

Para instalar todas las dependencias que el proyecto necesita para correr la aplicación.

### `npm start`

Ejecuta la aplicación en modo de desarrollo.<br />
Abra [http://localhost:3000](http://localhost:3000) en su navegador de preferencia para verlo en el navegador.

La página se volverá a cargar automáticamente si realiza modificaciones.<br />
También podrá ver los errores en la consola.

### `npm test`

Lanza el corredor de pruebas en el modo de vigilancia interactiva.

Puede ver la sección sobre [running tests](https://facebook.github.io/create-react-app/docs/running-tests) para más información.

### `npm run build`

Crea la aplicación para producción en la carpeta `build`.<br />
Empaqueta correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación se minimiza y los nombres de archivo incluyen los hashes.<br />
Tu aplicación está lista para desplegarse!

Puede ver la sección sobre [deployment](https://facebook.github.io/create-react-app/docs/deployment) para más información.

### `npm run eject`

**Nota: Esta es una operación unidireccional. Una vez se ejecuta (`eject`), no se puede volver atrás!**

Si no está satisfecho con la herramienta de compilación y las opciones de configuración, puede dar `eject` en cualquier momento. Este comando eliminará la dependencia de compilación única de su proyecto.

En su lugar, copiará todos los archivos de configuración y las dependencias transitivas (Webpack, Babel, ESLint, etc.) directamente en su proyecto para que tenga control total sobre ellos. Todos los comandos, excepto `eject`, seguirán funcionando, pero apuntarán a los scripts copiados para que pueda modificarlos. En este punto, estás solo.

# Más Información

Puede leer más en [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender mas de React lea [React documentation](https://reactjs.org/).

### Division de código

Esta sección la encuentra aquí: https://facebook.github.io/create-react-app/docs/code-splitting

### Analizando el tamaño del paquete

Esta sección la encuentra aquí: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Realizar una aplicación Progressive Web

Esta sección la encuentra aquí: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Configuraciones avanzadas

Esta sección la encuentra aquí: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Despliegue

Esta sección la encuentra aquí: https://facebook.github.io/create-react-app/docs/deployment

### Fallas en `npm run build`

Esta sección la encuentra aquí: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
