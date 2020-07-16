const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')

const { mongoURI, cookieKey } = require('./config/keys')

require('./models/User')

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })

const app = express()

app.use(express.json())

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [cookieKey],
  }),
)

app.use(passport.initialize())
app.use(passport.session())

require('./services/passport')
require('./routes/authRoutes')(app)
require('./routes/billingRoutes')(app)

const PORT = process.env.PORT || 5000

app.listen(PORT)
