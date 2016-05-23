var passwordless = require('passwordless');
var MongoStore = require('passwordless-mongostore');
var email = require('emailjs');
var the = require('./p.json');
var express = require('express');
var app = express();
var path = require('path');

var smtpServer = email.server.connect({
    user: 		the.username,
    password: 	the.password,
    host:     	"smtp.sendgrid.net",
    ssl:        true 
});

/*
//for testing email connection
smtpServer.send({
    text:   "I hope this works",
    from:   "me <no-reply@example.com>",
	to: 	"someone <spencerkdavies@gmail.com>",
	subject:"delete"
	
}, function(err,message) { console.log(err || message); });
*/

/*
// THE INIT IS WHERE THE PROBLEM IS!
passwordless.init();

var pathToMongoDb = 'mongodb://localhost/passwordless-simple-mail';
passwordless.init(new MongoStore(pathToMongoDb));


passwordless.addDelivery(
    function(tokenToSend, uidToSend, recipient, callback) {
        var host = "localhost:3500";
        smtpServer.send({
            text:       'Hello!\nAccess your account here: http://' + 
            host + '?token=' + tokenToSend + '&uid=' + 
            encodeURIComponent(uidToSend),
            from:       "me <no-reply@example.com>",
            to:         recipient,
            subject:    'Token for ' + host
        }, function(err, message) {
            if(err) {
                console.log(err);
            }
            callback(err);
        });
});
*/


app.use(express.static('./'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/'));
});

app.listen(3500);


