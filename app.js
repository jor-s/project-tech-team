const express = require('express');
//const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser')
const router = require('./routes/index.js')
const dotenv = require('dotenv').config({ path: '.env' });

const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const ejs = require('ejs')

const port = 3000
const app = express();

let db = mongoose.connection

// Passport Config
require('./helpers/passport')(passport);

// DB Config

//connect with database
mongoose.connect(process.env.MONGODB_URI, {
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  useNewUrlParser: 'true',
  useUnifiedTopology: 'true',
  useCreateIndex: 'true'
})


// EJS
app.use('/public', express.static('public'))
//app.use('/', router)
//app.use(expressLayouts)
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.set('views', 'views')
//app.listen(port, () => console.log('Listening on port ' + port))


// Express session
app.use(
  session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 500000
  }
})
)

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// Routes
app.use('/', require('./routes/index.js'));
app.use('/users', require('./routes/users.js'));



const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
