//@TS-Check
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllContacts = async (req, res) => {
  const result = await mongodb.getDb().db('cse341').collection("contacts").find().toArray().then((result) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  });
};

const getContactById = async (req, res) => {
  const contactId = new ObjectId(req.params.id);

  const result = await mongodb.getDb().db('cse341').collection("contacts").find({ _id: contactId }).toArray().then((result) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  });
};

// Exports
module.exports = { getAllContacts, getContactById };