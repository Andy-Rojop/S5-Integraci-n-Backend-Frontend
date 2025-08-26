const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host: process.env.DB_HOST || 'db',
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASS || 'postgres',
        database: process.env.DB_NAME || 'formdb'
    }
});

class AppService {
    static async saveData({ nombre, email, message }) {
        const [result] = await db('formulario')
            .insert({ nombre, email, message })
            .returning(['id', 'nombre', 'email', 'message']);
        return result;
    }

    static async getAll() {
        return db('formulario').select('id', 'nombre', 'email', 'message');
    }
}

module.exports = { AppService };