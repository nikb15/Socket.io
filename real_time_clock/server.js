var express = require('express');
var http = require('http');
var socketIO = require('socket.io');
var moment = require('moment');
var app = express();
var server, io;

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

server=http.Server(app);
server.listen(5000);
io=socketIO(server);
io.on('connection',function(socket){
    setInterval(function(){
        socket.emit('secound.update',{
            time:new Date()
        });
    },1000)
});