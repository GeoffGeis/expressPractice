var http = require('http'),
	fs = require('fs'),
	path = require('path');

var app = http.createServer(function(request, response) {
	var index = path.join(__dirname, '/index.html');
	if(request.url === '/' || requset.url === '/index.html') {
		fs.readFile(index, function(err, data) {
			if(err) {
				console.error(err);
				response.writeHead(500, {'Content-Type': 'text/html'});
				response.end('500 server error');
			} else {
				response.writeHead(200, {'Content-Type': 'text/html'});
				response.end(data);
			}
		})
	} else {
		console.log('resource not found: ' + request.url);
		response.writeHead(404, {'Content-Type': 'text/html'});
		response.end(data);
	}
});

app.listen(9001, 'localhost');
console.log('server up at localhost:9001');