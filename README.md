# API Juego de Dados

Bienvenido al repositorio de la API para el Juego de Dados, un proyecto emocionante que se encuentra actualmente en pleno desarrollo. Esta API está diseñada para proporcionar una experiencia de juego interactiva y dinámica, permitiendo a los usuarios jugar a un clásico juego de dados de manera virtual.


. Estado del Proyecto
Este proyecto está en fase de desarrollo activo. Estamos trabajando para implementar las funcionalidades y mejorar la experiencia general del usuario. Como tal, es importante tener en cuenta que algunas características pueden no estar completamente pulidas o pueden estar sujetas a cambios.


. Características en Desarrollo

- Juego de Dados: Implementación de la lógica del juego para simular tiradas de dados.
- Interfaz de Usuario: Desarrollo de una interfaz de usuario intuitiva y atractiva para interactuar con la API.
- Integración con Bases de Datos: Configuración de una base de datos para almacenar resultados de juegos y estadísticas de los usuarios.
- Autenticación de Usuarios: Sistema de autenticación para permitir a los usuarios tener perfiles y rastrear su progreso.

  
. Tecnologías Utilizadas

 Este proyecto utiliza una variedad de tecnologías modernas para su desarrollo, incluyendo:

- Node.js: Como entorno de ejecución para JavaScript en el servidor.
- TypeScript: Para añadir tipado estático al código y mejorar la calidad del desarrollo.
- Jest: Para pruebas unitarias y asegurar la calidad del código.
- Prettier: Para mantener un estilo de código consistente.
- Instalación y Uso
  
Nota: Esta sección será actualizada a medida que el proyecto avance y se establezcan métodos claros de instalación y uso.

Para obtener una copia local en funcionamiento, sigue estos pasos:

- Clona el repositorio.
- Instala las dependencias con npm install.
- Ejecuta el entorno de desarrollo con npm run dev:run.
  
. Licencia
Este proyecto está bajo la Licencia ISC - vea el archivo LICENSE para más detalles.

# Entrega 6.1: Juego de Dados

Tendréis que construir el proyecto, una API que de soporte a un juego de dados.

Estas son las reglas del juego:

. Al juego de dados se juega con dos dados de seis caras
. En caso de que el resultado de los dos dados sea 7 la partida se gana. Si no, se pierde.
. Para poder jugar al juego te tienes que registrar como jugador/a con un nombre. Un jugador/a puede ver un listado de todas las tiradas que ha hecho y su porcentaje de éxito.
. Para poder realizar una tirada, un usuario/a se tiene que registrar con un nombre no repetido. Al ser creado, se le asigna un identificador único y una fecha de registro.

. Si el usuario/a lo desea, puede no añadir ningún nombre y se llamará “ANÓNIMO”. Puede haber más de un jugador/a “ANÓNIMO”.

. Cada jugador/a puede ver un listado de todas las tiradas que ha hecho con el valor de cada dado y si se ha ganado o no la partida. Además, puede saber el porcentaje de éxito de las tiradas que ha hecho.
. No se puede eliminar una partida en concreto, pero sí que se puede eliminar todo el listado de tiradas de un jugador/a. El software tiene que permitir listar todos los jugadores/as que hay al sistema, el porcentaje de éxito de cada jugador/a y el porcentaje de éxito medio de todos los jugadores/as en el sistema.
. El software tiene que respetar los principales patrones de diseño.

Tienes que tener en cuenta los siguientes detalles de construcción:

 . POST /players: crea un jugador/a.
 
 . PUT /players/{id}: modifica el nombre del jugador/a.

 . GET /players: devuelve el listado de todos los jugadores/as del sistema con su porcentaje de éxitos.

 . POST /games/{id}: un jugador/a específico realiza una tirada.

 . DELETE /games/{id}: elimina las tiradas del jugador/a.

 . GET /games/{id}: devuelve el listado de jugadas por un jugador/a.

 . GET /ranking: devuelve un ranking de jugadores/as ordenado por porcentaje de éxitos y el porcentaje de éxitos medio del conjunto de todos los jugadores/as.

 . GET /ranking/loser: devuelve el jugador/a con peor porcentaje de éxito.

 . GET /ranking/winner: devuelve el jugador/a con mejor porcentaje de éxito.

# Nivel 1

Persistencia: utiliza como base de datos MySQL (con Sequelize como ORM).

# Nivel 2

Crea un front-end para comprobar la funcionalidad

# Nivel 3

Persistencia: utiliza MongoDB (con Mongoose) como base de datos.

Objetivos:
Profundizar en el desarrollo del servidor de backend.
Creación y acceso a bases de datos.
Autenticación por Token.

- Crea un solo repositorio para el ejercicio, y envía la URL para que sea revisado.

- Documentar la API de manera clara y concisa, incluyendo información sobre las rutas, los parámetros y las respuestas esperadas.

- Documenta y adjunta las comprobaciones con una plataforma como Postman o Insomnia a tu proyecto.

- Diagrama de estructura con el diseño de la base de datos.

- Añade testing para comprobar el correcto funcionamiento.
