const User = require('../models/User')
const fetch = require("node-fetch");
const api_url = 'http://pebble-pickup.herokuapp.com/tweets'
const bcrypt = require('bcrypt')
const validator = require('express-validator')

const saltRounds = 10;



exports.home = (req, res) => {
  console.log(req.session)
  res.render('index.ejs')
}

exports.profile =  (req, res) => {
  if (req.user) {
    res.render('profile.ejs', {
      user: req.user
    })
  } else {
    res.redirect('/login')
  }
}

exports.goToEdit =  (req, res) => {
  if (req.user) {
    res.render('edit-profile.ejs')
  } else {
    res.redirect('login')
  }
}

exports.doEdit = (req, res) => {
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

        User.findOneAndUpdate({
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
    User.findOneAndUpdate({
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

