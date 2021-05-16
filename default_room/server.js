var express = require('express'),
app=express(),
http = require("http"),
socketIo= require('socket.io'),
servre,io;

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
})

server=http.createServer(app);
server.listen(5000);
io=socketIo(server);

io.on('connection',function(socket){
    socket.broadcast.emit('socket.joined', {
        userId: socket.id,
        room: socket.rooms[0]  // room [0] is the default room that can selected
    });
        
    socket.on('message.send',function(data){
        socket.broadcast.to(data.id).emit('message.sent',{
            id:socket.id,
            message:data.message,
        });
    });
});