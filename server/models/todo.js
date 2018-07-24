const mongoose = require('mongoose')

// Todo Schema
const TodoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
})

// Todo Model
const Todo = mongoose.model('Todo', TodoSchema)

// Export Todo Model
module.exports = { Todo }