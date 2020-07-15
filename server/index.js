const express = require('express')
const mongoose = require('mongoose')

const { mongoURI } = require('./config/keys')

require('./models/User')

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })

const app = express()

require('./services/passport')
require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000

app.listen(PORT)
