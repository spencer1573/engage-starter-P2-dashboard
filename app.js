var passwordless = require('passwordless');
var MongoStore = require('passwordless-mongostore');
var email = require('emailjs');

var smtpServer = email.server.connect({
    user: 		"app39497726@heroku.com",
    password: 	"A1V40tCmddUEFhkWAp",
    host:     	"smtp.sendgrid.net",
    ssl:        true 
});

smtpServer.send({
    text:   "I hope this works",
    from:   "me <no-reply@example.com>",
	to: 	"someone <spencerkdavies@gmail.com>",
	subject:"delete"
	
}, function(err,message) { console.log(err || message); });
