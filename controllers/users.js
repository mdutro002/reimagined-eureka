const express = require('express');
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


module.exports = router