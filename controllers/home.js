////////////////////////
//Import Dependencies
////////////////////////
const express = require("express");


///////////////////////////
//Create Route
///////////////////////////
const router = express.Router()

///////////////////////////
//Routes
///////////////////////////
// Test Route
router.get("/", (req, res) => {
    res.send("Home");
});

///////////////////////////
//Export the Router
///////////////////////////
module.exports = router