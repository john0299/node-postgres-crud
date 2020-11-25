const express = require('express')
const app = express()
const userApi = require('../src/api/users')
const messageApi = require('../src/api/message')
const bodyParser = require('body-parser')

require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', userApi)
app.use('/api', messageApi)

app.listen(process.env.PORT,() => {
    console.log(`The server is running at Port: ${process.env.PORT}`)
})
