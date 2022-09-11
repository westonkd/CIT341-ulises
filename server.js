const express = require('express');
const app = express();
const PORT = 8080;
const controllers = require('./controllers/index')
const routes = require('./routes/index')

const controller = controllers[routes]
app.get(routes,controller)

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
} )
