const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: {type: String, required: true},
  text:{type: String, required: true},
  date: { type: Date, required: true, default: Date.now },
  creator: {type: String, required: true},
  type: {type: String, required: true}
});

const Posts = mongoose.model('Posts', postSchema);

module.exports = Posts;