const express = require('express');
const router = express.Router();
const api_sql = require('./api/sql-test');
const api_customers = require('./api/customers');

router.use('/sql-test', api_sql);
router.use('/customers', api_customers);

module.exports = router;