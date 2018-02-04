const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findByIdAndRemove('5a76af9218689caf187f946e').then((todo) => {
    console.log(todo);
});

Todo.findOneAndRemove({_id: '5a76af9218689caf187f946e'}).then((todo) => {
    console.log(todo);
});