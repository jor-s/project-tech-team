let profileController = {

  home:(req, res) => {
    console.log(req.session)
    res.render('index.ejs')
  },

  logIn:(req, res) => {
    res.render('login.ejs')
  },

  doLogin:(req, res) => {
    console.log(req.rateLimit)
    res.redirect('profile')
  },

  goToRegister:(req, res) => {
    res.render('register.ejs')
  },

  doRegister:(req, res) => {
    res.render('register.ejs')
  },

  profile:(req, res) => {
    if (req.user) {
      res.render('profile.ejs')
    } else {
      res.redirect('login')
    }
  }
}

module.exports = profileController
