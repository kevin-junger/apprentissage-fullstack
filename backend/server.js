const http = require("http")

const server = http.createServer((req, res) => { res.end("Salut !") })

server.listen(process.env.PORT || 3000)
