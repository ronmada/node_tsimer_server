const fs = require('fs')
const Place = require('./models/place')

module.exports = () => {
  fs.readFile('./hotel_app4.json', 'utf8', async (err, jsonString) => {
    if (err) {
      console.log('Error reading file from disk:', err)
      return
    }
    try {
      //  await Place.db.dropCollection('places')
      //  console.log("dropped collection")
      let place_json = new Place()
      place_json = JSON.parse(jsonString)
      console.log(
        'trying to insert docs to DB: 1st doc name:>>> ',
        place_json[0].name
      )
      const mongooseDocuments = await Place.insertMany(place_json)
      console.log(
        `Successful insert to DB. amount of docs inserted>>>  ${mongooseDocuments.length}   ready for next command`
      )
    } catch (err) {
      console.log('Failure' + err)
    }
  })
}
