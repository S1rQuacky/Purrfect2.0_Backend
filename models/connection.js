// /////////////////////
// //Import Dependencies
// /////////////////////
// require("dotenv").config(); //get .env variables 
// const mongoose = require("mongoose");//import mongoose

// ////////////////////////////////
// //Establish Database Connection
// ////////////////////////////////
// //Setup inputs for the connect function
// mongoose.connect(process.env.DATABASE_URL, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
// });

// //Establish Connection 
// mongoose.connect(DATABASE_URL)

// //Connection Events
// mongoose.connection
//     .on("open", () => console.log("Your are connected to mongoose"))
//     .on("close", () => console.log("Your are disconnected from mongoose"))
//     .on("error", (error) => console.log(error));  

// ////////////////////////////////
// //Export the Connected Mongoose
// ////////////////////////////////
// module.exports = mongoose