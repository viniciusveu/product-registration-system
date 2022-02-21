const mongoose = require('mongoose');

module.exports = mongoose
    .connect(
        `${process.env.DB_HOST}://${process.env.DB_USER}:${process.env.DB_PASS}@localhost:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin`,
        { useNewUrlParser: true },
    ).then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.log('Error connecting to MongoDB: ' + err);
    });