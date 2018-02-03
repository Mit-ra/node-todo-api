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

   //delete many

   // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
   //  console.log(result);
   // });

   //delete one

   // db.collection('Todos').deleteOne({text: 'Hello'}).then((result) => {
   //  console.log(result);
   // });

   // find and delete one

   // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
   //  console.log(result);
   // });

   db.collection('User').deleteMany({name: 'Krina'});

   // db.collection('User').findOneAndDelete({_id: new ObjectID("")}).then((results) => {
   //  console.log(JSON.stringify(result, undefined, 2));
   // })

   // db.close();
});
