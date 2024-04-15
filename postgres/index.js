const express = require('express');
const {Pool} = require('pg');
const app = express();
const port = 3000;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'todos',
    password: 'Amar@9872',
    port: 5432,
});
app.use(express.json());
app.get('/todos',(req, res)=>{
    pool.query('SELECT*FROM todos',(error, result)=>{
        if(error){
            console.error('Error fetching todos', error);
            res.status(500).json({
                error: 'Internal server error'
            });
        }
        else{
            res.json(result.rows);
        }
    });
});

app.post('/todos', (req,res) => {
    const {title, completed } = req.body;
    pool.query('INSERT INTO todos (title, completed) VALUES ($1, $2)', [title,completed],(error) =>{
        if(error) {
        console.error('Error creating todo', error);
    res.status(500).json({error: 'Internal server error'});
}else {
    res.status(201).json({message: 'Todo created successfully'});
}
    });
});

app.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    pool.query('DELETE FROM todos WHERE id = $1', [id] , (error) =>{
        if(error) {
            console.error('Error deleting todo', error);
            res.status(500).json({error: 'Internal server error'});
        }else{
            res.json({message: 'Todo deleted successfully'});
        }
    });
});
app.listen(3000);