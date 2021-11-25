const db = require('knex')({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'toor',
    database: 'cnab',
  },
});

module.exports = db;
