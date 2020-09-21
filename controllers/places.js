const Place = require('../models/place')

exports.getPlacesInfo = async (req, res, next) => {
  console.log('parameters from form:')
  console.log(req.query)
  req.query.location = new RegExp(req.query.location, 'gi')
  console.log(req.query)
  try {
    const placeListResults = await Place.find(req.query, '-_id -__v',).limit(50).sort('city').exec()
    console.log(`number of matched: ${placeListResults.length}`)
    res.placeListResults = placeListResults
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
  next()
}

// exports.getHotels = async (req, res, next) => {
//   try {
//     const regexp = new RegExp(req.params.location, 'gi')
//     const hotelList = await placeListResults.find(
//       { location: { $regex: regexp } },
//       '-_id -__v'
//     ).exec()
//     res.hotelsList = hotelList
//     console.log(
//       `number of results from this regexp ${regexp}: ${hotelList.length}`
//     )
//     next()
//   } catch (err) {
//     return res.status(500).json({ message: err.message })
//   }
// }
