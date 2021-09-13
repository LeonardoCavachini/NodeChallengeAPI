const knex = require('knex');
const knexfile = require('./knexfile');
const { Model } = require('objection');

const setupDb = () => {
  //const environment = process.env.NODE_ENV || 'development';
  const db = knex(knexfile.development);
  Model.knex(db)
};

module.exports = setupDb;
