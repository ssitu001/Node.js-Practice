var mongoose = require('mongoose');

//Schema
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

module.exports = mongoose.model('campground', campgroundSchema);