'use strict'
global.__base = __dirname + '/'
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const session = require('express-session')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const LOG_PATH = path.join(__dirname, '..', 'logs')
const {config}=require(`${__base}/utils/config`)
const appRouter=require(`${__base}/router`)
const uuid = require('uuid/v4')
const app = express()
const PORT = process.env.port || config.port

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

app.use(session({
  cookie: {
    httpOnly: false,
    domain: '.manch.test',
    secure: false,
    maxAge: 24 * 3600 * 1000, // 1 day
    path: '/'
  },
  genid: function (req) {
    return uuid()
  },
  name: 'sessionId',
  proxy: true,
  secret: 'artnayemoh',
  resave: false,
  saveUninitialized: true,
  store: session.MemoryStore()
}))

app.use('/',appRouter)
app.listen(PORT, () => {
    console.log(`App started listening on port number ${PORT}`)
})