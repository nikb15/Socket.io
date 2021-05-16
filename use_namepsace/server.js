var express = require('express'),
app= express(),
socketIo = require('socket.io'),
http =require('http'),
server,io;

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

server=http.Server(app);
server.listen(5000);
io= socketIo(server);

function createNameSpace(i)
{
    var  group =io.of('/group-'+i);
    group.on('connection',function(socket){
        console.log('connected')
        socket.on('message.send',function(data){
            console.log(data)
            group.emit('message.sent',data);
        });
    });
}

for(var i =0;i<3;i++)
{
    createNameSpace(i);
}