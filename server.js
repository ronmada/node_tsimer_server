require('dotenv').config()
const express = require('express');
const path = require('path');
const router = express.Router()
const mongoose = require('mongoose');
const Place = require('./models/place')
const fs = require('fs')
const app = express();
app.use(express.json()); // Make sure it comes back as json
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).
//   catch(error => console.log(error));
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }).
  then(() => {
    console.log("Connected to DB")
    console.log("Hello world : "+ process.env.DATABASE_URL)
    //  mongoose.connection.db.dropCollection('places', function(err, result) {}); //drop collection

    // fs.readFile('./hotel_data.json', 'utf8', async (err, jsonString) => {
    //   if (err) {
    //     console.log("Error reading file from disk:", err)
    //     return
    //   }
    //   console.log("after connection")
    //   try {
    //     const arr = [new Place()]
    //     const bb = new Place
    //     let jsontringssssss = new Place()
    //     jsontringssssss = JSON.parse(jsonString)
    //     const jsonStringss = JSON.parse(jsonString)
    //     console.log(jsontringssssss)
    //     await Place.insertMany(jsontringssssss)
    //       .then(function (mongooseDocuments) {
    //         /* ... */
    //       })
    //       .catch(function (err) {
    //         /* Error handling */
    //       });
    //     // const newPlace = await arr.insertMany()
    //     console.log("Success")
    //   } catch (err) {
    //     console.log("Failure" + err)
    //   }
    // })
  },
    err => console.log("some error connecting to DB : " + { messge: err.message })
  );
const placesRouter = require('./routes/places')

app.use('/places', placesRouter)

// fs.readFile('./hotel_data.json', 'utf8', async (err, jsonString) => {
//   if (err) {
//     console.log("Error reading file from disk:", err)
//     return
//   }
//   try {
//     const jsonStringss = JSON.parse(jsonString)
//     const arr = [new Place()]
//     // console.log("ARRRRR" + arr[1])
//     const place = new Place(jsonStringss[0])
//     const copier = [];
//     jsonStringss.forEach((element) => {
//       copier.push(element)
//       arr.push(element)
//     })
//     console.log("H" + JSON.stringify(copier[3]))
//     console.log(arr)

//     try {
//       const newPlace = await arr.save()
//       res.status(201).json(newPlace)
//   } catch (err) {
//       res.status(400).json({ messge: err.message })
//   }
//     // console.log("1st place:" + place) // => "Customer address is: Infinity Loop Drive"} catch(err) {
//     // console.log("place name is:", jsonStringss[0]['price_night']) // => "Customer address is: Infinity Loop Drive"} catch(err) {
//   } catch{
//     console.log('Error parsing JSON string:', err)
//   }
// })





// app.get('/favicon.ico', (req, res) => res.status(204));


