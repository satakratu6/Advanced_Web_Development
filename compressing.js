const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

const server = http.createServer((req, res) => {
    const filePath = 'newfile.txt';
    const readStream = fs.createReadStream(filePath);

    res.writeHead(200, {
        'content-type': 'text/plain',
        'content-encoding': 'gzip'
    });

    readStream.pipe(zlib.Gzip()).pipe(res);

    readStream.on('error', (err) => {
        console.error('Error reading file:', err);
        res.statusCode = 500;
        res.end('Internal Server Error');
    });
});

const port = 4000;
server.listen(port, () => console.log(`Server running at http://localhost:${port}`));
