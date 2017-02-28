const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const parser = require('body-parser');
const jsonParser = parser.json();

router.get('/', jsonParser, function(req, res) {
    // Uncomment to fetch data from mysql server
    /*const connection = req.app.get('_store').mysql;
    let str = "select * from test";
    connection.query(str, function(err, rows, fields) {
        if (err) {
            console.error('Error: ' + err);
        } else {
            res.json(rows);
        }
    });*/
    res.json([
        {
            id: 1,
            name: 'name_1'
        },
        {
            id: 2,
            name: 'name_2'
        }
    ]);
});
router.get('/:id', function(req, res) {
    // Uncomment to fetch data from mysql server
    /*const connection = req.app.get('_store').mysql;
    connection.query("select * from test where id = " + connection.escape(req.params.id), function(err, rows, fields) {
        if (err) {
            console.error('Error: ' + err);
        } else {
            res.json(rows[0]);
        }
    });*/
    res.json(
        {
            id: req.params.id,
            name: 'name_' + req.params.id
        }
    );
});

module.exports = router;