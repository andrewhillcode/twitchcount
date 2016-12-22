var express = require('express');
var https = require('https');

var app = express();

app.use(express.static(__dirname));

const port = 3000;

var irc = require('irc');
var client = new irc.Client('irc.chat.twitch.tv', 'millapede', {
    channels: ['#silvername oauth:lgva4edc8o1zq3y24k5t5wbbdbsgxq'],
  	password: 'oauth:lgva4edc8o1zq3y24k5t5wbbdbsgxq'
});

//client.send('PART #silvername');

//client.send('JOIN', '#millapede oauth:lgva4edc8o1zq3y24k5t5wbbdbsgxq');

//client.part('#silvername');

//client.say("#millapede", "test");

//client.join('#millapede' + ' ' + "oauth:lgva4edc8o1zq3y24k5t5wbbdbsgxq");

client.addListener('error', function(message) {
    console.log('error: ', message);
});

client.addListener('message', function (from, to, message) {
    console.log(from + ' => ' + to + ': ' + message);
});

app.listen(port, function () {
	console.log(`Express app listening on port: ${port}`);
});