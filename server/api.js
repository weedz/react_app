const express = require('express');
const router = express.Router();
const api_sql = require('./api/sql-test');

router.use('/sql-test', api_sql);

module.exports = router;