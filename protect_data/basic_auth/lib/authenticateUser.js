// /*
// We will add now to authenticate the user that uses the user to log 
// this will finr the user wiht the user name and the password and that will mathc wiht 
// the data that is stored inside the mongo db 
// For this w need to save it we will fo that in the model 
// */
// var md5 = require('md5'),
//     User = require('./userModel'),
//     loginUser =require('./loginUser');

// //Authenticate a user and log them in 
// module.exports = function authenticateUser(socket,data)
// {
//     //Encrypting password
//     data.password=md5(data.password);

//     User.findOne(data,null,function(err,data){
//         //If the data is correct then log them in 

//         if(data){
//             return loginUser(socket,data);
//         }else{
//             return socket.emit('user.login.error',
//             err || {message : ' Invalid email or password'
//             });
//         };
//     })
// };

var md5 = require('md5'),
//  User = require('./userModel'),
User,
 loginUser = require('./loginUser');
// Authenticates a user and logs them in
module.exports = function authenticateUser (socket, data) {
 // Hash the password
 data.password = md5(data.password);
 User.findOne(data, null, function (err, data) {
 // If the username and password are correct, log the user in
 if (data) {
 return loginUser(socket, data);
 // If the username or password are incorrect, emit an error
 } else {
 return socket.emit('user.login.error', err 
|| {
 message: 'Invalid email or password.'
 });
 }
 });
}