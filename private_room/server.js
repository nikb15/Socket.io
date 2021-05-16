var express = require('express'),
app=express(),
http = require("http"),
socketIo= require('socket.io'),
md5=require('md5'),
server,io;

app.get('/', function(req,res){
    res.sendFile(__dirname+'/index.html');
})

server=http.Server(app);
server.listen(5000);
io=socketIo(server);

io.on('connection',function(socket){
    socket.on('join.group', function (data) {
        // Return and emit a message if the passwords don't 
       match
        if (md5(data.password) !== privatePassword) {
        returnsocket.emit('message.posted', {
        type: 'danger',
        message: 'Invalid password'
        });
        }
        // Join the group
        socket.join('secret group');
        socket.emit('join.group.success');
        });

        socket.on('message.post', function (data) {
            io.to('secret group').emit('message.posted', {
            type: 'muted',
            message: data.message
            });
        });
});


