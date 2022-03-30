const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the apis home page')
})

router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    user.save((err, registeredUser) => err ? console.log(err): console.log(registeredUser) );
})

module.exports = router;