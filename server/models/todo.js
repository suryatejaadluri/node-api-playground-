var mongoose=require('mongoose');
var Todo=mongoose.model('Todo',
{
    text:{
        type:String
    },
    completed:{
        type:Boolean
    },
    completedAt:{
        type:Number
    }
});

var newTodo= new Todo({
        text:'cook dinner'
    });
    
    newTodo.save().then((doc)=>{
    console.log('Succesfully saved',doc);
    },(e)=>
    {
        console.log('unable to save the data');
    });
    
    var otherTodo=new Todo({
        text:'have fun',
        completed:false,
        completedAt:9.30
    });
    
    
    otherTodo.save().then((doc)=>{
        console.log('Succesfully added',doc);
    },(e)=>
    {
        console.log('unable to add');
    });
    module.exports={Todo};