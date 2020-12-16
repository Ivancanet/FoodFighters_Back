const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
name: {type: String, required: true},
direction: {type: String, required: true},
poblation: {type: String, required: true},
state: {type: String, required: true},
country: {type: String, required: true}
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;