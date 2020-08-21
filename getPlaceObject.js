module.exports = function (req) {
    const obj = {
        "area": req.body.area,
        "animal": req.body.animal,
        "handicap": req.body.handicap,
        "kind_of_place": req.body.kind_of_place,
        "description": req.body.description,
        "score_avg": req.body.score_avg,
        "wifi": req.body.wifi,
        "handicap": req.body.handicap,
        "swimming_pool": req.body.swimming_pool,
        "shaabaat_keep": req.body.shaabaat_keep,
        "price_night": req.body.price_night
    }
    Object.keys(obj).forEach(key => obj[key] === undefined && delete obj[key])
    return obj
}