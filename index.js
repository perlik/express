const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { port } = require('./config');

const app = express();

// db
require('./db/mongoose');

// parser
app.use(bodyParser.json());

// cors
app.use(cors());

// routes
const apiRouter = require('./routes/api');
app.use('/api', apiRouter);

// server
app.listen(port, () => {
  console.log('listening');
});
