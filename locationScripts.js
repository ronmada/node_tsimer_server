const Place = require('./models/place')
const Location = require('./models/location')

exports.func = async () => {
  console.log('init location Script')
  try {
    const locations = await Place.find({}, 'location -_id').exec()
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
    const docs = await Location.insertMany(arrInsert)
    console.log(`succsessfuly inserted ${docs.length} docs to a collection`)
  } catch (err) {
    return `custom error: ${err}`
  }
}
//   console.log(locations)
