const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const peopleRouter = require('../people/peopleRouter');

const server = express();
//middleware
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/people', peopleRouter);

server.get('/', (req, res) => {
  res.status(200).json({ API: 'running' });
});

module.exports = server;
