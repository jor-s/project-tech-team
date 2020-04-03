const express = require('express')
const router = express.Router()
const profileController = require('../controllers/profile')
const passport = require('passport')
const imageController = require('../config/multer')
const bruteforceCheck = require("../config/ratelimiter")

router.get('/', profileController.home)

router.get('/login', profileController.logIn)
router.post('/login', bruteforceCheck.loginLimiter, passport.authenticate('local', {  failureRedirect: '/login'}), profileController.doLogin)


// Logout
router.get('/logout', (req, res) => {
  req.logout();
  //req.flash('success_msg', 'You are logged out');
  res.redirect('/login');
});

router.get('/register', profileController.goToRegister)
router.post('/register', profileController.doRegister)

router.get('/profile', profileController.profile)

router.get('/edit-profile', profileController.goToEdit)
router.post('/edit-profile', imageController.upload.single('picture'), profileController.doEdit)

module.exports = router;
