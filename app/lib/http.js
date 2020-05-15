'use strict'

const http = require('http')
const fs = require('fs')

module.exports = app => {
  const httpServer = http.Server(app.express)
  const pid = process.pid.toString()
  httpServer.listen(app.config.port, () => {
    app.log.info(`please open http://localhost:${app.config.port}`)
    app.log.debug(app.config)
    app.log.info(
        `Node v${process.env.node_version}, NODE_ENV: ${process.env.NODE_ENV}`
    )

    fs.writeFile(`${app.root}/server.pid`, pid, err => {
      if (err) throw err
    })
  })

  return httpServer
}
