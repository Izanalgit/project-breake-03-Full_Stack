### Portafolio con mensajes de interesados

#### 1. Descripción

Portafolio con proyectos personales y un formulario para enviarme mensajes aquellos interesados en contratarme. 

#### 2. Funcionalidades Clave

- Envio de mensajes.
* Login personal.
* Listado y borrado de mensajes.
* Listado y edicion de proyectos.
+ Health al servidor por si estubiera hivernado, gestionar la espera.

#### 3. API DESIGN 

- PUBLIC ==public==
    - GET /public/health
    * GET /public/projects
    + POST /public/contact {payload: (body)}

* LOG IN ==admin==
    - POST /user/login {payload: (body)}
    + POST /user/logout {payload: (body)}

* MESSAGES ==admin==
    - POST /messages {payload: (body)}
    + DELETE /messages/:mesgID {payload: (body)}

+ PROJECTS ==admin==
    - POST /projects {payload: (body)}
    * PUT /projects/:projectID {payload: (body)}
    + DELETE /projects/:projectID {payload: (body)}

#### 4. VARIABLES DE ENTORNO

+ PORT -> Puerto donde levantar la API
* MONGO_URI -> URI base de datos
* MONGO_BBDD -> Nombre base de datos
* DB_TEST_URI -> URI base de datos de prueba
* DB_TEST_PROJ -> Nombre de la base de datos de prueba para proyectos
* DB_TEST_MESG -> Nombre de la base de datos de prueba para mensages
+ CLIENT_URL -> URL del cliente para las politicas CORS

#### 5. DISEÑO DE BASE DE DATOS

Dada la naturaleza documental de los datos almacenados, uso mongo como bbdd.
Con los siguientes esquemas :

```javascript
const userSchema = new mongoose.Schema({
    name: { type: String, required: true , unique:true},
    pswd: { type: String, required: true },
});

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    link: { type: String, required: true, unique: true },
    description: { type: String, required: true},
});

const messageSchema = new mongoose.Schema({
    contact: { type: String, required: true },
    message: { type: String, required: true },
},{timestamps:true});
```