const express = require('express');
const router = express.Router();
const Host = require('../models/hostinfo')
const bcrypt = require('bcryptjs');

router.post("/",  (req, res) => {
    try {
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
                    img: user[0].img
                }
                
                res.json(hidePwd)
            }
            // console.log(await Host.find({email: req.body.email,password: req.body.password}))
            
        })
       
    } catch (error) {
        res.status(400).json(error)
    }
    
});

//Host login
// router.get("/:email", (req, res) => {
//     const {email, password} = req.body
//     Host.findOne({email}, (err, user) => {
//         if (!user) {
//             res.send("User does not exist")
//         } else {
//             const result = bcrypt.compareSync(password, user.password)
//             if (result) {
//                 req.session.username = email
//                 req.session.loggedIn = true
//                 res.redirect("/locations")
//             } else {
//                 res.send("Wrong Password")
//             }
//         }
//     })
// });

// router.get("/hostlogout", (req, res) => {
//     req.session.destroy((err) => {
//         res.redirect("/")
//     })
// })

module.exports = router;


  // const reply = {
                //     first_name: user.first_name,
                //     last_name: user.last_name,
                //     location_id: user.location_id,
                //     email: user.email,
    
    
                // }
                // res.send(user)