const { Router } = require('express');
const { signs } = require('../lib/zodiac-data');

module.exports = Router()
  .get('/', (req, res) => {
    const match = signs.map((sign) => {
      return { id: sign.id, name: sign.name };
    });
    res.json(match);
  })
  .get('/:id', (req, res) => {
    const match = signs.filter((sign) => {
      sign.id === req.params.id;
    });
    res.json({ match });
  });
