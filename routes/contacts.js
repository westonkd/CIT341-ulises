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

var corsOptions = {
    origin: 'https://https://cse341-ulises.onrender.com/app/contacts/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
 

// Main
router.get('/', cors(corsOptions), getAllContacts);

router.get('/:id', getContactById);

router.post('/', createContact)

router.put('/:id', updateContact);

router.delete('/:id', deleteContact);

// Exports
module.exports = router;