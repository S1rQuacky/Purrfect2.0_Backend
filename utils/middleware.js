///////////////////////////
//Import Dependencies
///////////////////////////
require("dotenv").config(); //load .env variables
const express = require("express"); //import express
const morgan = require("morgan"); 
const cors = require("cors");
const methodOverride = require("method-override");