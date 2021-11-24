// const restify = require('restify')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const checkType = require('./utils');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 3333;

const db = require('knex')({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'toor',
    database: 'cnab',
  },
});

app.listen(PORT);

app.get('/shops', (req, res) => {
  db('shops')
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/remessas', (req, res) => {
  db('remessas')
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/remessa/:taxId', (req, res) => {});

app.post('/remessas', (req, res) => {
  const body = req.body;
  if (body.length !== 0 && checkType(body) === 'array') {
    db('remessas').insert(body);
    res.json('ok');
  } else {
    res.json('body invalid, type array.');
  }
});
