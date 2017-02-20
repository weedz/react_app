const express = require('express');
const router = express.Router();
const mysql = require('mysql');

router.post('/', function(req, res) {
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

module.exports = router;