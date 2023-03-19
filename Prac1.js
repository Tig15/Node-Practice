// First We add or call the http to the code..
const http = require('http');

const hostname = '127.0.0.1'; // Create the hostname
const port = 3000;  // Then the port

// Create the server with the arguments (request, response). We used the arrow funtion for further. We set the status code and header. In header, we set the text to html. We end with our one of css example.
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  // res.end('Hello World');
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Styling Links and Button</title>
    <style>
        .container{
            background-color: royalblue;
            border: 13px solid honeydew;
            padding: 19px 10px;
            margin: 19px auto;
            width: 565px;
        }
        /* To remove the underliine in the link part*/
        a{
            text-decoration: none;
            color: black;
        }
        .btn{
            background-color: chocolate;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-weight: bold;
            padding: 9px;
            border: none;
            cursor: pointer;            
            font-size: 14px;
            border-radius: 2px;
        }
        a:hover{
            color: darkolivegreen;
            background-color: brown;
        }
        a.visited{
            background-color: goldenrod;
        }
        a.active{
            background-color: firebrick;
        }
        /*.btn:hover{
            color: crimson;
            background-color: blueviolet;
            border: 12px solid greenyellow;
        }*/
    </style>
</head>
<body>
    <div class="container">
        <p>
            We will now design two types of buttons. One will be a normal button and another will be linking to some websites. You will observe that both the buttons will look different. Therefore, to make it look attractive, we will do styling.
        </p>
        <a href="https://www.youtube.com/" class="btn"> Read More</a>
        <button class="btn"> Contact Us</button>
        <h2> Psuedo Class</h2>
        <ol type="1">
            <li> a:hover</li>
            <li> a.visited</li>
            <li> a.active</li>
        </ol>
        <h3> The New CSS we learn in this,</h3>
        <ul>
            <li> text-decoration </li>
            <li> cursor</li>
        </ul>
    </div>
</body>
</html>`)
});

// We end the code, by listening server. In which, port and hostname were required and empty bracket with arrow function.
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});