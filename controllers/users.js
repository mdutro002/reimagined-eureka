const express = require('express');
const bcrypt = require('bcrypt')
const session = require('express-session')
const router = express.Router();
const Users = require('../models/users.js');

const isAuthenticated = (req, res, next) => {
  if (req.session.currentUser) {
    return next()
  } else {
    res.redirect('/user/login')
  }
}


//GET REQUESTS
router.get('/signup', (req, res) => {
  res.render("signup.ejs")
})

router.get('/login', (req, res) => {
  res.render("login.ejs")
})

router.get('/myAccount',  isAuthenticated, (req, res) => {
  res.render('myAccount.ejs', 
    {
      thisUser: req.session.currentUser
    }
  );
})

router.get('/myCampaigns', isAuthenticated, (req, res) => {
  res.render('myCampaigns.ejs', 
    {
      thisUser: req.session.currentUser
    }
  );
})


//POST REQUESTS
router.post('/signup', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  Users.create(req.body, (err, createdUser) => {
    if (err) {
      console.log(err)
      res.send('There was an an error - please try to create your account again')
    } else {
      console.log('user is created', createdUser)
      res.redirect('/')
    }
  })
})

router.post('/update', (req, res) => {
  Users.findByIdAndUpdate(req.body.id)
})

//DELETE
//this is running, but isn't deleting from the DB
router.delete('/delete', (req, res) => {
  Users.findByIdAndDelete(req.body.id, (err, deleted) => {
    if (err){
      res.send(err)
      console.log(err)
    } else {
      res.redirect('/')
    }
  })
})

module.exports = router