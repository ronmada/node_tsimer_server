const Place = require('../models/place')

exports.getlocations = async (req, res, next) => {
  try {
    const regexp = new RegExp(req.params.location, 'gi')
    const locationList = await Place.find(
      { location: { $regex: regexp } },
      '-_id -__v'
    ).exec()
    let locationsSet = new Set()
    for (let i in locationList) {
      locationsSet.add(locationList[i].location)
    }
    const locationsSortedArray = [...locationsSet]
    locationsSortedArray.sort()
    res.locations = locationsSortedArray
    console.log(
      `number of results from this regexp ${regexp}: ${locationsSortedArray.length}`
    )
    next()
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}
