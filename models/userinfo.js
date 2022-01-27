const mongoose = require('mongoose');

///////////////////
//Models
///////////////////
const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: {type: String, required: true, unique: true},
    pwd: {type: String, required: true},
    phone_number: String,
    pet_id: [String],
    img: String

})

const Users = mongoose.model('Users', userSchema);

module.exports = Users;