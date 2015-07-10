var app = require('express')(),
    port = process.env.PORT || 3000;

// route handler GET
app.get('/', function(request, response) {
    var data = '<h1>something</h1>';
    response.send(data);
});

//specify port and address/hostname
// see http://nodejs.org/api/http.html#http_server_listen_port_hostname_backlog_callback
var server = app.listen(port, '127.0.0.1', function() {
    var host = server.address();
    console.log('server up on %s:%s', host.address, host.port);
});
