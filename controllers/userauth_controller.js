const express = require('express');
const router = express.Router();
const Users = require('../models/userinfo');
const bcrypt = require('bcryptjs');


router.post("/",  (req, res) => {
    try {
        console.log(JSON.stringify(req.body))
         Users.find({email: req.body.email, pwd: req.body.pwd}, (err, user) => {
            if (!user) {
                res.send("User not found")
            } else {
                const hidePwd = {
                    first_name: user[0].first_name,
                    last_name: user[0].last_name,
                    email: user[0].email,
                    phone_number: user[0].phone_number,
                    pet_id: user[0].pet_id,
                    img: user[0].img,
                    role: user[0].role
                }
                
                res.json(hidePwd)
            }
            
            
        })
       
    } catch (error) {
        res.status(400).json(error)
    }
    
});

module.exports = router;