//Reading a file asynchronously
const http= require('http');
const fs= require('fs');
const server= http.createServer((req, res) => {
    if(req.url=="/"){
            const message="Hello, this is writing using Sync! ";
            try{
                fs.writeFileSync('ext.tx',message,'utf-8');
                res.writeHead(200,{'Content-Type':'text/plain'});
                res.end('File Context: '+message);
            } catch(err){
            console.error(err);
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Internal server error');
            }
        }
    
    
});
const port=4000;
server.listen(port, () => console.log(`Server is running on http://localhost:${port}`));