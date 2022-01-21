const express = require('express');
const Users = require('../models/userinfo');
const router = express.Router();

//consumer 
router.get("/", async(req, res) => {
    try {
        res.json(await Users.find({}))
    } catch (error) {
        res.status(400).json({error})
    }
});

router.post('/', async(req, res) => {
    try{
        res.json(await Users.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;

