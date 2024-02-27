const cors = require('cors');
const express = require('express');

const xsxt = require('./xsxt.js');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/', (req, res) => {
  const { url, data, a1 } = req.body;
  res.json(xsxt(url, data || undefined, a1));
});

app.all('*', (req, res) => {
  res.status(404).send('Not Found');
});

app.listen(8080, '0.0.0.0');
