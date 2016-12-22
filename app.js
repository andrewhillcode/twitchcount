var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var https = require('https');

app.use(express.static(__dirname + '/public'));

const port = 3000;

var tmi = require('tmi.js');

var options = {
		options: {
			debug: true
		},
		connection: {
			cluster: "aws",
			reconnect: true
		},
		identity: {
			username: 'millapede',
			password: 'oauth:lgva4edc8o1zq3y24k5t5wbbdbsgxq'
		},
		channels: [""]
	};

var client = new tmi.client(options);
client.connect();


//app.get('/', function(appReq, appRes) {

function gettem(){



	counter = 0;

	client.join('millapede');

	client.on('chat', function(channel, user, message, self) {
		counter++;
		console.log("Count: " + counter);

	});

	client.on('connected', function(address, port) {
		//client.action("millapede", "Test from bot.");	
	});


}

//});


server.listen(port, function () {
 	console.log(`Express app listening on ${port}`);
});