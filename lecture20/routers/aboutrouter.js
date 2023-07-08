const { Router } = require('express');
const about = require('../controllers/aboutcontroller')

const app = Router();
app.get('/about', about);
module.exports = app;