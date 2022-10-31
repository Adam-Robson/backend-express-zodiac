const request = require('supertest');
const app = require('../lib/app');

describe('example test - you should probably update me', () => {
  it('home route should return hello world', async () => {
    const resp = await request(app).get('/');
    expect(resp.text).toEqual('hello world!');
  });
});
