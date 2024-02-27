const fs=require('fs');
//if you don't define highWaterMark, then it will send all data at once
const readableStream=fs.createReadStream('example2.txt',{encoding:'utf-8', highWaterMark:64});
readableStream.on('data',(chunk)=>{
    console.log('Recieved chunk of data');
    console.log(chunk);
});
readableStream.on('end',()=>{
    console.log('Finished reading data from the file.');
});
readableStream.on('error',(err)=>{
    console.log('Error reading data: ',err);
});
