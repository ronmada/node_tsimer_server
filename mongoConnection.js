const mongoose = require("mongoose");
// const readFile = require("./readFile");

/*global process*/
/*eslint no-undef: "error"*/

module.exports = function () {
  console.log("Trying to connect to DB");
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to DB");
    //    mongoose.connection.db.dropCollection("places"); //drop collection
    //    readFile();
    })
    .catch((err) =>
      console.log("some error connecting to DB : " + { messge: err.message })
    );
};
