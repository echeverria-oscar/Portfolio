console.log('productscontroller');

var mongoose = require('mongoose');
var contact = mongoose.model('Contact');
var nodemailer = require("nodemailer");
var mailOpts;
var smtpTrans;

module.exports= {
  send: function(req,res){
    console.log(req.body);


    //Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
    var smtpTransport = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
          user: "",
          pass: ""
      }
  });

   mailOpts = {
     from: req.body.name + ' &lt;' + req.body.email + '&gt;', //grab form data from the request body object
     to: 'echeverria.oscar7@gmail.com',
     subject: 'Website contact form',
     text: req.body.message + ", " + req.body.email+ ", " +req.body.name + ", " +req.body.number
   };

   console.log(mailOpts);
   smtpTransport.sendMail(mailOpts, function(error, response){
     if(error){
       console.log(error);
       res.json("error");
     }else{
       console.log("Message sent: " + response);
       res.json("message sent Thank you.", response );
     }
   });

}



}
