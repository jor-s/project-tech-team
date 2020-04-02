var express = require('express')
var router = express.Router()
const profileController = require('../controllers/profile')
const passport = require('passport')
const imageController = require('../config/multer')
const bruteforceCheck = require('../config/ratelimiter')

router.get('/', profileController.home)

router.get('/login', profileController.logIn)
router.post('/login', bruteforceCheck.loginLimiter, passport.authenticate('local', {  failureRedirect: '/login'}), profileController.doLogin)

router.get('/register', profileController.goToRegister)
router.post('/register', profileController.doRegister)

router.get('/profile', profileController.userProfile)

router.get('/edit-profile', profileController.goToEdit)
router.post('/edit-profile', imageController.upload.single('picture'), profileController.doEdit)

router.get('/logout', profileController.logOut)

router.use('/recs', require('./recs'));


module.exports = router;
