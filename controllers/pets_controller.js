const express = require('express');
const Pets = require('../models/petinfo')
const router = express.Router();

//consumer 
//get list of pets associated with user id
router.get("/", async(req, res) => {
    try {
        res.json(await Pets.find({}))
    } catch (error) {
        res.status(400).json({error})
    }
});
//add pet to account of user
router.post('/', async(req, res) => {
    try{
        res.json(await Pets.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});

//update pet information
router.put('/:id', async (req, res) => {
    try {
        res.json(
            await Pets.findByIdAndUpdate(req.params.id, req.body, { new: true})
        );
    } catch (error) {
        res.status(400).json({error})
    }
});

//get by id (show) pet information when selected from user account
router.get('/:id', async (req, res) => {
    try {
        res.json(await Pets.findById(req.params.id, req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});

//delete pet from account 
router.delete('/:id', async (req, res) => {
    try {
        res.json(await Pets.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(400).json({error})
    }
});

module.exports = router;