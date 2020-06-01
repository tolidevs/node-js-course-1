// import express
const express = require('express')
// call instance of express
const app = express()

// add middleware - here can add external packages - can add any function that has the format (req, res, next) have to call next at the end of each one or it will not move on to the next package. reads each one top to bottom.
app.use((request, response, next) => {
    console.log("I'm some middleware")
    next() //allows the request to continue to the next middleware in the queue
})
// when get to the end of the middleware need to send a response. automatically sets content-type based on what you send
app.use((request, response, next) => {
    console.log("I'm another middleware")
    response.send
})

// create server and set port for server to listen
app.listen(3000)