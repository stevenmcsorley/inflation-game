// routes/login.js
const express = require('express');
const router = express.Router();
const { loginUser } = require('../controllers/loginController');

router.post('/', (req, res, db) => loginUser(req, res, db));

module.exports = router;
