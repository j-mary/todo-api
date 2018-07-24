const express = require('express')
const bodyParser = require('body-parser')
const chalk = require('chalk')

const { ObjectID } = require('mongodb')
const { mongoose } = require('./db/mongoose')
const { Todo } = require('./models/todo')
const { User } = require('./models/user')

const port = process.env.PORT || 3000

const app = express()

// Body-Parser middleware
//app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/todos', (req, res) => {
  const newTodo = new Todo({
    text: req.body.text
  })

  newTodo.save().then((todo) => {
    res.json(todo)
  }, (err) => {
    res.status(400).send(err)
  })
})

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.json({todos})
  }, (err) => {
    res.status(400).send()
  })
})

app.get('/todos/:id', (req, res) => {
  const id = req.params.id

  if (!ObjectID.isValid(id)) {
    return res.status(404).send()
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      res.status(404).send()
    }

    res.json({todo})
  }, (err) => {
    res.status(400).send(err)
  })
})

app.listen(port, () => {
  console.log(`
     ${chalk.white.bold.bgGreen(` Server running on port ${port} `)} 
  `)
})

module.exports = { app }