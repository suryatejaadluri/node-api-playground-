var mongoose=require('mongoose');
var user=mongoose.model('user',
{
username:{
type:String
},
email:{
    type:String,
    required:true,
    minlength:1,
    trim:true
}
});

var newuser=new user({
    username:"surya",
    email:'suryatejaadluri'
});

newuser.save().then((todo)=>
{
    console.log(JSON.stringify(todo,undefined,2));
},(err)=>{
console.log('unable to add',err)
});

