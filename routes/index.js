const express = require('express')
const router = express.Router()
const profileController = require('../controllers/profile')
const auth = require('../controllers/auth')
const imageController = require('../config/multer')
const bruteforceCheck = require("../config/ratelimiter")

router.get('/', profileController.home)

router.get('/login', auth.logIn)
router.post('/login', bruteforceCheck.loginLimiter, auth.doLogin)

// Logout
router.get('/logout', auth.logout)

router.get('/register', auth.register)
router.post('/register', auth.doRegister)

router.get('/profile', profileController.profile)

router.get('/edit-profile', profileController.goToEdit)
router.post('/edit-profile', imageController.upload.single('picture'), profileController.doEdit)

router.use('/recs', require('./recs'));

module.exports = router;