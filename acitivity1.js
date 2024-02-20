const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        const readableStream = fs.createReadStream('example2.txt', { encoding: 'utf-8', highWaterMark: 64 });
        const writableStream = fs.createWriteStream('output3.txt');

        readableStream.on('data', (chunk) => {
            console.log('Received chunk of data');
            console.log(chunk);
            writableStream.write(chunk); 
        });

        readableStream.on('end', () => {
            console.log('Finished reading data from the file.');
            writableStream.end(); 
        });

        readableStream.on('error', (err) => {
            console.error('Error reading data: ', err);
        });

        writableStream.on('finish', () => {
            console.log('Finished writing data to the file.');
        });

        writableStream.on('error', (err) => {
            console.error('Error writing data: ', err);
            res.end('Error writing data');
        });
    }
});

const port = 3000;
server.listen(port, () => console.log(`The server is running on http://localhost:${port}`));
