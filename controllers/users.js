const express = require('express');
const router = express.Router();
const Users = require('../models/users.js');

//put users routes here

router.get('/new', (req, res) => {
  res.render("signup.ejs")
})

router.get('/view/:id', (req, res) => {
  res.send("This is where you'd view an individual profile")
})

router.get('/seedUsers/toCloudDB', (req, res) => {
  Users.create(
    {
      username: "userA",
      password: "coffee",
      characters: ['Belethor', 'Harmy']
    },
    {
      username: "userB",
      password: "coffee",
      characters: ['Lothar']
    },
    {
      username: "userC",
      password: "coffee",
      characters: ['Ithilene', 'Aragorn', 'Leslie']
    }
  )
  res.redirect('/');
})

module.exports = router