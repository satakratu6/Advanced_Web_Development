// You are building an express application that needs to handle form submissions containing
//  URL-encoded data.Using the built-in URL-encoded body parser middleware, write a route handler
//  to handle POST requests to the /submit endpoint.Parse the incoming URL-encoded data and log it to the console
const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;
//middleware for parsing url encoded bodies
app.use(express.urlencoded({ extended: true }));

app.get('/submit', (req, res) => {
    fs.readFile('form2.html', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.end("Please check console");
        } else {
            res.send(data);
        }
    });
});
app.post('/submit', (req, res) => {
    let data = req.body;
    fs.writeFile('form2.txt', JSON.stringify(data), 'utf-8', (err) => {
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
