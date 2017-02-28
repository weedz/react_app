const express = require('express');
const router = express.Router();
const mysql = require('mysql');

//const parser = require('body-parser');
//const jsonParser = parser.json();

router.get('/:id', function(req, res) {
    // Uncomment to fetch data from myqsl server
    /*const connection = req.app.get('_store').mysql;
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
    });*/
    res.json([
        {
            id: 1,
            firstname: 'name_1',
            lastname: 'lastname_1'
        },
        {
            id: 2,
            firstname: 'name_2',
            lastname: 'lastname_2'
        }
    ]);
});

module.exports = router;