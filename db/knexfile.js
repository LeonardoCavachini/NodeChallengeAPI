// Update with your config settings.
const {knexSnakeCaseMappers} = require('objection');
module.exports = {
  development: {
    client: 'postgres',
    connection: {
      database: 'node_db',
      user: 'node_db',
      password: '123456',
      port: '3000'
    },
    pool: {
      min: 2,
      max: 5
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds'
    },
    ...knexSnakeCaseMappers,
  },
};
