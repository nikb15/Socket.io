var express=require('express'),
app=express(),
socketIo=require('socket.io'),
http=require('http'),
server,io;

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

server=http.Server(app);
server.listen(5000);
io=socketIo(server);

io.on('connection', function (socket) {
    socket.on('user.join', function (data) {
    console.log(data),
    socket.broadcast.emit('user.joined', data);
     });
    });