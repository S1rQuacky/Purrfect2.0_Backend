const express = require('express');
const Locations = require('../models/locationinfo')
const router = express.Router();

//consumer 
//get locations (get by type, browse or search) - host can view their locations
router.get("/", async(req, res) => {
    try {
        res.json(await Locations.find({}))
    } catch (error) {
        res.status(400).json({error})
    }
});
//add location (host only with acct)
router.post('/', async(req, res) => {
    try{
        res.json(await Locations.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});

//update location (host only with acct)
router.put('/:id', async (req, res) => {
    try {
        res.json(
            await Locations.findByIdAndUpdate(req.params.id, req.body, { new: true})
        );
    } catch (error) {
        res.status(400).json({error})
    }
});

//get by id (show), should work for both host and consumer. Consumer read only, should show host info, host should not show host info
router.get('/:id', async (req, res) => {
    try {
        res.json(await Locations.findById(req.params.id, req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});

//delete a location (host only with acct)
router.delete('/:id', async (req, res) => {
    try {
        res.json(await Locations.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(400).json({error})
    }
});

module.exports = router;