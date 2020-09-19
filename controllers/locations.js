const Location = require('../models/location')

exports.getlocations = async (req, res, next) => {
  try {
    const regexp = new RegExp(req.params.location, 'gi')
    const locationList = await Location.find(
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
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
  next()
}
