const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

module.exports = server;