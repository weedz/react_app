const express = require('express');
const path = require('path');
const app = express();
const mysql = require('mysql');
const corser = require('corser');

app.use(express.static(path.resolve(__dirname, '..','build')));
//app.use(corser.create());

app.post('/api/sql-test', (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'reactjs'
    });
    connection.connect();

    connection.query("select * from test", function(err, rows, fields) {
        if (err) {
            console.error('Error: ' + err);
        } else {
            res.json(rows);
        }
    });

});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;