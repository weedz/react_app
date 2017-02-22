const express = require('express');
const path = require('path');
const app = express();
const corser = require('corser');
const proxy = require('proxy-middleware');
const url = require('url');

const API = require('../server/api');

app.use(express.static(path.resolve(__dirname, '..','build')));
app.use(corser.create());

app.use('/api', API);

app.use('/*', proxy('http://localhost:8081/assets'));

/*app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});*/

module.exports = app;