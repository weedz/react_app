const express = require('express');
const path = require('path');
const app = express();
const proxy = require('proxy-middleware');

const API = require('../server/api');

app.use('/api', API);

app.use('/*', proxy('http://localhost:8081/assets'));

module.exports = app;