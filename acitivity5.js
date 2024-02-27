const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text', 'Content-Encoding': 'gzip' });

        const readableStream = fs.createReadStream('newfile.txt', { encoding: 'utf8' });

        readableStream.on('data', (chunk) => {
            zlib.gzip(chunk, (err,compressedData) => {
                if(err) {
                    console.error('Error compressing data:', err);
            
                    return;
                }
                console.log("Compressed Data: ", compressedData);
        });
    });

        readableStream.on('end', () => {
            res.end();
        });
    }
});

const port = 5000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
