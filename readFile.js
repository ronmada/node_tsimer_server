const fs = require('fs')
const Place = require('./models/place')

module.exports = function () {
    fs.readFile('./hotel_app_data.json', 'utf8', async (err, jsonString) => {
        if (err) {
            console.log("Error reading file from disk:", err)
            return
        }
        try {
            let place_json = new Place()
            place_json = JSON.parse(jsonString)
            console.log(place_json[0])
            await Place.insertMany(place_json)
                .then(mongooseDocuments => {
                    console.log("Success" + mongooseDocuments[0])
                })
                .catch(err => {
                    console.log("something went wrong  " + err)
                });
        } catch (err) {
            console.log("Failure" + err)
        }
    })
}
