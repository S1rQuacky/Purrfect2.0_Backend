// ///////////////////////////
// //Import Dependencies
// ///////////////////////////
// require("dotenv").config(); //load .env variables
// const express = require("express"); //import express
// const morgan = require("morgan"); 
// const cors = require("cors");
// const methodOverride = require("method-override");
// // const session = require('express-session')

// //////////////////////
// //Middleware Function
// //////////////////////
// const middleware = (app) => 
//     //Middleware
//     app.use(cors()); // to prevent cors errors, open access to all origins
//     app.use(morgan("dev")); // logging
//     app.use(express.json()); // parse json bodies
//     app.use(methodOverride("_method")) // override for put and delete requests from forms
//     app.use(express.static("public"))
//     app.use(session({
//         secret: process.env.SECRET,
//         store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
//         saveUninitialized: true,
//         resave: false,
//     }))
    

// module.exports=middleware