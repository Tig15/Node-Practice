// NodeJS Provide variety of modules to JS, like we saw some function through Bootstrap. There are built in modules in Nodejs, which we can use for website development through backend.

// As for practing, we are calling one module - fs(File System). To read and write file, we use this module.

const fs = require('fs')
let text = fs.readFileSync("Prac.text", "utf-8")
// Let's Try Replacing the text
text = text.replace('Domain', "Society")

console.log("The content of file is...")
console.log(text)

//Let's write the file and create another file...
console.log("Creating a new file...")
fs.writeFileSync('Pracs.text', text)