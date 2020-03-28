const mongoose = require('mongoose');
let schema = mongoose.Schema

const UserSchema = new schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const ProfileSchema = new schema({
  name: String,
  email: String,
  age: Number,
  password: String,
  date: String,
  preferences: String,
  hobby: Array,
  picture: String
})


const User = mongoose.model('User', UserSchema);
const Profile = mongoose.model('Profile', ProfileSchema);

module.exports = User;
