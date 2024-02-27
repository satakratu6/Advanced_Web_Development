const http=require('http');
const fs=require('fs');
const url=require('url');

const server=http.createServer((req,res)=>{
    let path=url.parse(req.url,true);
    console.log(path);
    console.log(path.query.name);
    if(path.pathname=='/'){
        let readableStream=fs.createReadStream('form.html');
        readableStream.pipe(res);
    } else if(path.pathname=='/submit'){
        let writableStream=fs.createWriteStream('Output7.txt');
        let query=path.query;
        writableStream.write(query.name);
        writableStream.on('finish',()=>{
            console.log("Form has been saved succesfully");
        })
        writableStream.end();
        res.end('Data received and saved successfully.');
}
    
});
const port=3000;
server.listen(port,()=>console.log(`Server is running on http://localhost:${port}`));
