const express = require('express');
const router = express.Router();
const Userauth = require('../models/user_auth');
const bcrypt = require('bcryptjs');


// router.post("/", async (req, res) => {
//     req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt (10))
//         Userauth.create(req.body, (err, user) => {
//             res.redirect("/")
//         })
// })

//consumer 
router.get("/", (req, res) => {
    const {username, password} = req.body
    Userauth.findOne({username}, (err, user) => {
        if (!user) {
            res.send("Account does not exist")
        } else {
            const result = bcrypt.compareSync(password, user.password)
            if (result) {
                req.session.username = username
                req.session.loggedIn = true
                res.redirect("/locations")
            } else {
                res.send("Wrong password")
            }
        }
    })
});

router.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        res.redirect("/")
    })
})

module.exports = router;