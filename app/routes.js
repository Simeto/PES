'use strict'

const express = require('express')

module.exports = app => {
    const router = express.Router()

    app.express.use(app.config.apiBasePath, router)
    router.get('/', (req, res)=> {
        res.send('<h1>exooooooooooooooooooooo</h1>')
    })

}