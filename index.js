//@TS-Check
const express = require('express');
const app = express();
app.use(express.json());
const PORT = 8080;
const mongodb = require('./db/connect');

app.use('/', require('./routes'));

// Main
mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT);
    console.log(`Connected to port: ${PORT}`);
  }
});