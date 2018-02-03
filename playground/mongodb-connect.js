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

   // db.collection('Todos').insertOne({
   //  text:'something to do',
   //  completed: false
   // }, (err, result) => {
   //      if (err) {
   //          return console.log('Unable to insert todo', err);
   //      }
   //      console.log(JSON.stringify(result.ops, undefined, 2));
   // });

   // db.collection('Users').insertOne({
   //  name: 'Krina',
   //  age: 33,
   //  location: 'Pune'
   // }, (err, result) => {
   //      if(err) {
   //          return console.log('Unable to insert the user info', err);
   //      }
   //      console.log(result.ops[0]._id.getTimestamp());
   //         });

   // db.close();

   db.collection('Users').find({name: 'Krina'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
   });
});
