const LocalStrategy = require('passport-local').Strategy
const passport = require('passport')
const User = require('../models/User')

passport.use(new LocalStrategy( {usernameField: 'email'},
	function (username, password, done) {
		User.findOne({ email: username }, function (err, user) {
			console.log('logging userdata in local strategy: ', user)
			console.log('client entered the following password: ', password)
			if (err) {
				return done(err)
			}
			if (!user || !user.comparePassword(password)) {
				return done(null, false, console.log('credentials incorrect'))
			}
			return done(null, user)
		})
	}
))

passport.serializeUser( (user, done) => {
	done(null, user.id)
})

passport.serializeUser( (user, done) => {
	//console.log('serializing: ' + user.id)
	done(null, user.id)
})

passport.deserializeUser( (id, done) => {
	//console.log('deserializing: ' + id)
	User.findById(id, function (err, user) {
		done(err, user)
	})
})

module.exports = passport
