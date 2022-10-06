//@TS-Check
var cors = require('cors')
const express = require('express');
const router = express.Router();

const {
    getAllContacts, 
    getContactById, 
    createContact, 
    updateContact, 
    deleteContact
} = require('../controllers/contacts.controllers');

// Main
router.get('/', cors(), getAllContacts);

router.get('/:id',cors(), getContactById);

router.post('/',cors(), createContact)

router.put('/:id',cors(), updateContact);

router.delete('/:id',cors(), deleteContact);

// Exports
module.exports = router;