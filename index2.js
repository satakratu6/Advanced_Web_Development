const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        const message="hey, what's your name";
        fs.appendFile('ex6.txt',message+'\n','utf-8',(err)=>{
            if(err){
                console.error(err);
    
                res.end('Internal server error');
            }
            else{
            res.end('FIle content appended: '+message);
            }
        });
        
    }
});
const port=5000;
server.listen(port,()=>console.log(`Server is running on http://localhost:${port}`));