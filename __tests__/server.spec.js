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

  describe('Get /api/people', () => {
    it('Should return an array', () => {
      return supertest(server)
        .get('/api/people')
        .then((people) => {
          const isAnArray = Array.isArray(people.body);
          expect(isAnArray).toBe(true);
        });
    });
  });
});
