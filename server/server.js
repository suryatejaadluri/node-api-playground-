var express=require('express');
var bodyParser=require('body-parser');

var {Todo}=require('./models/todo');
var {user}=require('./models/user');
var{mongoose}=require('./db/mongoose');

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
app.listen(3000,()=>{
console.log('connected to port 3000');
});
