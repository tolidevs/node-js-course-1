const path = require('path')

const express = require('express')

const router = express.Router()

router.use((req, resp, next) => {
    resp.status(404).sendFile(path.join(__dirname, "..", "views", "404.html"))
})

module.exports = router