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

var whitelist = ['https://cse341-ulises.onrender.com/']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
 

// Main
router.get('/', cors(corsOptions), getAllContacts);

router.get('/:id',cors(corsOptions), getContactById);

router.post('/',cors(corsOptions), createContact)

router.put('/:id',cors(corsOptions), updateContact);

router.delete('/:id',cors(corsOptions), deleteContact);

// Exports
module.exports = router;