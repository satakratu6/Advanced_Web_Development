//How can you create a Node.js server that serves a specific text file, compresses it with gzip encoding, and dynamically responds to HTTP requests? Provide a detailed code solution
const http= require('http');
const fs= require('fs');
const zlib=require('zlib');
const server= http.createServer((req, res) => {
    if(req.url=="/"){
    
        fs.readFile('newfile.txt','utf8',(err,data)=>{
            if(err){
                console.error(err);
                return;
            }
            zlib.gzip(data,(err,compdata)=>{
                if(err){
                    console.log(error);
                    return;
                }
                res.writeHead(200,{'content-type':'text/plain','content-encoding':'gzip'});
                res.end(compdata);
            })

           
        })
    }
    
});
const port=4000;
server.listen(port, () => console.log(`http://localhost:${port}`));