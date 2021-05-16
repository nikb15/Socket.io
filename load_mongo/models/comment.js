 var mongoo =require('../mongooes');

 var mongooes = require('mongoose');
 const Schema =mongooes.Schema;
 mongooes.Promise=require('bluebird');
 console.log("Inside model comment.js");
 
 const commentSchema = new Schema({
     user:String,
     comment:String,
 });
 const CommentModel =mongooes.model('Comment',commentSchema); 
 module.exports=CommentModel;
 