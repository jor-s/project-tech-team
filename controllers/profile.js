const schema = require('../models/user')
const fetch = require("node-fetch");
const api_url = 'http://pebble-pickup.herokuapp.com/tweets'
<<<<<<< HEAD
=======
const bcrypt = require('bcrypt')
const validator = require('express-validator')

const saltRounds = 10;

>>>>>>> e355b18fd24ebd2fa4f351ba84e5cdcf3ba63af3
let profileController = {}

profileController.home = function(req, res) {
  console.log(req.session)
  res.render('index.ejs')
}

profileController.logIn = function(req, res) {
  res.render('login.ejs')
}

<<<<<<< HEAD
profileController.doLogin = function (req, res, ) {

=======
profileController.doLogin = function(req, res, ) {
  console.log(req.rateLimit)
>>>>>>> e355b18fd24ebd2fa4f351ba84e5cdcf3ba63af3
  res.redirect('profile')
}

profileController.goToRegister = function(req, res) {
  res.render('register.ejs')
}

profileController.doRegister = function(req, res) {
  let password = req.body.password;

  bcrypt.genSalt(saltRounds, (err, salt) => { //generate salt rounds
    bcrypt.hash(password, salt,(err, hash) => { //Hash the password from req.body.password

      let item = new schema({
        name: req.body.name,
        email: req.body.email,
        password: hash
      })

      item.save((err) => {
        if (err) {
          return err(err)
        } else {
          console.log('registerd info: ' + item)
          console.log('has been added')
          res.render('login')
        }
      })
    })
  })
}

profileController.profile = function(req, res) {
  if (req.user) {
    res.render('profile.ejs')
  } else {
    res.redirect('login')
  }
}

profileController.goToEdit = function(req, res) {
  if (req.user) {
    res.render('edit-profile.ejs')
  } else {
    res.redirect('login')
  }
}

profileController.doEdit = function(req, res) {
  let filePath = req.file.path
  let randomCheck = req.body.pickupBox
  let name = req.body.name
  let userId = req.user.id
  let userAge = req.body.age
  let userPreference = req.body.genderPreference
  let userHobby = req.body.hobby

  console.log('checkbox is: ', req.body.pickupBox)

  //if checkbox has been checked, connect to api to choose random pickupline
  if (randomCheck) {
    //make connection with API
    fetch(api_url)
      .then(function(response) {
        // console.log(response)
        return response.json()
      })
      .then(function(json) {
        //taking the list of json pickuplines and putting them in a variable
        let pickupLines = json
        //here I choose which pickupline I want to use. the list consists out of an array so I picked an object within that array
        //random picker for array
        console.log('pickupline length is: ', pickupLines.length)
        let randomLine = Math.floor(Math.random() * pickupLines.length - 1);
        let myLine = pickupLines[randomLine]
        //here I take the key value from the object. tweet is the pickupline from that object
        let temp = myLine.tweet
        console.log('pickupline is ', temp)

        schema.findOneAndUpdate({
          _id: userId
        }, {
          $set: {
            pickupline: temp,
            name: name,
            picture: filePath,
            age: userAge,
            preferences: userPreference,
            hobby: userHobby
          }
        }, {
          useFineAndModify: false
        }, function(err) {
          if (err) {
            console.log('something went wrong when i tried to update: ', err)
          } else {
            console.log('account has been updated')
          }
        })
        res.render('profile.ejs', {
          pickupLine: temp
        })
        return temp
      })
      .catch(function(err) {
        if (err) {
          console.log(err)
        }
      })
  } else {
    console.log('checkbox not ticked')
    let sentence = req.body.pickupText
    schema.findOneAndUpdate({
      _id: userId
    }, {
      $set: {
        pickupline: sentence,
        name: name,
        picture: filePath,
        age: userAge,
        preferences: userPreference,
        hobby: userHobby
      }
    }, {
      useFineAndModify: false
    }, function(err) {
      if (err) {
        console.log('something went wrong when i tried to update: ', err)
      } else {
        console.log('account has been updated without checkbox tick')
        res.render('profile')
      }
    })
  }
}

module.exports = profileController
