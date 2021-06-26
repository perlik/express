const express = require('express');
const { port } = require('./config');
require('./db/mongoose');

const app = express();

//routes
const apiRouter = require('./routes/api');
app.use('/', apiRouter);

// server
app.listen(port, () => {
  console.log('listening');
});
