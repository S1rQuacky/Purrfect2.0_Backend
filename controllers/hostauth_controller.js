const express = require('express');
const router = express.Router();
const Host = require('../models/hostinfo')
const bcrypt = require('bcryptjs');

router.post("/",  (req, res) => {
    try {
        console.log(JSON.stringify(req.body))
         Host.find({email: req.body.email, password: req.body.password}, (err, user) => {
            if (!user) {
                res.send("User not found")
            } else {
                const hidePwd = {
                    first_name: user[0].first_name,
                    last_name: user[0].last_name,
                    location_id: user[0].location_id,
                    email: user[0].email,
                    phone_number: user[0].phone_number,
                    description: user[0].description,
                    img: user[0].img,
                    role: user[0].role
                }
                
                res.json(hidePwd)
            }
            // console.log(await Host.find({email: req.body.email,password: req.body.password}))
            
        })
       
    } catch (error) {
        res.status(400).json(error)
    }
    
});



module.exports = router;


  