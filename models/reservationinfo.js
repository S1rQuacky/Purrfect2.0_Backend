const mongoose = require('mongoose');

///////////////
//Notes
///////////////
// (resRoute) reservation_controller, route: /reserve

//////////////////////
//Models
//////////////////////
const reservationSchema = new mongoose.Schema({
    customer_id: String,
    pet_id: [String],
    location_id: String,
    start_date: Date,
    end_date: Date,
    requests: String
})

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation