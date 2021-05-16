var comment = require('../models/comment')
module.exports=function(socket){
    var stream = comment.find().stream();
    stream. on('data',function(comment){
        socket.emit('comment.add',comment);
    });
};