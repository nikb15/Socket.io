var express = require('express'),
    app = express(),
    http =require('http'),
    socketIo= require('socket.io'),
    server,io;


app.get('/', function(req, res) {
    res.sendFile(__dirname+'/index.html')
});

server= http.Server(app);
server.listen(5000);
io=socketIo(server);

io.on('connection',function(socket){
    socket.on('message.send',function(data){
        io.emit('message.sent',data);
        console.log(data);
    });
});