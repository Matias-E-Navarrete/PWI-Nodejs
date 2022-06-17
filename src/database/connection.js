import 'dotenv/config'
import { Sequelize } from 'sequelize'

export const db = new Sequelize('test', 'root', 'root1234', {
    host: 'localhost',
    dialect: 'mysql'
});


export const dbConnection = async (db) => {
    try {
        await db.authenticate(); // Await se usa siempre para hacer bloqueante una instruccion que necesitamos  esperar ya que necesitamos
        // usarla en instrucciones posteriores. Para el hilo de ejecución y espera a que la promsea se resuelva por
        // Exito o error (Siempre que una funcion contiene un await la funcion debe indicarse como async)

        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

