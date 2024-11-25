// Create web server
// 1. Load the http module
var http = require('http');
// 2. Create a server
http.createServer(function (req, res) {
    // 3. Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // 4. Send the response body "Hello World"
    res.end('Hello World\n');
}).listen(3000);
console.log('Server running at http://localhost:3000/');

// 5. Run the server
// $ node comments.js
// Server running at http://localhost:3000/

// 6. Open a browser and type in the address http://localhost:3000/ and you should see Hello World

// 7. You can also use curl to test the server
// $ curl http://localhost:3000/
// Hello World

// 8. Now, let's make the server more interesting by changing the response body to display the current time