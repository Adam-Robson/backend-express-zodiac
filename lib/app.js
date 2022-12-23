const express = require('express');

const app = express();

app.use('/zodiac', require('./controllers/zodiac'));

module.exports = app;
