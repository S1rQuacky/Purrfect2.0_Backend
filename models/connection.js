/////////////////////
//Import Dependencies
/////////////////////
require("dotenv").config(); //get .env variables 
const mongoose = require("mongoose");//import mongoose

////////////////////////////////
//Establish Database Connection
////////////////////////////////
//Establish connection 
mongoose.connect(DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
//Connection Events
mongoose.connection
    .on("open", () => console.log("Your are connected to mongoose"))
    .on("close", () => console.log("Your are disconnected from mongoose"))
    .on("error", (error) => console.log(error));  

////////////////////////////////
//Export the Connected Mongoose
////////////////////////////////
module.exports = mongoose