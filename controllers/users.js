const express = require('express');
const bcrypt = require('bcrypt')
const router = express.Router();
const Users = require('../models/users.js');

//put users routes here

router.get('/signup', (req, res) => {
  res.render("signup.ejs")
})

router.get('/login', (req, res) => {
  res.render("login.ejs")
})

router.get('/view/:id', (req, res) => {
  res.send("This is where you'd view an individual profile")
})

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

module.exports = router