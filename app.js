import 'dotenv/config'
import express from 'express'
import { db, dbConnection } from './src/database/connection.js'
import { Users } from './src/model/users.model.js'
import { contactsRouter } from './src/routes/contact.routes.js'
import { productsRouter } from './src/routes/products.routes.js'
import { userRouter } from './src/routes/user.routes.js'

const app = express() // crea una aplicación de express pero hasta esta linea el servidor no esta escuchando peticiones

const PORT = process.env.PORT || 8080 // Puerto. Para crear un servidor yo necesito exponer un puerto que este disponible para que los clientes pueda 
// comunicarse con el servidor (y hacer peticiones)

dbConnection(db)                     // Probamos la conexión con la base de datos
console.log(Users === db.models.users); // true


app.use(express.static('public'));  // Dejamos accesible la carpeta
app.use(express.json())             // Agrega un middleware que permite recibir body de las peticions  POST o PUT
// Si no existe esta linea no reconoce el body de un post o un put

app.get('/hello', (req, res) => { res.send('<h1>Hello World!</h1>') }) // Expone un endpoint de nuestra API, el metodo http es GET y la direccion(ubicacion)
// del recurso se expone(o indica) como primer parametro y como segundo parametro lo que se debe
// realizar para que el usuario obtenga el resultado deseado.

/**
 *  Se usan routes mediante el método .use(
 * parametro1: la ruta base para una funcionalidad ej: '/users', '/categories'
 * paramemtro2: un ruteador importado desde una constante almacenada (o exportada) en routes
 * )
 * 
 */

app.use('/users', userRouter)
app.use('/products', productsRouter)
app.use('/contacts', contactsRouter)
app.use('/categories', userRouter)


/**
 * .listen(
 * parametro1: Recibe puerto donde va a estar escuchando peticiones y a donde el usuario va a enviar sus peticiones,
 * parametro2: una funcion callback, por lo general suele hacer un console.log para indicar que la aplicacion esta corriendo
 * en un puerto determinado.
 * )
 */

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})

// Peticiiones HTTP

// GET      : Obtener datos
// POST     : Enviar datos
// PUT      : Modificar o reemplazar
// PATCH
// DELETE   : Borrar datos

/**
 * PARA SABER QUE EL SERVIDOR SEPA QUE TIENE QUE HACER
 * ==================================================
 * 1. Necesitamos una petición.
 * 2. Ruta.
 * 3. Response
 * 
 */