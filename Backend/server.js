var http =require('http');
var socketIO = require('socket.io');
var fs = require('fs');
var server , io;


server= http.createServer(function (req,res){
                    console.log("Started");
                    fs.readFile(__dirname+'/index.html',function (err, data){
                    res.writeHead(200);
                    res.write(data);
                    res.end();
                });
}).listen(5000);
io=socketIO(server);

io.on('connection', function(socket){
    socket.emit('greeting-from-server',{
        greeting: 'Hello Client'
    });

    socket.on('greeting-from-client', function(message){
        console.log(message);
    })
})
