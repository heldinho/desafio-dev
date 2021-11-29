const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const shop = require('./controllers/shop.controller');
const remessa = require('./controllers/remessa.controller');
const remessaMiddleware = require('./middleware/remessa.middleware');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const PORT = 3333;

app.get('/shops', shop.getAllShops);

app.get('/remessas', remessa.getAllRemessas);

app.get(
  '/remessa/:taxId',
  remessaMiddleware.validTaxId,
  remessa.getRemessaByTaxid
);

app.post('/remessas', remessa.createRemessa);

// run server
app.listen(PORT);
