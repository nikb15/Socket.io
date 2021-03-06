var express = require('express'),
    app= express(),
    http = require('http'),
    socketIo=require('socket.io'),
    server,io;

app.get('/', function(req,res){
    res.sendFile(__dirname+'/index.html');
});

server =http.Server(app);
server.listen(5000);
io=socketIo(server);

io.on('connection',function(socket){
    io.emit('user.add',socket.id);

    socket.on('disconnect',function(){
        io.emit('user.remove',socket.id)
    });
});