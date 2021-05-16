var comment = require('./models/comment');
var mongoo =require('./mongooes');
var comments=[
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
]
for(var i =0;i<comments.length;i++)
{
    new comment(comments[i]).save();
}
console.log('Database seeded');
