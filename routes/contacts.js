//@TS-Check

const express = require('express');
const router = express.Router();

const {getAllContacts, getContactById} = require('../controllers/contacts.controllers');

// Main
router.get('/', getAllContacts);

router.get('/:id', getContactById);

// Exports
module.exports = router;