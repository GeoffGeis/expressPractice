var http = require('http');

function onListenEvent(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>hello world</h1>');
}

var app = http.createServer(onListenEvent);
app.listen(9001, 'localhost');
console.log('server up at localhost:9001');