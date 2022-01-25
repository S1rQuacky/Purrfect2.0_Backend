const mongoose = require('mongoose');

//////////////////
//Notes
//////////////
//(userAuth) user_auth, route: /login

///////////
//Models
///////////
const userauthSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

const Userauth = mongoose.model('Userauth', userauthSchema);

module.exports = Userauth