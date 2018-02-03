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

  //  db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a74651d4396b3e74ddb79ff')
  //  }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //     returnOriginal: false
  //   }).then((result) => {
  //   console.log(result);
  //  });

db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a74639b27ba630b94511a48')
  }, {
    $set: {
      name: 'Andrew'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

   // db.close();
});
