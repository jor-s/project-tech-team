var express = require('express');
var router = express.Router();
const profileController = require('../controllers/profile')
const bruteforceCheck = require('../config/ratelimiter')

router.get('/', profileController.home)

router.get('/login', profileController.logIn)
router.post('/login', profileController.doLogin, bruteforceCheck.loginLimiter)

router.get('/register', profileController.goToRegister)
router.post('/register', profileController.doRegister)

router.get('/profile', profileController.profile)

router.get('/edit-profile', profileController.goToEdit)
router.post('/edit-profile', profileController.doEdit)

module.exports = router;
