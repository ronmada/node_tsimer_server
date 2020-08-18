const express = require('express')
const router = express.Router()
const Place = require('../models/place')

//getting all
router.get('/', async (req, res) => {
    try {
        const places = await Place.find()
        res.json(places);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//getting one
router.get('/:id',getPlace, (req, res) => {
    res.json(res.place)
})
//creating one
router.post('/', async (req, res) => {
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

//updating one
router.patch('/:id', (req, res) => {

})
//delete one
router.delete('/:id', (req, res) => {

})

async function getPlace(req, res, next) {
    let place
    try {
        place = await Place.findById(req.params.id)
        console.log(place)
        if (place == null) {
            return res.status(404).json({message : 'cannot find place'})
        }
    } catch (err) {
        return res.status(500).json({message : err.message})
    }
    res.place = place
    next()
}
module.exports = router