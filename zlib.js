const zlib = require("zlib");
const input="Hello world!";
zlib.gzip(input, (err, compressedData)=>{
    if(err){
        console.error('Error compressing data: ',err); //gzip will autometically fill the parameters of err and compreesedData whenever data is compressed
        return;
    }
    // console.log(compressedData);
    zlib.gunzip(compressedData,(err,decompressedData)=>{
        if(err){
            console.error("Error decompressing data: ", err);
            return;
        }
        console.log('Decompressed data: ',decompressedData.toString());
    });
    
});
