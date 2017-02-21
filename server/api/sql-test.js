const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const parser = require('body-parser');
const jsonParser = parser.json();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'reactjs'
});
connection.connect();

router.post('/', jsonParser, function(req, res) {
    let str = "select * from test";
    if (req.body.value) {
        str += " where id = " + connection.escape(req.body.value);
    }
    connection.query(str, function(err, rows, fields) {
        if (err) {
            console.error('Error: ' + err);
        } else {
            res.json(rows);
        }
    });
});
router.post('/:id', function(req, res) {
    console.log(req.body);
    connection.query("select * from test where id = " + connection.escape(req.params.id), function(err, rows, fields) {
        if (err) {
            console.error('Error: ' + err);
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;