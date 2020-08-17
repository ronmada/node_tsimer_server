const express = require('express');
const path = require('path');
const router = express.Router()
const mongoose = require('mongoose');
const Place = require('./models/place')
const fs = require('fs')
const app = express();
app.use(express.json()); // Make sure it comes back as json

const uri = "mongodb+srv://Ron_Wexler:Pq6IvgnViDFaBDxu@bookhotelapp.skjso.mongodb.net/dbdb?retryWrites=true&w=majority";
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).
//   catch(error => console.log(error));
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).
  then(() =>
    console.log("Connected to DB"),
    err => console.log(err)
  );

  fs.readFile('./hotel_data.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("Error reading file from disk:", err)
        return
    }
    try {
        const jsonStringss = JSON.parse(jsonString)
        const arr = [new Place()]
        // console.log("ARRRRR" + arr[1])
        const place = new Place(jsonStringss[0])
        const copier = [];
        jsonStringss.forEach((element) => {
         copier.push(element)
         arr.push(element)
        })
        console.log("H" +JSON.stringify(copier[3]) )
        // console.log("1st place:" + place) // => "Customer address is: Infinity Loop Drive"} catch(err) {
        // console.log("place name is:", jsonStringss[0]['price_night']) // => "Customer address is: Infinity Loop Drive"} catch(err) {
    }catch{
      console.log('Error parsing JSON string:', err)
    }
})

  
app.get('/', async (req, res) => {
  try {
    const places = await Place.find()
    res.json(places);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.post('/', async (req, res) => {
  const place = new Place({
    name: req.body.name,
    wifi: req.body.wifi,
    price_night: req.body.price_night
  })
  console.log("Hello")
  try {
    const newPlace = await place.save()
    res.status(201).json(newPlace)
  } catch (err) {
    res.status(400).json({ messge: err.message })
  }


})

app.get('/favicon.ico', (req, res) => res.status(204));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

