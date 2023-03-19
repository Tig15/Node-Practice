// In last Practice of Node, we learn some modules and with help of that, we learnt to read and write file. Now let's know about Blocking and Non Blocking.

// Synchronous and Blocking Code - Line by line execution.
const fs = require('fs')
const text = fs.readFileSync('Prac.text', 'utf-8')

console.log("The content of file is...")
console.log(text)

// Asynchronous and Non Blocking Code - Line by line execution not guaranteed.
fs.readFile('Pracs.text','utf-8',(err, data)=>{
    console.log(data)
})

console.log("This is a message")
