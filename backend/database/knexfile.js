const db = require('knex')({
  client: 'mysql2',
  connection: {
    host: 'mysql',
    user: 'MYSQL_USER',
    password: 'MYSQL_PASSWORD',
    database: 'cnab',
  },
});

// const db = require('knex')({
//   client: 'mysql2',
//   connection: {
//     host: 'localhost',
//     user: 'root',
//     password: 'toor',
//     database: 'cnab',
//   },
// });

module.exports = db;
