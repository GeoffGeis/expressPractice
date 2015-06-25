// create an express app
var express = require('express'),
    morgan = require('morgan'),
    app = express(),
    port = process.env.PORT || 3000,
    testMode = false;

// add logging middleware to log each request
// see: https://www.npmjs.org/package/morgan
app.use(morgan('dev'));

// add middleware to always send a 'fgsfds' response
app.use(function(request, response, next) {
  if (request.url == '/test') {
    console.log('enabling test mode');
    testMode = true;
  }

  next();
});

// add middleware to always send a 'fgsfds' response
app.use(function(request, response) {
  var data = testMode
      ? JSON.stringify(request.headers)
      : '<h1>fgsfds</h1>';

  var contentType = testMode ? 'text/plain' : 'text/html';

  response.writeHead(200, {'Content-Type': contentType });
  response.end(data);
});

app.listen(port);

console.log('server started on port %s', port);