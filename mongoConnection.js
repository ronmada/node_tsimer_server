const mongoose = require('mongoose');


module.exports = function () {
    console.log("Trying to connect to DB")
    mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }).
        then(() => {
            console.log("Connected to DB")
            //  mongoose.connection.db.dropCollection('places', function(err, result) {}); //drop collection
        },
            err => console.log("some error connecting to DB : " + { messge: err.message })
        );
}