// making ma express app
var express = require('express'),
    app = express(),
    morgan = require('morgan'),
    port = process.env.PORT || 3000,
    publicDir = require('path').join(__dirname, '/public');

// logging middleware initialize!
app.use(morgan('dev'));

// express.static middleware to
// serve files in specified directory path
// only daisy chains to next middleware function if 
// path does not match static directory
app.use(express.static(publicDir));

// express middleware that handles remaining requests for any non-static files
app.use(function(request, response) {
    var data = '<h1>Nothing to grab here...</h1>';
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(data);
});

app.listen(port);
console.log('server up at port %s', port);
