const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const winesSchema = new Schema({
  image: {type: String, required: true},
  name: {type: String, required: true},
  year: {type: String, required: true},
  origin: {type: String, required: true},
  grapeType: {type: String, required: true},
  wineType: {type:String, required: true},
  wineSensation: {type: String, required: true},
  cellar: {type: String},
  pvp: {type: String}

});

const Wines = mongoose.model('Wines', winesSchema);

module.exports = Wines;