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
    origin: 'https://cse341-ulises.onrender.com/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
 

// Main
router.get('/', cors(corsOptions), getAllContacts);

router.get('/:id',cors(corsOptions), getContactById);

router.post('/',cors(corsOptions), createContact)

router.put('/:id',cors(corsOptions), updateContact);

router.delete('/:id',cors(corsOptions), deleteContact);

// Exports
module.exports = router;