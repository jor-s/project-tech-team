const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes/index.js')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const session = require('express-session')
const port = 3000
const app = express()

const passport = require('./config/passport')
let db = mongoose.connection

  app
  //.use("/login", bruteforceCheck.loginLimiter)
  .use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 500000
    }
  }))
  .use(passport.initialize())
  .use(passport.session())
  .use('/public', express.static('public'))
  .use(bodyParser.urlencoded({extended: true}))
  .use('/', router)
  .set('view engine', 'ejs')
  .set('views', 'views')
  .listen(port, () => console.log('Listening on port ' + port))

//connect with database
mongoose.connect(process.env.MONGODB_URI, {
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  useNewUrlParser: 'true',
  useUnifiedTopology: 'true',
  useCreateIndex: 'true'
})

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log("DATABASE CONNECTED FOR SURE")
})
