const express = require('express');
const router = express.Router();
const Campaigns = require('../models/campaigns.js');

express().use('./public', express.static('public'))

const isAuthenticated = (req, res, next) => {
  if (req.session.currentUser) {
    return next()
  } else {
    res.redirect('/user/login')
  }
}

//POST REQUESTS
router.post('/new/add', (req, res) => {
  console.log(req.body.chars)
  if (req.body.viewable === 'on'){
    req.body.viewable = true;
  } else {
    req.body.viewable = false;
  }
  console.log(req.body.chars)
  req.body.chars = req.body.chars.split(',')
  Campaigns.create(req.body, (err, addition) => {
    if (err){
      console.log(err)
    } else {
      console.log(addition)
      res.redirect('/')
    }
  }) 
})

//GET REQUESTS
router.get('/new', isAuthenticated, (req, res) => {
  res.render('newCampaign.ejs', 
    {
      thisUser: req.session.currentUser
    }
  )
})

router.get('/view/:id', isAuthenticated, (req, res) => {
  res.render('view.ejs', 
    {
      thisUser: req.session.currentUser,
      userCampaign: req.session.currentUser
    }
  )
})

router.get('/edit', isAuthenticated, (req, res) => {
  res.send('edit campaign details here')
})

module.exports = router