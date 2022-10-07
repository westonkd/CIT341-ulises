//@TS-Check
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
const PORT = process.env.PORT;
const mongodb = require("./db/connect");

app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use("/", require("./routes"));

// Main
mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT);
    console.log(`Connected to port: ${PORT}`);
  }
});
