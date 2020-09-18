const server = require('./server')

const getRoutes = () => {
  const placesRouter = require('./routes/places')
  const locationsRouter = require('./routes/locations')
  server.app.use('/places', placesRouter)
  server.app.use('/locations', locationsRouter)
  console.log('Routes init successfully')
}

module.exports = getRoutes
