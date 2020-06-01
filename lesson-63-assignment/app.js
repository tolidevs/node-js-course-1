const express = require('express')

const app = express()

app.use('/users', (request, response, next) => {
    console.log("I'm the users middleware")
    response.send('<h1>Users page!</h1>')
})


app.use('/', (request, response, next) => {
    console.log("I'm the main page middleware")
    response.send('<h1>Main page!</h1>')
})


app.listen(3000)


