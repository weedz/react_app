const express = require('express');
const path = require('path');
const app = express();
//const corser = require('corser');

const API = require('./api');
//app.use(corser.create());

app.use(express.static(path.join(__dirname, '..','build')));

app.use('/api', API);

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.info(`App listening on port ${PORT}`);
});