const request = require('supertest');
const app = require('../lib/app');
const { signs } = require('../lib/zodiacdata');

describe('zodiac routes', () => {
  it('/zodiac should return a list of the 12 signs', async () => {
    const res = await request(app).get('/zodiac');
    const expected = signs.map((sign) => {
      return { id: sign.id, name: sign.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/signs/:id should return sign detail', async () => {
    const res = await request(app).get(`/zodiac/:${sign.id}`);
    const sign = {
      id: sign.id,
      name: sign.name,
      dates: sign.dates,
      symbol: sign.symbol,
    };
    expect(res.body).toEqual(sign);
  });
});
