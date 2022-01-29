const express = require('express');
const Host = require('../models/hostinfo')
const router = express.Router();

//consumer 
//get host account,once signed in, immediate page shows your details
router.get("/", async(req, res) => {
    try {
        res.json(await Host.find({}))
    } catch (error) {
        res.status(400).json({error})
    }
});
//add host account, join as a host (sign up button after Hosts button is clicked )
router.post('/', async(req, res) => {
    try{
        res.json(await Host.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});

//update your host account 
router.put('/:id', async (req, res) => {
    try {
        res.json(
            await Host.findByIdAndUpdate(req.params.id, req.body, { new: true})
        );
    } catch (error) {
        res.status(400).json({error})
    }
});

//show host account (not sure if this is needed as main host page after sign in will be host information)
router.get('/:email', (req, res) => {
    try {
        Host.find({email: req.params.email}, (err, user) => {
            if (!user) {
                res.send("User not found")
            } else {
                const hidePwd = {
                    id: user[0]._id,
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
        });
    } catch (error) {
        res.status(400).json(error);
    }
});

//delete account 
router.delete('/:id', async (req, res) => {
    try {
        res.json(await Host.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(400).json({error})
    }
});

module.exports = router;


