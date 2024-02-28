const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        const message="hi,what is your name?";
        fs.writeFile('ex2.txt',message,'utf-8',(err)=>{
            if(err){
                console.error(err);
                res.writeHead(200,{'Content-Type':'text/plain'});
                res.end("Internal Server error");
                return;                
            }
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end("File Content: "+message);
        })
    }
});
const port=5000;
server.listen(port,()=>console.log(`The server is running on http://localhost:${port}`));