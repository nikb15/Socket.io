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


var getUser = require('./lib/getUser'),
    loginUser = require('./lib/loginUser'),
    createUser = require('./lib/createUser'),
    authenticateUser = require('./lib/authenticateUser');

global.userSessions={};

io.on('connection',function(socket){
    //Gget the authenticted user
        socket.on('user.get',function(token){
                getUser(socket,token)
        });
    //Create User    
        socket.on('user.create',function(data){
            console.log('USer.Creeate');
            createUser(socket,data);
        });
    //Login 
        socket.on('user.login',function(data){
            authenticateUser(socket,data);
        });

    //Login of the authenticated user
    socket.on('user.logout',function(token){
        delete UserSession(token);
    });

})