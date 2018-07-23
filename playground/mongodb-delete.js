const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.error('Unable to connect to MongDB server')
  }
  console.log('Connected to MongoDB server')

  // db.collection('Todos').deleteMany({text: 'Eat Breakfast'}).then((result) => {
  //   console.log(result)
  // })

  // db.collection('Todos').deleteOne({text: 'Eat Breakfast'}).then((result) => {
  //   console.log(result)
  // })

  // db.collection('Todos').findOneAndDelete({
  //   _id: new ObjectID('5b55a04f666e4d5c02d53ade')
  // }).then((result) => {
  //   console.log(JSON.stringify(result, undefined, 2))
  // })

  db.close()
})