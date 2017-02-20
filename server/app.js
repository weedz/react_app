const express = require('express');
const path = require('path');
const app = express();
const corser = require('corser');

const API = require('./api');

app.use(express.static(path.resolve(__dirname, '..','build')));
app.use(corser.create());

app.use('/api', API);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;