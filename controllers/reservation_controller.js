const express = require('express');
const Reservation = require('../models/reservationinfo')
const router = express.Router();

//consumer 
//get your reservations (once user is logged in)
router.get("/", async(req, res) => {
    try {
        res.json(await Reservation.find({}))
    } catch (error) {
        res.status(400).json({error})
    }
});
//create a reservation and have it added to your acct, location table and viewable by host(possibly remove from /get locations or remove reserve button)
router.post('/', async(req, res) => {
    try{
        res.json(await Reservation.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});

//update a reservation (update dates or pet staying)
router.put('/:id', async (req, res) => {
    try {
        res.json(
            await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true})
        );
    } catch (error) {
        res.status(400).json({error})
    }
});

//get by id(show), view your reservation details from your account
router.get('/:id', async (req, res) => {
    try {
        res.json(await Reservation.findById(req.params.id, req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});

//delete cancel your reservation 
router.delete('/:id', async (req, res) => {
    try {
        res.json(await Reservation.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(400).json({error})
    }
});

module.exports = router;