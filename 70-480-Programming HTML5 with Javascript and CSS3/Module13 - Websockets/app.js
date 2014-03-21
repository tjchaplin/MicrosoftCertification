
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var schedule = require('./routes/schedule');
var registration = require('./routes/registration');
var http = require('http');
var path = require('path');
var io = require('socket.io');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public'),{index:"index.htm"}));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// app.get('/', routes.index);
// app.get('/users', user.list);
app.get('/schedule/list', schedule.list);
app.post('/schedule/star/:id', schedule.star);
app.post('/registration/new', registration.new);

	var srv = http.createServer(function (req, res) {
		console.log("req");
	  res.writeHead(200, {'Content-Type': 'text/plain'});
	  res.end('okay');
	});
	var net = require('net');

	srv.on('connect', function(req, cltSocket, head) {
		console.log("connet");
	  // connect to an origin server
	  var srvUrl = url.parse('http://' + req.url);
	  var srvSocket = net.connect(srvUrl.port, srvUrl.hostname, function() {
	    cltSocket.write('HTTP/1.1 200 Connection Established\r\n' +
	                    'Proxy-agent: Node-Proxy\r\n' +
	                    '\r\n');
	    srvSocket.write(head);
	    srvSocket.pipe(cltSocket);
	    cltSocket.pipe(srvSocket);
	  });
	});
	srv.listen(80);

module.exports.start = function(){
	// var server = http.createServer(app);
	// server.listen(app.get('port'), function(){
	//   console.log('Express server listening on port ' + app.get('port'));
	// });	



// var WebSocketServer = require('ws').Server, wss = new WebSocketServer({port: 8080});
// wss.on('connection', function(ws) {
//     ws.on('message', function(message) {
//         console.log('received: %s', message);
//     });
//     ws.send('something');
// });

// var socket = require('socket.io');
// var http2 = require('http').createServer().listen(8080);
// var io = socket.listen(http2);



// io.sockets.on('connection', function () {
// 	console.log("connection")
//   io.on('message', function () { });
//   io.on('close', function () { });
// });

	// var socket = io.listen(server,{'destroy upgrade':false});
	// socket.sockets.on('connection', function (socket) {
	// 	console.log("Connection");
	//   // socket.emit('news', { hello: 'world' });
	//   // socket.on('my other event', function (data) {
	//   //   console.log(data);
	//   // });
	// });
	// socket.on('error',function(){
	// 	console.log('errror');
	// })
}