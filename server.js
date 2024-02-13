const http=require('http');
const fs=require('fs');
http.createServer((req,res)=>{
    fs.readFile('index.html',(err,data)=>{
        if(err){
            console.error(err);
            res.end("Check Console"); 
        } else{
            res.end(data);
        }
    })
} else if(req.url=="/save-json"){
    let body="";
    req.on('data',(chunk)=>{
        body=body+chunk;
        console.log(body);
    })
    req.on('end',())

})