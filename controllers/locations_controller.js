const express = require('express');
const router = express.Router();

//locations as seen by the host
router.get("/", (req, res) => {
    res.send("Host Locations");
});

module.exports = router;