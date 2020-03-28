const schema = require('../models/user')


let profileController={}

profileController.home = function(req, res) {
  console.log(req.session)
  res.render('index.ejs')
}

profileController.logIn = function(req, res) {
  console.log(req.rateLimit)
  res.render('login.ejs')
}

profileController.doLogin = function(req, res) {
  res.redirect('profile')
}

profileController.goToRegister = function(req, res) {
 res.render('register.ejs')
}

profileController.doRegister = function(req, res) {
  res.render('register.ejs')
}

profileController.profile = function(req, res) {
  if(req.user){
  res.render('profile.ejs')
  } else{
    res.redirect('/login')
  }
}

profileController.goToEdit = function(req, res) {
  if(req.user){
    res.render('edit-profile.ejs')
    } else{
      res.redirect('/login')
    }
}

profileController.doEdit = function(req, res) {

}


module.exports = profileController
