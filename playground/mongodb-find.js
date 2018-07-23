const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.error('Unable to connect to MongDB server')
  }
  console.log('Connected to MongoDB server')

  // db.collection('Todos').find({completed: false}).toArray().then((todos) => {
  //   console.log('Todos')
  //   console.log(JSON.stringify(todos, undefined, 2))
  // }, (err) => {
  //   if (err) {
  //     console.error('Unable to fetch todos')
  //   }
  // })

  // db.collection('Todos').find({
  //   _id: new ObjectID('5b559117221d9a1a5449beda')
  // }).toArray().then((todos) => {
  //   console.log('Todos')
  //   console.log(JSON.stringify(todos, undefined, 2))
  // }, (err) => {
  //   if (err) {
  //     console.error('Unable to fetch todos')
  //   }
  // })

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`)
  // }, (err) => {
  //   if (err) {
  //     console.error('Unable to fetch todos')
  //   }
  // })

  db.collection('Users').find({name: 'Jude'}).toArray().then((users) => {
    console.log('Users')
    console.log(JSON.stringify(users, undefined, 2))
  }, (err) => {
    if (err) {
      console.error('Unable to fetch users')
    }
  })

  db.close()
})