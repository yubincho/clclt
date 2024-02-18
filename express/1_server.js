const http = require("http")
const url = require('url')

const host = 'localhost'
const port = 3000

const server = http.createServer((req, res) => {
    

    res.writeHead(200, {'ContentType' : 'text/html'})
    res.end('<h1>Hello World</h1>') // send 아님, write로 하면 돌아가기만 함
})

server.listen(port, host, () => {
    console.log('server running on http://localhost:3000')
})