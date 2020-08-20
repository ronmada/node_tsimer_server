const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    name: String,
    kind_of_place: String,
    area: String,
    description: String,
    score_avg: Number,
    wifi: Boolean,
    handicap: Boolean,
    swimming_pool: Boolean,
    animal: Boolean,
    shaabaat_keep: Boolean,
    price_night: Number,
});

module.exports = mongoose.model("Place", placeSchema);