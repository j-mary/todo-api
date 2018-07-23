const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.error('Unable to connect to MongDB server')
  }
  console.log('Connected to MongoDB server')

  // db.collection('Todos').insertOne({
  //   text: 'something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.error('Unable to insert todo', err)
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })

  // db.collection('Users').insertOne({
  //   name: 'Jude',
  //   age: 31,
  //   location: 'Lagos'
  // }, (err, result) => {
  //   if (err) {
  //     return console.error('Unable to insert data', err)
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })

  db.close()
})