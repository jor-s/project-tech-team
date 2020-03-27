var express = require('express');
var router = express.Router();
const profileController = require('../helpers/profile')

router.get('/', profileController.home)

router.get('/login', profileController.logIn)
router.post('/login', profileController.doLogin)

router.get('/register', profileController.doRegister)
router.post('/register', profileController.doRegister)

router.get('/profile', profileController.profile)
module.exports = router;
