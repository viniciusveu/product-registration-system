require('dotenv').config();
require('ejs');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.set('view engine', 'ejs');

const routes = require('./api/routes/routes');
app.use('/', routes);

module.exports = app;