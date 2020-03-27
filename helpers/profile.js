const schema = require('../models/user')

let profileController={}

profileController.home = function(req, res) {
  res.render('index.ejs')
}


profileController.doLogin = function(req, res) {

}

profileController.doRegister = function(req, res) {

}

profileController.profile = function(req, res) {
  res.render('profile.ejs')
}

module.exports = profileController
