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
const express=require('express');
const sequelize=require('./sequelize');
const Todo=require('./models/Todo');
const app=express();
const port=3000;
sequelize.authenticate()
.then(()=>{
    console.log('Connection has been established succesfully.');
    return sequelize.sync({alter:true});
})
.then(()=>{
    console.log("All models were synchronized succesfully.");
})
.catch((error)=>{
    console.error('Unable to connect to the database:',error);
});
app.use(express.json());
//define endpoints
app.get('/tudos',(req,res)=>{
    Todo.findAll()
    .then((tudos)=>{
        res.json(tudos);
    })
    .catch((error)=>{
        res.status(500).json({error:'Internal server error'});
    });
});
app.post('/tudos',(req,res)=>{
    const {title, completed}=req.body;
    Todo.create({title,completed})
    .then((todo)=>{
        res.status(201).json(todo);
    })
    .catch((error)=>{
        res.status(400).json({error:'Bad request'});
    });
});
app.put('/tudos/:id',(req,res)=>{
    const tudoId=req.params.id;
    const {title, completed}=req.body;
    Todo.findByPk(tudoId)
    .then(todo =>{
        if(!todo){
            return res.status(404).json({error:'Todo not found'});
        }
        todo.title=title;
        todo.completed=completed;
        return todo.save();
    })
    .then(updateTodo=>{
        res.json(updateTodo);
    })
    .catch(error =>{
        res.status(500).json({error:'Internal Server error'});
    });
});
app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});
>>>>>>> 8bd3b7b (new)
