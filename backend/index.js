'use strict'
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const session = require('express-session')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const LOG_PATH = path.join(__dirname, '..', 'logs')
const app = express()
const PORT = process.env.port || 4000

app.enable('strict routing')
app.enable('case sensitive routing')
app.enable('trust proxy')
app.set('etag', 'strong')
app.use(morgan('dev'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000
}))
app.use(bodyParser())
app.use(session())

app.listen(PORT, () => {
    console.log(`App started listening on port number ${PORT}`)
})