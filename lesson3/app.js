// create an express app
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

// create express middleware
app.use(function(request, response) {
    var data = '<h1>fgsfds</h1>';

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(data);
});

app.listen(port);

console.log('server started on port %s', port);
