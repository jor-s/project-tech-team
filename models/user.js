const mongoose = require('mongoose')
let schema = mongoose.Schema

let userSchema = new schema({
  name: String,
  email: String,
  age: Number,
  password: String,
  date: String,
  preferences: String,
  hobby: Array,
  picture: String
})

let user = mongoose.model('User', userSchema)

module.exports = user
