const mongoose = require('mongoose')

// User Schema
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    minlength: 1,
    trim: true
  }
})

// User Model
const User = mongoose.model('User', UserSchema)

// Export User Model
module.exports = { User }