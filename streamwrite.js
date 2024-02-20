const fs=require('fs');
const writableStream=fs.createWriteStream('output.txt');
const data=['Hello, world!\n','This is a test.\n'];
data.forEach(chunk =>{
    writableStream.write(chunk);
});
writableStream.end();
writableStream.on('finish',()=>{
    console.log('Finished writing data to the file.');
});
writableStream.on('error',(err)=>{
    console.error('Error writing data: ',err);
});