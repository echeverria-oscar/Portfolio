// console.log("my routes work")

var path = require('path');
var contacts = require("./../controllers/project-controller.js")

module.exports = function(app){

  app.post('/contact', contacts.send);

}
