const express = require('express');
const Users = require('../models/userinfo');
const router = express.Router();

//consumer 
//get user account (once signed in, click button MyAccount)
router.get("/", async(req, res) => {
    try {
        res.json(await Users.find({}))
    } catch (error) {
        res.status(400).json({error})
    }
});
//add user account (Signup button)
router.post('/', async(req, res) => {
    try{
        res.json(await Users.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});

//update user account (edit name, number address and pets )
router.put('/:id', async (req, res) => {
    try {
        res.json(
            await Users.findByIdAndUpdate(req.params.id, req.body, { new: true})
        );
    } catch (error) {
        res.status(400).json({error})
    }
});


//get by id (show)view user account
router.get('/:email', (req, res) => {
    try {
        Users.find({email: req.params.email}, (err, user) => {
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
        });
    } catch (error) {
        res.status(400).json(error);
    }
});

//delete account 
router.delete('/:id', async (req, res) => {
    try {
        res.json(await Users.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(400).json({error})
    }
});

module.exports = router;

