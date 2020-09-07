const express = require("express");
const router = express.Router();
const Place = require("../models/place");
const getPlaceObject = require("../getPlaceObject");

var i = 0;
var j = 0;
//getting all
router.get("/", async (req, res) => {
  console.log("GETTING ALL ROUTE : " + ++i);
  try {
    const places = await Place.find();
    res.json(places);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//getting one
router.get("/id/:id", getPlace, (req, res) => {
  console.log("GETTING ONE ROUTE : " + ++j);
  res.json(res.place);
});

//creating one
router.post("/", async (req, res) => {
  const place = new Place({
    name: req.body.name,
    wifi: req.body.wifi,
    price_night: req.body.price_night,
  });
  console.log("Hello");
  try {
    const newPlace = await place.save();
    res.status(201).json(newPlace);
  } catch (err) {
    res.status(400).json({ messge: err.message });
  }
});

//updating one
router.patch("/:id", getPlace, async (req, res) => {
  res.place.name = req.body.name;
  try {
    console.log("saving changes for " + res.place["_id"]);
    console.log("new name should be " + req.body.name);
    const updatedPlace = await res.place.save();
    console.log("AA");
    res.status(201).json(updatedPlace);
    console.log("BB");
  } catch (err) {
    res.status(400).json({ messge: err.message });
  }
});
//delete one
router.delete("/:id", getPlace, async (req, res) => {
  const id = res.place["_id"];
  try {
    console.log("deleteing  " + id);
    const newPlace = await res.place.delete();
    console.log(
      `${id} successfuly deleted.. also the deleted place was : ${newPlace}`
    );
    res.status(201).json(newPlace);
  } catch (err) {
    res.status(500).json({ messge: err.message });
  }
});
router.get("/locations", getlocations, async (req, res) => {
  res.status(200).json(res.locations);
});
async function getlocations(req, res, next) {
  console.log("getting all possible locations from DB");
  try {
    let loca = await Place.find({}, "location -_id").lean();
    let arr = []
    for (let index in loca) {
      arr.push(loca[index].location)
    }
    [...new Set(arr)];
    arr.sort();
    console.log("number of locations " + arr.length);
    res.locations = arr;
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  next();
}
//get area,animal
router.get("/special", getSpecial, async (req, res) => {
  res.status(200).json(res.place);
});
// router.post('/special', getSpecial, async (req, res) => {
//     res.status(200).json(res.place)
// })

async function getSpecial(req, res, next) {
  console.log(req.headers);
  console.log("Get special middleware");
  const obj = getPlaceObject(req);
  try {
    let place = await Place.find(obj).exec();
    console.log(`number of matched: ${place.length}`);
    res.place = place;
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  next();
}

async function getPlace(req, res, next) {
  let place = new Place();
  try {
    place = await Place.findById(req.params.id);
    console.log(place);
    if (place == null) {
      return res.status(404).json({ message: "cannot find place" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.place = place;
  next();
}
module.exports = router;
