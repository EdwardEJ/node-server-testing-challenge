const supertest = require('supertest');

const server = require('../api/server');

describe('server.js', () => {
  describe('Get /', () => {
    it('Should return 200 OK', () => {
      return supertest(server)
        .get('/')
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });
  });
});
