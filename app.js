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

//function gettem(){

var iLastTime = 0;
var iTime = 0;
var iTotal = 0;
var iKeys = 0;

function checkSpeed() {
    iTime = new Date().getTime();

    if (iLastTime != 0) {
        iKeys++;
        iTotal += iTime - iLastTime;
        console.log("speed: " + Math.round(iKeys / iTotal * 60000, 2));
    }

    iLastTime = iTime;
}



	var mincounter = 0;
	counter = 0;

	client.join('millapede');

	client.on('chat', function(channel, user, message, self) {
		counter++;
		mincounter++;
		checkSpeed();
		console.log("Count: " + counter);
		console.log("This min: " + mincounter);


	});

	client.on('connected', function(address, port) {
		//client.action("millapede", "Test from bot.");	
		client.join('imaqtpie');
		setInterval(function(){ 
			console.log('resetting min');
			mincounter = 0; 
		}, 60000);
	});


//}

//});


server.listen(port, function () {
 	console.log(`Express app listening on ${port}`);
});