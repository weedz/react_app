const express = require('express');
const router = express.Router();

router.use('/sql-test', require('./api/sql-test'));
router.use('/customers', require('./api/customers'));

module.exports = router;