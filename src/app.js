const express = require('express')
const app = express()

require('dotenv').config()

app.listen(process.env.PORT,() => {
    console.log(`The server is running at Port: ${process.env.PORT}`)
})
