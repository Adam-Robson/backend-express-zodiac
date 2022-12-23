const { Router } = require('express');
const { zodiac } = require('../zodiac-data');

module.exports = Router()
  .get('/horoscope/:name', (req, res) => {
    const match = zodiac.find((sign) => {
      return sign.name === req.params.name;
    });
    const result = { name: match.name, horoscope: match.horoscope };
    res.json(result);
  })
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
