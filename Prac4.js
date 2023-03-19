const http = require("http")
const fs = require("fs")

const hostname = '127.0.0.3'
const port = 1504

const filecontent = fs.readFileSync('prac2.html')

const server = http.createServer((re1,res)=>{
    res.writeHead(300, {'Content-type': 'text/html'})
    res.end(filecontent)
})

server.listen(port, hostname, ()=>{
    console.log(`Server Listening at http://${hostname}:${port}/`)
})