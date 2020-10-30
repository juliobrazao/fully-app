const express = require('express')
const app = express()

const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true}))

app.use('/assets', express.static("assets"))

module.exports = app