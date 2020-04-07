const express = require('express')
const router = express.Router()

const bruteforceCheck = require('../config/ratelimiter')

const requiresLogin = require('../config/middleware/requiresLogin')

const auth = require('../controllers/auth')
const home = require('../controllers/home')
const likes = require('../controllers/likes')
router.get('/', home)
router.get('/login', auth.logIn)
router.post('/login', bruteforceCheck.loginLimiter, auth.doLogin)

router.get('/logout', auth.logout)

router.get('/register', auth.register)
router.post('/register', auth.doRegister)

router.get('/likes', likes.likes)

router.use('/profile', requiresLogin, require('./profile'))
router.use('/discover', requiresLogin, require('./discover'))

module.exports = router;
