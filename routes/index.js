const express = require('express');
const router = express.Router();

const { ensureAuthenticated, forwardAuthenticated } = require('../helpers/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('index'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);



// profile controler doet hier heel raar :/



module.exports = router;
