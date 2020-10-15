const router = require('express').Router();

const People = require('./peopleModel');

router.get('/', (req, res) => {
  People.getAll()
    .then((people) => {
      res.status(200).json(people);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
