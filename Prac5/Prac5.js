const http = require('http')
const fs = require('fs')

const hostname = '127.0.0.2'
const port = 1504
const home = fs.readFileSync('home.html')
const about = fs.readFileSync('./about.html')
const service = fs.readFileSync('./service.html')
const contact = fs.readFileSync('./contact.html')

const server = http.createServer((req,res) =>{
    console.log(req.url)
    url = req.url

    res.statusCode = 200
    res.setHeader('Content-type', 'text/html')
    if(url == '/'){
        res.end(home)
    }
    else if(url == '/about'){
        res.end(about)
    }
    else if(url == '/service'){
        res.end(service)
    }
    else if(url == '/contact'){
        res.end(contact)
    }
    else{
        res.statusCode = 404
        res.end('<h1> 404 Not Found</h1>')
    }
})

server.listen(port, hostname, () =>{
    console.log(`Server running at http://${hostname}:${port}/`)
})