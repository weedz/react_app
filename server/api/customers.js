const express = require('express');
const router = express.Router();
const mysql = require('mysql');

//const parser = require('body-parser');
//const jsonParser = parser.json();

function connect() {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'reactjs'
    });
    connection.connect();
    return connection;
}

router.post('/:id', function(req, res) {
    const connection = connect();
    let str = "select * from customers";
    if (req.params.id != 'all') {
        str += ' where id = ' + connection.escape(req.params.id);
    }
    connection.query(str, function(err, rows, fields) {
        if (err) {
            console.error('Error: ' + err);
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;