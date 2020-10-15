const db = require('../data/dbConfig');

module.exports = {
  getAll,
  remove,
};

function getAll() {
  return db('people');
}

function remove(id) {
  return db('people').where({ id }).del();
}
