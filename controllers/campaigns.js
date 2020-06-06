const express = require('express');
const router = express.Router();
const Campaigns = require('../models/campaigns.js');

//put campaigns routes here

router.get('/new', (req, res) => {
  res.send('new campaign form here')
})

router.get('/view', (req, res) => {
  res.send('view campaign details here')
})

router.get('/edit', (req, res) => {
  res.send('edit campaign details here')
})

module.exports = router