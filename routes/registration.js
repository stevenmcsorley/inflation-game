// routes/registration.js
const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/registrationController');

router.post('/', (req, res, db) => registerUser(req, res, db));

module.exports = router;
