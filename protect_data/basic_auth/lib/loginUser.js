// Now we will create a module to login the user into the system 
var crypto = require('crypto'),
    getUser=require('./getUser');

    // creating a module that we will export it out to the xserver .js
module.exports= function loginUser(socket,user)
{
    //create a token with a crypto
    var token = crypto.randomBytes(64).toString('base64');
    UserSessions[token]=user;

    return getUser(socket,token);
};
