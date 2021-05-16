var mongoose = require('mongoose');  // Not require('mongoose').Schema (because you need schema and model)

console.log("Inside UserModel.js")
const uri ='mongodb+srv://nikhil:7ivnWOpAaNmgZLVW@cluster0.upaql.mongodb.net/websocket?retryWrites=true&w=majority';

var db =mongoose
  .connect(uri).then(()=>{
      console.log('Sucess')
  }).catch(()=>{
      console.log('error')
  });

  var Schema = mongoose.Schema;

  var userSchema = new Schema({
      firstname:String,
      lastname:String,
      password: { type: String, select: false },
      email: String
  });

  var x=mongoose.model('User', userSchema);
  module.exports=x;
