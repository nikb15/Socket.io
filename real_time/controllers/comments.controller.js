var comments =[
    {
    user:'Bruce Waye' ,
    comment:'I aggre with Batman'
    },
    {
        user:'Joker' ,
        comment:'Thanks Batman'
    },
    {
        user:'Mathew' ,
        comment:'Intresting ideas....'
    }    
];
module.exports = function(socket){
    console.log("Inside comments")
    var i =0;
    var addingcomments=setInterval(function(){
    if(comments[i])
        {

            socket.emit('comment.add',comments[i]);
            socket.emit('comments.count',{
                    count:i+1
        });
        i++;
        }else{
            clearInterval(addingcomments);
        }
    },10);        
        
};