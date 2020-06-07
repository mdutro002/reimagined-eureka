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

//put campaigns routes here
router.get('/new', isAuthenticated, (req, res) => {
  res.render('newCampaign.ejs')
})

router.get('/view', isAuthenticated, (req, res) => {
  res.send('view campaign details here')
})

router.get('/edit', isAuthenticated, (req, res) => {
  res.send('edit campaign details here')
})

module.exports = router