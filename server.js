require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoConnection = require('./mongoConnection')
const routes = require('./routes')
// const locationScript = require('./locationScripts')
// const readFile = require("./readFile");
/*global process*/
/*eslint no-undef: "error"*/
const appUse = require('./appUse')
const app = express() //init express app
exports.app = app

app.use(express.json()) // Make sure it comes back as json
app.use(express.urlencoded({ extended: false }))
app.use(cors())
const PORT = process.env.PORT || 5000 //set port

// readFile()    // get all places
// locationScript() //get all locations from one collection and insert it to other collection for performance
app.use(appUse.helloFunc)

mongoConnection()

routes()
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`)) //start server

// app.get('/favicon.ico', (req, res) => res.status(204));
