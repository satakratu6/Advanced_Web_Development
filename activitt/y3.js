const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    if(req.method === 'GET' && req.url.startsWith('/submit')) {
        const queryObject = url.parse(req.url,true).query;
        const writeStream = fs.createWriteStream('output.txt');
        writeStream.write(JSON.stringify(queryObject));
        writeStream.end();

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('Data received and saved successfully.');
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('Route not found.');
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
