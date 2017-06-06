const express = require('express');
const router = express.Router();

const parser = require('body-parser');
const jsonParser = parser.json();

router.post('/', jsonParser, function(req, res) {
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

});

module.exports = router;