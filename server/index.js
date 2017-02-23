const express = require('express');
const path = require('path');
const app = require('./app');
const http = require('http');

app.use(express.static(path.join(__dirname, '..','build')));

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

const PORT = process.env.PORT || 9000;
http.createServer(app).listen(PORT, () => {
    console.info('App listening on port ' + PORT);
});