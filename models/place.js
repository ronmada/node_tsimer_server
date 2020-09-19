const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: String,
  description: String,
  score_avg: Number,
  wifi: Boolean,
  handicap: Boolean,
  swimming_pool: Boolean,
  animal: Boolean,
  shaabaat_keep: Boolean,
  price_night: Number,
  city: String,
  country: String,
  address: String,
  phone: String,
  email: String,
  location: String,
  picture: String,
})

module.exports = mongoose.model('Place', placeSchema)
