// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);


// var user = {name: 'Krina', age: 33};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("unable to connect to mongodb server");
    }

   console.log('Connected to mongodb server');

   db.collection('Todos').find({
    _id: new ObjectID('5a743cd491e2db1690c0ae63')
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));

   }, (err) => {});
   // db.close();
});
