const express = require('express')
const router = express.Router()
const locations = require('../controllers/locations')

router.get('/:location', locations.getlocations, (req, res) => {
  res.status(200).json(res.locations)
})

module.exports = router
