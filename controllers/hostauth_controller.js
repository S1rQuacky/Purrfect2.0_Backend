const express = require('express');
const router = express.Router();

//Host login
router.get("/", (req, res) => {
    res.send("Host Login");
});

module.exports = router;