// const restify = require('restify')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const checkType = require('./utils');
const db = require('./database/knexfile');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 3333;

app.listen(PORT);

app.get('/shops', async (req, res) => {
  await db('shops')
    .then(data => {
      res.json([...data]);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/remessas', async (req, res) => {
  await db('remessas')
    .then(data => {
      res.json([...data]);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/remessa/:taxId', async (req, res) => {});

app.post('/remessas', async (req, res) => {
  const body = req.body;
  try {
    if (body.length !== 0 && checkType(body) === 'array') {
      await db('remessas').insert(body);
      res.json({
        error: false,
        success: true,
        message: 'shipment registered successfully',
      });
    } else {
      res.json({
        error: true,
        success: false,
        message: 'body invalid, type array',
      });
    }
  } catch (error) {
    res.json({
      error: true,
      success: false,
      message: 'Error, internal',
      debug: error,
    });
  }
});
