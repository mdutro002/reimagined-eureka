const express = require('express');
const router = express.Router();
const Campaigns = require('../models/campaigns.js');

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
  Campaigns.create(
    {ownedBy: req.body.ownedBy},
    {chars: req.body.chars},
    {viewable: req.body.viewable},
    {nickName: req.body.nickName},
    {imgUrl: req.body.imgUrl}, (err, addition) => {
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

router.get('/view', isAuthenticated, (req, res) => {
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