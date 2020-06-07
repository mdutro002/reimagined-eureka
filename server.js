// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const session = require('express-session')
const app = express()
const db = mongoose.connection
require('dotenv').config()

//PORT
const PORT = process.env.PORT || 3333

// DATABASE
const MONGODB_URI = process.env.MONGODBURI
mongoose.connect(MONGODB_URI , { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
)
//DB CONNECT MSSGS
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

//MIDDLEWARE
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false}))
app.use(methodOverride('_method'))
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}))

//ROUTERS
const campaignCont = require('./controllers/campaigns.js');
app.use('/campaigns', campaignCont);

const userCont = require('./controllers/users.js');
app.use('/user', userCont);

const sessionsCont = require('./controllers/sessions.js')
app.use('/sessions', sessionsCont)

// ROUTES
app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.listen(PORT, () => {
  console.log('Listening on port:', PORT)
})