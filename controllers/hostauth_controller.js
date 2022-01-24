const express = require('express');
const router = express.Router();
const Hostauth = require('../models/hosting_auth');
const bcrypt = require('bcryptjs');

//Host login
router.get("/signup", (req, res) => {
    res.send("Host Login");
});

module.exports = router;