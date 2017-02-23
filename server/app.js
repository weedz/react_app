const express = require('express');
const app = express();
const API = require('./api');

app.use('/api', API);

module.exports = app;