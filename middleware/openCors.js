const cors = require("cors");

var corsOptions = {
  origin: "https://https://cse341-ulises.onrender.com/api-docs",
};

module.exports = cors(corsOptions);