const express = require('express');
const router = express.Router();

router.post('/:id', function(req, res) {
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