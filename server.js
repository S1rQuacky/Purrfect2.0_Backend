//import dependencies 


const app = express();//create application object

const { PORT = 3000, DATABASE_URL } = process.env; //pull PORT from .env, give default value of 3000

//Database connection
//////////////////////


//////////////////
//Models
//////////////////

//create schema, do I create all my schemas in one?
//create model

//Middleware
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodies
app.use(methodOverride("_method")) // override for put and delete requests from forms

////////////////
//Routes
////////////////
// Test Route
app.get("/", (req, res) => {
    res.send("Hello World")
});

//Index routes


///////////////
//Listener
///////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));