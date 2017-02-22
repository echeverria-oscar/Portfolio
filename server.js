var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var nodemailer = require("nodemailer");
var path = require('path');
var session = require('express-session');



var sessionConfig = {
     secret:'CookieMonster', // Secret name for decoding secret and such
     resave:false, // Don't resave session if no changes were made
     saveUninitialized: true, // Don't save session if there was nothing initialized
     name:'myCookie', // Sets a custom cookie name
     cookie: {
      secure: false, // This need to be true, but only on HTTPS
      httpOnly:false, // Forces cookies to only be used over http
      maxAge: 3600000
 }
}


// app.use( express.static( path.join( root, 'bower_components' )));
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'bower_components')));
require(path.join(__dirname, 'server/config/mongoose.js'));
require(path.join(__dirname, 'server/config/routes.js'))(app);

app.listen( 5000, function() {
  console.log( `server running on port 5000` );
});
