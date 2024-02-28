const express=require('express');
const app=express();
app.use((req,res,next)=>{
    console.log("This is a middleware function 1");
    next();
});

app.get('/',(req,res)=>{
    res.send('Hello world');
});
app.use((req,res,next)=>{
    console.log("This is a middleware function 2");
    next();
});
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});