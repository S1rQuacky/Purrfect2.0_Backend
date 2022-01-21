const express = require('express');
const router = express.Router();

//consumer 
router.get("/", (req, res) => {
    res.send("Consumer Auth Controller");
});

module.exports = router;