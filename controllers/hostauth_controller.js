const express = require('express');
const router = express.Router();
const Hostauth = require('../models/hosting_auth');
const bcrypt = require('bcryptjs');

//Host login
router.get("/", (req, res) => {
    const {username, password} = req.body
    Hostauth.findOne({username}, (err, user) => {
        if (!user) {
            res.send("User does not exist")
        } else {
            const result = bcrypt.compareSync(password, user.password)
            if (result) {
                req.session.username = username
                req.session.loggedIn = true
                res.redirect("/locations")
            } else {
                res.send("Wrong Password")
            }
        }
    })
});

router.get("/hostlogout", (req, res) => {
    req.session.destroy((err) => {
        res.redirect("/")
    })
})

module.exports = router;