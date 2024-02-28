const express=require('express');
const app=express();
const fs=require('fs');
const port=3000;
app.get('/readfile',(req,res)=>{
    fs.readFile('example2.txt','utf-8',(err,data)=>{
        if(err){
            console.error(err);
            return res.status(500).send("Erro reading the file");
        }
        res.send(data);
    });
});
app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});