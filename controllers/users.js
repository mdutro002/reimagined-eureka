const express = require('express');
const bcrypt = require('bcrypt')
const session = require('express-session')
const router = express.Router();
const Users = require('../models/users.js');
const Campaigns = require('../models/campaigns.js')

express().use('../public', express.static('public'))

const isAuthenticated = (req, res, next) => {
  if (req.session.currentUser) {
    return next()
  } else {
    res.redirect('/user/login')
  }
}

//GET REQUESTS
router.get('/signup', (req, res) => {
  res.render("signup.ejs",
    {
      loggedIn: req.session.currentUser
    }
  )
})

router.get('/login', (req, res) => {
  res.render("login.ejs", 
    {
      loggedIn: req.session.currentUser
    }
  )
})

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/')
  })
})

router.get('/myAccount',  isAuthenticated, (req, res) => {
  res.render('myAccount.ejs', 
    {
      thisUser: req.session.currentUser,
      loggedIn: req.session.currentUser
    }
  );
})

router.get('/myCampaigns', isAuthenticated, (req, res) => {
  Campaigns.find({ownedBy: req.session.currentUser._id}, (err, campQ) => {
    res.render('myCampaigns.ejs', 
      {
        thisUser: req.session.currentUser,
        Campaigns: campQ,
        loggedIn: req.session.currentUser
      }
    ); 
  })
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
      res.redirect('/user/login')
    }
  })
})

//updatePW
router.post('/updatePW', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  Users.findByIdAndUpdate({ _id: req.body.id}, { password: req.body.password}, (err, result) => {
    if (err){
      console.log(err);
    } else {
      req.session.destroy(() => {
        res.redirect('/user/myCampaigns')
      })
    }
  })
})

router.post('/updateName', (req, res) => {
  Users.findByIdAndUpdate({ _id: req.body.id}, { username: req.body.username}, (err, result) => {
    if (err){
      console.log(err);
    } else {
      req.session.destroy(() => {
        res.redirect('/user/myCampaigns')
      })
    }
  })
})

//DELETE
router.delete('/delete', (req, res) => {
  Campaigns.deleteMany({ownedBy: req.body.id}, (err, deletedC) => {
    if (err){
      res.send(err)
      console.log(err)
    }
    Users.findByIdAndDelete(req.body.id, (err, deleted) => {
      if (err){
        res.send(err)
        console.log(err)
      } else {
        req.session.destroy(() => {
          res.redirect('/')
        })
      }
    })
  })
})

module.exports = router