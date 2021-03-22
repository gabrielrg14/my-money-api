const port = process.env.PORT

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const queryParser = require('express-query-int')

const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server