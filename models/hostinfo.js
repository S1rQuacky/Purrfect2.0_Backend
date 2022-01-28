const mongoose = require('mongoose');

//////////////////
//Notes
/////////////////
//(hostRoute) hostinfo, route: /host

/////////////
//Models
/////////////
const hostSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    location_id: [String],
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    phone_number: String,
    description: String,
    img: String,
    role: String
})

const Host = mongoose.model('Host', hostSchema);

module.exports = Host