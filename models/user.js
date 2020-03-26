const mongoose = require('mongoose')
let schema = mongoose.Schema

let userSchema = new schema({
  name: String,
  email: String,
  password: String,
  date: String
})

let user = mongoose.model('User', userSchema)

module.exports = user
