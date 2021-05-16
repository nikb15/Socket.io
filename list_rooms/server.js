var express = require('express'),
app=express(),
socketIo= require('socket.io'),
http=require('http'),
server,io;

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
})

server=http.Server(app);
server.listen(5000);
io=socketIo(server);

io.on('connection',function(socket){
    socket.join('room1');
    socket.join('room2');
    socket.join('room3');
    socket.on('list.rooms',function(){
        socket.emit('list.rooms.response',socket.rooms);
    });
    socket.on('leave.room',function(room){
        socket.leave(room);
    })
})