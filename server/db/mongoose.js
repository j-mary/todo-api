const mongoose = require('mongoose')
const chalk = require('chalk')

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp', { useNewUrlParser: true })

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log(`
     ${chalk.white.bold.bgBlue(` Connected to mongoDB server `)}
  `)
})

module.exports = { mongoose }