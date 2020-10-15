exports.seed = function (knex) {
  // Deletes ALL existing entries and resets ids
  return knex('people')
    .truncate()
    .then(function () {
      return knex('people').insert([{ name: 'ed' }, { name: 'sam' }]);
    });
};
