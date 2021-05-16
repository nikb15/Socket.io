module.exports = function getUser(socket,data){
    // stating if the data enter . the token that privded is the right or not
    if(!userSessions[token])
    {
        // when the token i snot valid 
        return socket.emit('user.get.error',{
            messsge:'The user is not authenticated'
        });
    }
    //When the user is autheticated and can continue with the login activity 
    return socket.emit('user.get.success',{
        profile:userSessions[token],
        token:token
    });
};