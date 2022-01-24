//import dependencies 
///////////////////////
// get .env variables
require("dotenv").config();
// pull PORT from .env, give default value of 3000
const { PORT = 3000, DATABASE_URL } = process.env;
// import express
const express = require("express");
// create application object
const app = express();
// import mongoose
const mongoose = require("mongoose");
// import middlware
const cors = require("cors");
const morgan = require("morgan");

const hostRoute = require("./controllers/host_controller");
const homeRoute = require("./controllers/home");
const hostAuth = require('./controllers/hostauth_controller');
const locationRoute = require('./controllers/locations_controller');
const purrs = require('./controllers/pets_controller');
const resRoute = require('./controllers/reservation_controller');
const userRoute = require('./controllers/user_controller');
const userAuth = require('./controllers/userauth_controller');

//Database connection
//////////////////////
mongoose.connect(DATABASE_URL,{
    useUnifiedTopology:true,
    useNewUrlParser: true,
});

//connection events
mongoose.connection
    .on("open", () => console.log("Your are connected to mongoose"))
    .on("close", () => console.log("Your are disconnected from mongoose"))
    .on("error", (error) => console.log(error));


//////////////////
//Models
//////////////////

//create schema, do I create all my schemas in one?
//create model


///////////////////////
//Middleware Function 
///////////////////////
// const middleware = (app) => {
//Middleware
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodies

//Middleware Routes
app.use('/', homeRoute);
app.use('/host', hostRoute);
app.use('/hostlogin', hostAuth);
app.use('/locations', locationRoute);
app.use('/pets', purrs);
app.use('/reserve', resRoute);
app.use('/user', userRoute);
app.use('/login', userAuth);

////////////////
//Routes
////////////////
// Test Route
// app.get("/", (req, res) => {
//     res.send("Hello World")
// });

//Index routes


///////////////
//Listener
///////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));