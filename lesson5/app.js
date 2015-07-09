// you kno the drill by now, that or ur brain dead
var app = require('express')(),
    port = process.env.PORT || 8080;

// route handler for GET
app.get('/', function(request, response) {
    var data = '<h1>if one day is not opposite day today, and I am lying, is it not opposite day one day today?</h1>';
    response.send(data);
});

var server = app.listen(port, function() {
    // ok so like the callback is added as a listner for the big listen event
    // read this ish: http://nodejs.org/api/net.html#net_server_listen_path_callback
    // moar stuff to note:
    // server is an http.Server, which is a net.Server
    // http://nodejs.org/api/http.html#http_class_http_server
    // http://nodejs.org/api/net.html#net_class_net_server
    // http://nodejs.org/api/net.html#net_server_address
    console.log('server up at port %s', server.address().port);
});
