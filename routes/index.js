var express = require('express')
var router = express.Router()
const profileController = require('../controllers/profile')
const passport = require('passport')
const imageController = require('../config/multer')
const bruteforceCheck = require('../config/ratelimiter')
const editController = require('../controllers/edit-profile')

router.get('/', profileController.home)

router.get('/login', profileController.logIn)
router.post('/login', bruteforceCheck.loginLimiter, profileController.doLogin, passport.authenticate('local', {failureRedirect: '/login'} ))

router.get('/register', profileController.goToRegister)
router.post('/register', profileController.doRegister)

router.get('/profile', profileController.profile)

router.get('/edit-profile', editController.goToEdit)
router.post('/edit-profile', imageController.upload.single('picture'), editController.doEdit)

module.exports = router;
