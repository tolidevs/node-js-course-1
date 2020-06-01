const express = require('express')

const path = require('path')

const router = express.Router()

const rootDir = require('../utils/path')

router.get('/', (request, response, next) => {
    response.sendFile(path.join(rootDir, 'views', 'home.html'))
})

module.exports = router