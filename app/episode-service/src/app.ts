import createError from 'http-errors'
import express from 'express'
// import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

var indexRouter = require('./routes/index')

var app = express()

require('dotenv').config()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api', indexRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error message
  res.status(err.status || 500)
  res.send(err)
})

module.exports = app
