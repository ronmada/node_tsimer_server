module.exports = function (req) {
    let _body = {}
    if(Object.keys(req.body).length) console.log("from body")
    else console.log("from query")
    Object.keys(req.body).length ? _body = req.body : _body = req.query
    const obj = {
        "area": _body.area,
        "animal": _body.animal,
        "handicap": _body.handicap,
        "kind_of_place": _body.kind_of_place,
        "description": _body.description,
        "score_avg": _body.score_avg,
        "wifi": _body.wifi,
        "swimming_pool": _body.swimming_pool,
        "shaabaat_keep": _body.shaabaat_keep,
        "price_night": _body.price_night,
        "city": _body.city,
        "country": _body.country,
        "address": _body.address,
        "phone": _body.phone,
        "email": _body.email,
        "location" : _body.location
    }
    Object.keys(obj).forEach(key => (obj[key] ===  undefined) && delete obj[key])
    console.log("params")
    console.log(_body)
    return obj
}