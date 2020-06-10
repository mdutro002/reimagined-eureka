const express = require('express');
const router = express.Router();
const Campaigns = require('../models/campaigns.js');

express().use('../public', express.static('public')) /* I don't think I need this but I'm scared of deleting and brekaing everything sorry not sorry */

/* DEBUGGED EDIT USING THIS RESOURCE:
https://stackoverflow.com/questions/37267042/mongoose-findoneandupdate-updating-multiple-fields
*/

const isAuthenticated = (req, res, next) => {
  if (req.session.currentUser) {
    return next()
  } else {
    res.redirect('/user/login')
  }
}

//POST REQUESTS
router.post('/new/add', (req, res) => {
  if (req.body.viewable === 'on'){
    req.body.viewable = true;
  } else {
    req.body.viewable = false;
  }
  if (req.body.imgUrl === ""){
    req.body.imgUrl = "https://static.thenounproject.com/png/340719-200.png"
  }
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

router.post('/edit/:id', (req, res) => {
  //data sanitation
  if (req.body.viewable === 'on'){
    req.body.viewable = true;
  } else {
    req.body.viewable = false;
  }
  if (req.body.imgUrl === ""){
    req.body.imgUrl = "https://static.thenounproject.com/png/340719-200.png"
  }
  req.body.chars = req.body.chars.split(',')
  //data update
  Campaigns.findByIdAndUpdate(
    { _id: req.params.id}, 
    {$set:  {nickName: req.body.nickName, imgUrl: req.body.imgUrl, chars: req.body.chars, viewable: req.body.viewable} },
    function (err, updatedData){
    if (err){
      console.log(err)
      res.send(err)
    } else {
      console.log(updatedData)
      res.redirect('/')
    }
  })
})

//GET REQUESTS
router.get('/new', isAuthenticated, (req, res) => {
  res.render('newCampaign.ejs', 
    {
      thisUser: req.session.currentUser,
      loggedIn: req.session.currentUser,
    }
  )
})

router.get('/view/:id', isAuthenticated, (req, res) => {
  Campaigns.findById(req.params.id, (err, thisCampaign) => {
    res.render('view.ejs',
      {
        thisUser: req.session.currentUser,
        loggedIn: req.session.currentUser,
        thisCampaign: thisCampaign
      }
    )
  })
})

router.get('/edit/:id', isAuthenticated, (req, res) => {
  Campaigns.findById(req.params.id, (err, thisCampaign) => {
    res.render('editCampaign.ejs',
      {
        thisUser: req.session.currentUser,
        loggedIn: req.session.currentUser,
        thisCampaign: thisCampaign
      }
    )
  })

})

//DELETE REQUESTS
router.delete('campaign/delete', (req, res) => {
  Campaigns.findByIdAndDelete(req.body.id, (err, deleted) => {
    if (err){
      console.log(err)
      res.send(err)
    } else{
      res.redirect('/user/myCampaigns')
    }
  })
})


module.exports = router