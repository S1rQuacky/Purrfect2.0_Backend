const express = require('express');
const router = express.Router();

//Locations as seen by the consumer
router.get("/getaway", (req, res) => {
    res.send("User Getaway");
});

module.exports = router;