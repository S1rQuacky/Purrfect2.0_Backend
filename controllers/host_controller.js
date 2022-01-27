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
router.get('/:id', async (req, res) => {
    try {
        res.json(await Host.findById(req.params.id, req.body));
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


