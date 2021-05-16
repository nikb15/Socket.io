var http = require('http');
var fs= require('fs');
var socketIO= require('socket.io');
var express= require('express');
var app= express();
var server ;
var io;

// Now this is the express way not the http way

app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html');
});

app.get('/x',function(req, res){
    res.send("Mai chutiya hu!!!!!");
})

server= http.Server(app);
server.listen(5000);

io = socketIO(server);

io.on('connection',function(socket){
        socket.emit('greeting-from-server',{
            greeting:"Hello client"
        });
        socket.on('greeting-from-client',function(message){
            console.log(message);
        })
})