const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>
{
    if(err)
    {
        return console.log('unable to connect to MongoDb server');
    }
    console.log('succesfully connected to Mongodb');

db.collection('Todos').insertOne({
    text:'something to do',
    completed:false},
    (err,result)=>{
if(err)
{
    return console.log("error in inserting data",err);
}
console.log('Succesufully inserted',JSON.stringify(result.ops,undefined,2));
    }

);
db.collection('Users').insertOne({
    name:'Suryateja',
    age:'20',
    location:'hyd'
},
(err,result)=>
{
    if(err)
  return console.log('error in inserting data',err);
console.log('successfully inserted',JSON.stringify(result.ops,undefined,2));
}

);
db.close();
});

