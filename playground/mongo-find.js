const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>
{
    if(err)
    {
        return console.log('unable to connect to MongoDb server');
    }
    console.log('succesfully connected to Mongodb');

db.collection('Todos').find().count().then((count)=>{
    console.log(count);
});
db.close();
}
);

