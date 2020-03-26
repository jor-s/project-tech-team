const express = require('express')
const bodyParser = require('body-parser')
const port = 3000
const router = require('./routes/index.js')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const session = require('express-session')

app
  .use('/public', express.static('public'))
  .use(bodyParser.urlencoded({extended: true}))
  .use('/', router)
  .set('view engine', 'ejs')
  .set('views', 'views')
  .listen(port, () => console.log('Listening on port ' + port))

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 500000
    }
  }))

//connect with database
mongoose.connect(process.env.MONGODB_URI, {
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  useNewUrlParser: 'true',
  useUnifiedTopology: 'true',
  useCreateIndex: 'true'
})

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log("DATABASE CONNECTED FOR SURE")
})
