const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;

app.get('/', (req, res) => {
    fs.readFile('form.html', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.end("Please check console");
        } else {
            res.send(data);
        }
    });
});

app.get('/submit', (req, res) => {
    let data = req.query;
    fs.writeFile('form.txt', JSON.stringify(data), 'utf-8', (err) => {
        if (err) {
            console.error(err);
            res.end('Internal server error');
            return;
        } else {
            res.send('Data saved successfully');
        }
    })
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

