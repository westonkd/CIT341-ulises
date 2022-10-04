const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'cse341',
    description: 'Description',
  },
  host: 'https://cit341.onrender.com',
  schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
