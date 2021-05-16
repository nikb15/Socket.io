var express = require('express');
var app = express();
var http = require('http');
var SocketIo = require('socket.io');
var server ,io;
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
})

server=http.Server(app);
server.listen(5000);

io= SocketIo(server);

io.on('connect',function(socket){
    var controllers =['comments','post']
    for(var i=0;i<controllers.length;i++){
        require('./controllers/'+controllers[i]+'.controller')(socket);        
    }
});
