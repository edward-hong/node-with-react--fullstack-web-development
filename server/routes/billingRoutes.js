const { stripeSecretKey } = require('../config/keys')

const stripe = require('stripe')(stripeSecretKey)

module.exports = (app) => {
  app.post('/api/stripe', (req, res) => {})
}
