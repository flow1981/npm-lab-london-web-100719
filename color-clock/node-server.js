const http = require('http');

let port = 3000

let app = http.createServer((req,res) =>{

    res.writeHead(200, {'Content-Type':'text/plain'});

    res.end("Node Server Running!\n");

    app.listen(port, '127.0.0.1');

    console.log('Node Serve running on ${port}')


})