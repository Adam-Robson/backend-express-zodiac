const express = require('express');
const { signs } = require('../lib/zodiac-data');
const app = express();
module.exports = app;

app.get('/zodiac', (req, res) => {
  const match = signs.map((sign) => {
    return { id: sign.id, name: sign.name };
  });
  res.json(match);
});
