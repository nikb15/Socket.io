var mongoose = require('mongoose');
mongoose.Promise= require('bluebird')

console.log("Inside schem file");
const uri ='mongodb+srv://nikhil:7ivnWOpAaNmgZLVW@cluster0.upaql.mongodb.net/websocket?retryWrites=true&w=majority';

mongoose
  .connect(uri).then(()=>{
      console.log('Sucess')
  }).catch(()=>{
      console.log('error')
  });

