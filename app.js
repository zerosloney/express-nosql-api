var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var users = require('./routes/users');
//var beforeRequest = require('./middlewares/before-request');
var notFoundHandler = require('./middlewares/not-found');
var errorHandler = require('./middlewares/error-handler');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//app.use(beforeRequest());
app.use('/', routes);
app.use('/users', users);

//处理错误
app.use(notFoundHandler());
app.use(errorHandler());


var server = app.listen(4001, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('app listening at http://%s:%s', host, port);
});