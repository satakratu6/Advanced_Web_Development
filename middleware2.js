const express = require('express');
const app = express();

app.use((req, res, next) => { 
    console.log(`${new Date().toISOString()}: ${req.method} ${req.url}`);
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
