const express = require('express');
const { registerUser, login ,logout }  = require('../controlers/usercontroler');
const router = express.Router();

// Define routes for user registration and login
router.route('/register').post(registerUser);
router.route('/login').post(login);
router.route('/logout').get(logout);

module.exports = router;
