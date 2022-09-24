const express = require('express');
const router = express.Router();

const { getAll, getSingle } = require('../contacts');

router.get('/', getAll);

router.get('/:id', getSingle);

router.get('/oid/:oid', getSingle);

module.exports = router;