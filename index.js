<<<<<<< HEAD
// function exampleFunction(){
//     if(true){
//         let functionScopedVar="I am function scoped";
//     }
//     console.log(functionScopedVar);
// }
// exampleFunction();
// console.log(functionScopedVar);

// hello();
// function hello(){
//     console.log("Hello world!");
// }
// let person={
//     name: "Alice",
//     age: 30,
//     isStudent:false
// };
// console.log(person.name);
let result=5+"5";
console.log(result); //Type coercion
let a=10;
let b=5;
console.log(a>b);
console.log(1!==0);
=======
//Reading a file asynchronously
const http= require('http');
const fs= require('fs');
const server= http.createServer((req, res) => {
    if(req.url=="/"){
        fs.readFile('FileSystem/example.txt','utf8',(err,data)=>{
            if(err){
                console.error(err);
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('File Content:'+data);
        })
    }
    
});
const port=4000;
server.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
>>>>>>> cbc3961 (first server)
