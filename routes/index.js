var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('index.ejs');
})

router.get('/login', (req, res) => {
  res.render('login.ejs');
})

router.get('/register', (req, res) => {
  res.render('register.ejs');
})

module.exports = router;
