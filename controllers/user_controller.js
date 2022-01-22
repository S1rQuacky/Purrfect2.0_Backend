const express = require('express');
const Users = require('../models/userinfo');
const router = express.Router();

//consumer 
//get account
router.get("/", async(req, res) => {
    try {
        res.json(await Users.find({}))
    } catch (error) {
        res.status(400).json({error})
    }
});
//add account
router.post('/', async(req, res) => {
    try{
        res.json(await Users.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});

//update account 
router.put('/:id', async (req, res) => {
    try {
        res.json(
            await Users.findByIdAndUpdate(req.params.id, req.body, { new: true})
        );
    } catch (error) {
        res.status(400).json({error})
    }
});

//show user account
router.get('/:id', async (req, res) => {
    try {
        res.json(await Users.findById(req.params.id, req.body));
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

