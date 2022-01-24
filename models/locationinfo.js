const mongoose = require('mongoose');

/////////////
//Notes
/////////////
//(locationRoute) locations_controller, route: /locations
//tag: Tree, Ground, Outdoor, Special
///////////////
//Models
///////////////
const locationSchema = new mongoose.Schema({
    location_name: String,
    street: String,
    city: String,
    state: String,
    zip_code: String,
    phone_number: String,
    email: String,
    description: String,
    img: [String],
    tag: [String]
})

const Locations = mongoose.model('Locations', locationSchema);

module.exports = Locations