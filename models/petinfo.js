const mongoose = require('mongoose');

///////////////
//Notes
///////////////
// (purrs) pets_controller, route: /pets

////////////////
//Models
////////////////
const petSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    age: String,
    special_needs: String,
    img: [String]
});

const Pets = mongoose.model('Pets', petSchema);

module.exports = Pets