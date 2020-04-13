const express = require('express')
const router = express.Router()

const bruteforceCheck = require('../config/ratelimiter')

const requiresLogin = require('../config/middleware/requiresLogin')

const {
	check
} = require('express-validator')

const auth = require('../controllers/auth')
const home = require('../controllers/home')
const likes = require('../controllers/likes')

router.get('/', home)
router.get('/login', auth.logIn)
router.post('/login', bruteforceCheck.loginLimiter, auth.doLogin)

router.get('/logout', auth.logout)

router.get('/register', auth.register)
router.post('/register', [
	check('name').isLength({ min: 1 }).withMessage('Please fill in your name'),
	check('email').isEmail().withMessage('This is not a valid email'),
	check('password').isLength({ min: 5 }).withMessage('Please use a minimum of 5 characters for your password'),
	check('passwordcheck', 'Password does not match').custom((value, {req}) => req.body.password2 === req.body.password)],
auth.doRegister)

router.get('/likes', requiresLogin, likes.likes)

module.exports = router
