'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

module.exports = app => {
    const exp = express()

    exp.use(bodyParser.urlencoded({extended: false}))
    exp.use(morgan('dev'))
    exp.use(bodyParser.urlencoded({extended: false}))
    exp.use(bodyParser.json())

    return exp
}
