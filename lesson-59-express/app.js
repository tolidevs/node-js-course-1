// import express
const express = require('express')
// call instance of express
const app = express()

// add middleware - here can add external packages - can add any function that has the format (req, res, next) have to call next at the end of each one or it will not move on to the next package. reads each one top to bottom.
// if want middleware that will apply to all requests apply it before the one where the response is sent
app.use((request, response, next) => {
    console.log("I always run!!!")
    next() //allows the request to continue to the next middleware in the queue
})

// when get to the end of the middleware need to send a response. automatically sets content-type based on what you send
// if sending response do not use next(), this will result in error - this signifies the end of the request/response cycle, cannot go to next middleware after response is sent.
// add path for routes - '/' default - works in a way that anything starting with that path will return the specified data - so need to write functions in order of most to least specific
app.use('/add-product', (request, response, next) => {
    console.log("I'm another middleware")
    response.send('<h1>Add Product Page</h1>')
})

app.use('/', (request, response, next) => {
    console.log("I'm another middleware")
    response.send('<h1>Hello from Express!</h1>')
})

// create server and set port for server to listen
app.listen(3000)