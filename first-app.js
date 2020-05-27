// give access to file system
const fs = require('fs')

// create file synchronously (name, content)
fs.writeFileSync('hello.txt','Hello from Node.js')