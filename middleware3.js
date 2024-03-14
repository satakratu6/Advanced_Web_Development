const express = require('express');
const fs = require('fs');
const app = express();

app.use((req, res, next) => { 
    // const logFilePath=__dirname+"/request.log"; //it will go the current directory autometically
    const logMessage = `${new Date().toISOString()}: ${req.method} ${req.url}\n`;
    fs.appendFile('request.log', logMessage, (err) => { //fs.appendFile(logFilePath, logMessage, (err)=>....)
        if (err) {
            console.error('Error writing to request log file:', err);
        }
    });
    next();
});

app.use((req, res, next) => { 
    res.setHeader('X-Custom-Header', 'Hello from custom middleware');
    next();
});

// Route handler
app.get('/', (req, res) => {
    res.send('hello world!');
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
