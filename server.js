require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoConnection = require("./mongoConnection");
// const readFile = require("./readFile");
/*global process*/
/*eslint no-undef: "error"*/
const app = express(); //init express app
app.use(express.json()); // Make sure it comes back as json
app.use(express.urlencoded({ extended: false }));
app.use(cors());
const PORT = process.env.PORT || 5000; //set port

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); //start server
//readFile()    // get all places
mongoConnection();
routersInit();
app.get("/", () => {
  console.log("main root");
});
function routersInit() {
  const placesRouter = require("./routes/places");
  app.use("/places", placesRouter);
}

// app.get('/favicon.ico', (req, res) => res.status(204));
