const express = require('express');
const router = express.Router();
const mysql = require('mysql');

//const parser = require('body-parser');
//const jsonParser = parser.json();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'reactjs'
});
connection.connect();

router.post('/:id', function(req, res) {
    let q = "select * from customers";
    if (req.params.id != 'all') {
        q += ' where id = ' + connection.escape(req.params.id);
    }
    connection.query(q, function(err, rows, fields) {
        if (err) {
            console.error('Error: ' + err);
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;