const express = require('express');
const router = express.Router();

//put users routes here
router.get('/new', (req, res) => {
  res.send("This is where users sign up")
})

router.get('/view/:id', (req, res) => {
  res.send("This is where you'd view an individual profile")
})

module.exports = router