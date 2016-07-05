//what is mongoose? 
//elegant mongodb object modeling for node.js
var mongoose = require('mongoose');

//
var Schema = mongoose.Schema;

var todoSchema = new Schema({
  username: String,
  todo: String,
  isDone: Boolean,
  hasAttachment: Boolean
});

//compiling schema into a model, A model is a class with which we construct documents
var Todos = mongoose.model('Todos', todoSchema);

module.exports = Todos;