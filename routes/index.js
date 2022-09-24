//@TS-Check
const express = require('express');
const router = express.Router();

// Main
router.use('/app/contacts', require('./contacts'));

module.exports = router;