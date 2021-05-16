const { Socket } = require('net');

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

io.on(('connection') ,function(socket){
    socket.on('notifications.join' ,function()
    {
        socket.join('notifications');
    });
    socket.on('notifications.leave' ,function(){
        socket.leave('notifications');
    });

    var i = 0;
    setInterval(function(){
        io.to('notifications').emit('notify' ,'This is notifaciton number' + i );
        i++;
    },2000);
})
