const { Router } = require('express');
const contact = require('../controllers/contactcontroller')

const app = Router();
app.get('/contact',contact);
module.exports = app;