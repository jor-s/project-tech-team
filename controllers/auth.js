const User = require('../models/User')
const bcrypt = require('bcrypt')
const passport = require('passport')
const {	validationResult
} = require('express-validator/check');

const saltRounds = 10;

exports.register =  (req, res) => {
	res.render('register.ejs')
}

exports.doRegister = (req, res) => {
	let password = req.body.password;

	bcrypt.genSalt(saltRounds, (err, salt) => { //generate salt rounds
		bcrypt.hash(password, salt, (err, hash) => { //Hash the password from req.body.password

			let newUser = new User({
				name: req.body.name,
				email: req.body.email,
				password: hash
			})

			newUser.save((err) => {
				if (err) {
					return err(err)
				} else {
					console.log('registerd info: ' + newUser)
					console.log('has been added')
					res.render('login')
				}
			})
		})
	})

	const errors = validationResult(req).mapped();
	if (Object.keys(errors).length>0) {
		console.log('ik log vanaf createperson.js')
		res.render('register', {
			user: req.user,
			errors: errors
		});
		return;
	}
}

exports.logIn = (req, res) => {
	res.render('login.ejs')
}

exports.doLogin = passport.authenticate('local', {
	successRedirect: '/profile',
	failureRedirect: '/login'
})

exports.logout = (req, res) => {
	req.logout();
	req.session.destroy();
	res.redirect('/login');
};
