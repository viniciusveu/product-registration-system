require('dotenv').config();
require('./database/config'); // Connect to MongoDB

const express = require('express');

const app = express();

app.use(express.json());
app.set('view engine', 'ejs');

const routes = require('./api/routes/routes');
app.use('/api/', routes);

module.exports = app;