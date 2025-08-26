module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: process.env.POSTGRES_HOST || 'db',
            user: process.env.POSTGRES_USER || 'postgres',
            password: process.env.POSTGRES_PASSWORD || 'postgres',
            database: process.env.POSTGRES_DB || 'formdb',
        },
        migrations: {
            directory: '../migrations'
        }
    }
};