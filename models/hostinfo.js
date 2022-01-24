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
    email: String,
    pwd: String,
    phone_number: String,
    description: String,
    img: String
})

const Host = mongoose.model('Host', hostSchema);

module.exports = Host