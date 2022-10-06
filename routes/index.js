//@TS-Check
const express = require('express');
const router = express.Router();
const openCors = require("../middleware/openCors");

// Main
router.use([openCors, express.json()]);
router.use('/api-docs', require('./swagger'));
router.use('/app/contacts', require('./contacts'));

module.exports = router;

