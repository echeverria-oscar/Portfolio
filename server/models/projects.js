console.log('ProductSchema')
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ContactSchema = new mongoose.Schema({
  title: {type: String},
  link: {type: String}
});


mongoose.model('Contact', ContactSchema);
