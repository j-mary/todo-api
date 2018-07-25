const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(JSON.stringify(result, undefined, 2))
// })

Todo.findByIdAndRemove('5b573aea4c9226104496ce47').then((todo) => {
  if (!todo) {
    return console.log('Requested todo does not exist')
  }
  console.log(JSON.stringify(todo, undefined, 2))
})