'use strict'

require('app-module-path').addPath(__dirname)

const routes = require('./routes')
const config = require('lib/config')
const log = require('lib/log')
const loader = require('lib/loader')
const express = require('lib/express')
const exceptions = require('exceptions')
const mongoose = require('lib/mongoose')
const server = require('lib/http')
const packageJson = require('../package')

const app = {
    name: packageJson.name,
    version: packageJson.version
}

app.root = __dirname
app.config = config('config')
app.log = log(app)
app.mongoose = mongoose(app)
app.express = express(app)
app.routes = routes(app)
app.errors = loader(app, 'errors')
app.exceptions = exceptions(app)
app.server = server(app)

module.exports = app