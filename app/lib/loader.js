'use strict'

const path = require('path')
const glob = require('glob')

/**
 * loads all files from within a namespace
 * they should get exposed via app. (handlers)
 */
module.exports = (app, namespace) => {
    const obj = {}
    const cwd = path.join(__dirname, '..')
    glob.sync(`${namespace}/*.js`, { cwd }).forEach(f => {
        obj[path.basename(f, '.js')] = require(f)(app)
    })
    return obj
}
