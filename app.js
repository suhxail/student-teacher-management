const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const route = require('./routes/route')

app.use(bodyParser.json());
app.use(cors());

app.use('/api',route)

module.exports = app;