const cors = require("cors");

var corsOptions = {
  origin: "https://cse341-ulises.onrender.com/",
};

module.exports = cors(corsOptions);