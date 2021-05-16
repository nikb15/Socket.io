var io = require('socket.io')(5000,{
    cors:{
        origin:"*",
    }
}),
sockets=[];
io.on('connection',function(socket){
    sockets.push(socket);
    socket.on('message',function(message){
        //console.log(socket);
        for(var i =0;i<sockets.length;i++)
        {
            sockets[i].send(message);
            console.log(message);
        }
    });

    socket.on('disconnect',function(){
        for(var i =0;i<sockets.length;i++){
            if(sockets[i].id===socket.id){
                sockets.splice(i,1);
            }
        }
        console.log("The socket is disconnet")
    });
})