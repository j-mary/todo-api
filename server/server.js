require('./config/config')

const express = require('express')
const bodyParser = require('body-parser')
const chalk = require('chalk')
const _ = require('lodash')

const { ObjectID } = require('mongodb')
const { mongoose } = require('./db/mongoose')
const { Todo } = require('./models/todo')
const { User } = require('./models/user')

const port = process.env.PORT

const app = express()

// Body-Parser middleware
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

app.delete('/todos/:id', (req, res) => {
  const id = req.params.id

  if (!ObjectID.isValid(id)) {
    return res.status(404).send()
  }

  Todo.findByIdAndRemove(id).then((todo) => {
    if (!todo) {
      res.status(404).send()
    }

    res.json(todo)
  }, (err) => {
    res.status(400).send(err)
  })
})

app.patch('/todos/:id', (req, res) => {
  const id = req.params.id
  const body = _.pick(req.body, ['text', 'completed'])

  if (!ObjectID.isValid(id)) {
    return res.status(404).send()
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime()
  } else {
    body.completed = false
    body.completedAt = null
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if (!todo) {
      res.status(404).send()
    }

    res.json({todo})
  }).catch((err) => {
    res.status(400).send()
  })
})

// POST /users
app.post('/users', (req, res) => {
  const body = _.pick(req.body, ['email', 'password'])
  const newUser = new User(body)

  newUser.save().then(() => {
    return newUser.generateAuthToken()
  }).then((token) => {
    res.header('x-auth', token).send(newUser)
  }).catch((err) => {
    res.status(400).send(err)
  })
})

app.listen(port, () => {
  console.log(`
     ${chalk.white.bold.bgGreen(` Server running on port ${port} `)} 
  `)
})

module.exports = { app }