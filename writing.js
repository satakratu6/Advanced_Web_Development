const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        const message = "Hello world";
        fs.writeFile('ex.txt', message, 'utf8', (err) => {
            if (err) {
                console.error(err);
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end('Internal server error');
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('File context: ' + message); 
        });
    }
});

const port = 5000;
server.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
// server.listen(4000);
