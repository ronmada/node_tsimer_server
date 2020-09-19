const Place = require('./models/place')
const Location = require('./models/location')

module.exports = async () => {
  console.log('init location Script')
  try {
    const locations = await Place.find({}, 'location -_id').exec()
    console.log(`found ${locations.length} amount of locations`)
    const set = new Set()
    for (let index in locations) {
      set.add(locations[index].location)
    }
    const arr = [...set].sort()
    const arrInsert = []
    for (let elem of arr) {
      arrInsert.push({
        location: elem,
      })
    }
    await Location.db.dropCollection('locations')
    console.log('dropped collection: LOCATIONS')
    console.log('inserting locations to collection')
    const docs = await Location.insertMany(arrInsert)
    console.log(`succsessfuly inserted unique ${docs.length} docs to the collection`)
  } catch (err) {
    return `custom error: ${err}`
  }
}
//   console.log(locations)
