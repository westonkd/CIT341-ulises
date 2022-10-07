//@TS-Check
const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

//-***********************************************************************************************

const getAllContacts = async (req, res) => {
  const result = await mongodb
    .getDb()
    .db("cs_341_projects")
    .collection("contacts")
    .find()
    .toArray()
    .then((result) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(result);
    });
};

//-***********************************************************************************************

const getContactById = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db("cs_341_projects")
    .collection("contacts")
    .find({ _id: contactId })
    .toArray()
    .then((result) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(result);
    });
};

//-***********************************************************************************************

const createContact = async (req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };
  const response = await mongodb
    .getDb()
    .db("cs_341_projects")
    .collection("contacts")
    .insertOne(contact);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res
      .status(500)
      .json(
        response.error || "Some error occurred while creating the contact."
      );
  }
};

//-***********************************************************************************************

const deleteContact = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const resPonder = 200;
  try {
    await mongodb
      .getDb()
      .db("cs_341_projects")
      .collection("contacts")
      .deleteOne({ _id: contactId }, true);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send;
  }
};

//-***********************************************************************************************

const updateContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };
  const response = await mongodb
    .getDb()
    .db("cs_341_projects")
    .collection("contacts")
    .replaceOne({ _id: userId }, contact);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(
        response.error || "Some error occurred while updating the contact."
      );
  }
};

// Exports
module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  deleteContact,
  updateContact,
};
