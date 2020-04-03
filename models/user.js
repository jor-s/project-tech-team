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
  picture: String,
  pickupline: String,
  likes: {
      type: [schema.Types.ObjectId],
      ref: 'User',
      autopopulate: true
    },
    dislikes: {
      type: [schema.Types.ObjectId],
      ref: 'User',
      autopopulate: true
    }
  })

let user = mongoose.model('User', userSchema)

module.exports = user

