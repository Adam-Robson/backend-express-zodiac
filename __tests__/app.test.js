const request = require('supertest');
const app = require('../lib/app');

const { zodiac } = require('../lib/zodiac-data');

describe('zodiac routes', () => {
  it('/zodiac should return a list of the 12 signs', async () => {
    const res = await request(app).get('/zodiac');
    const expected = zodiac.map((sign) => {
      return { id: sign.id, name: sign.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/zodiac/:id should return zodiac detail', async () => {
    const res = await request(app).get('/zodiac/1');
    const sign = {
      id: '1',
      name: 'aquarius',
      dates: 'Jan 21 - Feb 19',
      symbol: 'Water Bearer',
      horoscope: {
        '2022.09.01': 'Going for your major life goals could be a compelling option. As productive as that would be, you may worry that your progress is distancing you from your peers. If the unspoken tension gets to be too much, clearing the air isn\'t a bad idea.You\'re equipped to express yourself in a way that clarifies your motivations as something positive for yourself, not as a slam against anyone else. While bluntly stating the truth can feel awkward, it usually beats stewing in silence!'
      }
    };
    expect(res.body).toEqual(sign);
  });

  it('/zodiac/horoscope/:name should return zodiac sign\'s horoscope', async () => {
    const res = await request(app).get('/zodiac/horoscope/aquarius');
    const sign = {
      name: 'aquarius',
      horoscope: {
        '2022.09.01': 'Going for your major life goals could be a compelling option. As productive as that would be, you may worry that your progress is distancing you from your peers. If the unspoken tension gets to be too much, clearing the air isn\'t a bad idea.You\'re equipped to express yourself in a way that clarifies your motivations as something positive for yourself, not as a slam against anyone else. While bluntly stating the truth can feel awkward, it usually beats stewing in silence!'
      }
    };
    expect(res.body).toStrictEqual(sign);
  });
});
