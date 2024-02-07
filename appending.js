//Reading a file asynchronously
const http= require('http');
const fs= require('fs');
const server= http.createServer((req, res) => {
    if(req.url=="/"){
        const message="hello, this file is appended using callback";
    
        fs.appendFile('append.txt',message+'\n','utf8',(err)=>{
            if(err){
                console.error(err);
                res.writeHead(200,{ 'Content-Type': 'text/plain' });
                res.end('Internal server error');
                
            } else{
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('File Content:'+message);
            }
        });
    }
    
});
const port=4000;
server.listen(port, () => console.log(`Server is running on http://localhost:${port}`));