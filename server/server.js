var express=require('express');
var bodyParser=require('body-parser');
var {ObjectID}=require('mongodb');
var {Todo}=require('./models/todo');
var {user}=require('./models/user');
var{mongoose}=require('./db/mongoose');
const port=process.env.PORT||3000;
var app=express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    var todo=new Todo(
        {
            text:req.body.text
        }
    );
todo.save().then((doc)=>
{
    res.send(doc);
},(e)=>{
    res.status(400).send(e);
});    
});
app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send(todos);
        },(e)=>
    {
        res.status(400).send(e);
    });
});
app.get('/todos/:id',(req,res)=>{
    var id=req.params.id;
    if(!ObjectID.isValid(id))
    {
     return   res.status(404).send();
    }
    
    Todo.findById(id).then((todo)=>{
        if(!todo)
        res.status(404).send();
        else
        res.send({todo});
    },(e)=>{
        res.status(404).send();
    });
    });
app.listen(port,()=>{
console.log('connected to port 3000');
});
