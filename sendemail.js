


var email = require('emailjs');
var the = require('./p.json');

var smtpServer = email.server.connect({
    user:       the.username,
    password:   the.password,
    host:       "smtp.sendgrid.net",
    ssl:        true
});

smtpServer.send({
    text:   "I hope this works",
    from:   "me <no-reply@example.com>",
    to: 	"someone <spencerkdavies@gmail.com>",
    subject:"delete"
    
}, function(err,message) { console.log(err || message); });
