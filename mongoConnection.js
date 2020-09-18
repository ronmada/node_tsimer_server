const mongoose = require('mongoose')
/*global process*/
/*eslint no-undef: "error"*/

module.exports = async () => {
  try {
    console.log('Trying to connect to DB')
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Connected to DB successfully')
  } catch (err) {
    console.log('some error connecting to DB : ', err)
  }
}
