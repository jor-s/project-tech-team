require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')
const mongoose = require('mongoose')
const session = require('express-session')
const passport = require('./config/passport')
const flash = require('connect-flash')
const path = require('path')
const port = process.env.PORT
const app = express()
const db = mongoose.connection

app
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
	.use('/public', express.static(path.join(__dirname,'public')))
	.use(bodyParser.urlencoded({extended: true}))
	.set('trust proxy', 1)
	.use(routes)
	.set('views', path.join(__dirname, 'views'))
	.set('view engine', 'ejs')
	.listen(port, () => console.log('Listening on port ' + port))

//connect with database
mongoose.connect(process.env.MONGODB_URI, {
	user: process.env.DB_USER,
	pass: process.env.DB_PASS,
	useNewUrlParser: 'true',
	useUnifiedTopology: 'true',
	useCreateIndex: 'true',
	useFindAndModify: false
})

// Connect flash
app.use(flash())

// Global variables
app.use((req, res, next) => {
	res.locals.success_msg = req.flash('success_msg')
	res.locals.error_msg = req.flash('error_msg')
	res.locals.error = req.flash('error')
	next()
})

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
	console.log('DATABASE CONNECTED FOR SURE')
})
