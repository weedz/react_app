const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const parser = require('body-parser');
const jsonParser = parser.json();

router.post('/', jsonParser, function(req, res) {
    // Uncomment to fetch data from mysql server
    /*const connection = req.app.get('_store').mysql;
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
    });*/
    if (req.body.value) {
        res.json([
            {
                id: req.body.value,
                name: 'name_' + req.body.value
            }
        ]);
    } else {
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
    }
});
router.post('/:id', function(req, res) {
    // Uncomment to fetch data from mysql server
    /*const connection = req.app.get('_store').mysql;
    connection.query("select * from test where id = " + connection.escape(req.params.id), function(err, rows, fields) {
        if (err) {
            console.error('Error: ' + err);
        } else {
            res.json(rows);
        }
    });*/
});

module.exports = router;