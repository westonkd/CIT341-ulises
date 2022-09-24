const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllContacts = async (request, response) => {
  const result = await mongodb.getDb().db('cse341').collection("contacts").find().toArray().then((result) => {
    response.setHeader('Content-Type', 'application/json');
    response.status(200).json(result);
  });
};

const getContactById = async (request, response) => {
  const contactId = new ObjectId(request.params.id);

  const result = await mongodb.getDb().db('cse341').collection("contacts").find({ _id: contactId }).toArray().then((result) => {
    response.setHeader('Content-Type', 'application/json');
    response.status(200).json(result);
  });
};


// Exports
module.exports = { getAllContacts, getContactById };