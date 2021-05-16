var posts =[
        {
            user:'Two-Face',
            title:"How to flip a coin "
        },
        {
            user:'Joker',
            title:"Top 5 Jokes of 2015"
        }
];

module.exports= function(socket){
    var i =0;
    var addingPosts =setInterval(function(){
    if(posts[i]){
        socket.emit('post.add',posts[i]);
        socket.emit('posts.count',{
            count:i+1
        });
        i++;
        console.log("Tranmistting from post :"+i);
    }else{
        clearInterval(addingPosts);
    }
},10);
}