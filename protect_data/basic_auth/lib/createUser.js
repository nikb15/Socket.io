/*
Now we  will to create a user first and then only we need to 
be able to validate the user   
*/
var md5 = require('md5'),
    User= require('./UserModel'),
    loginUser= require('./loginUser');

//create new user 
module.exports=function createUser(socket,data)
{
    //hashing the password 
    data.password=md5(data.password);

    //Create a new user in mongodb 
    var user = new User (data);

    //saving to the mongo Db
    user.save().then(function(data){
        console.log("YOur data is ebing saved");
        return loginUser(socket,data);
    });
};