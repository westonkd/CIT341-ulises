
const express = require('express');
const router = express.Router();

// Main
router.use('/api/contacts', require('./contacts'));

module.exports = router;