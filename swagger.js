const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'cse341',
    description: 'Description',
  },
  host: 'https://cse341-ulises.onrender.com',
  schemes: ['https'],
};

const outputFile = './routes/swagger.json';
const endpointsFiles = ['./index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
