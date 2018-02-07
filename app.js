const express = require('express')
const app = express()
const body_parser = require('body-parser')
const PORT = process.env.PORT || 8080

// BodyParser
app.use(body_parser.urlencoded({ extended: false }))
app.use(body_parser.json())

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

// Routes
require('./routes/api.js')(app)
require('./routes/html.js')(app)

app.listen(PORT, () => console.log(`App is listening on PORT ${PORT}`))