var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

// route handler for GET
app.get('/', function(request, response) {
    var data = '<h1>fgsfds</h1>';
    response.send(data);
});

app.listen(port);
console.log('server up on port %s', port);
