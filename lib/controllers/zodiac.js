const { Router } = require('express');
const { zodiac } = require('../zodiac-data');

module.exports = Router()
  .get('/:id', (req, res) => {
    const match = zodiac.find((sign) => {
      return sign.id === req.params.id;
    });
    res.json(match);
  })
  .get('/', (req, res) => {
    const match = zodiac.map((sign) => {
      return { id: sign.id, name: sign.name };
    });
    res.json(match);
  });
