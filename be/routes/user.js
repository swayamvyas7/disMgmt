const express = require('express');
const router = express.Router();
const User = require('../models/user'); 
const {
    handleLogin,
    handleSignup,
} = require('../controller/user')

router.post('/signup', handleSignup);
router.post('/user', handleLogin);

module.exports = router;