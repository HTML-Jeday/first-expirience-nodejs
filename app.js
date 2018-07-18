const epxress = require('express');
const app = epxress();
const todos = require('./todos');


app.get('/', (req, res) =>{
    res.send('Express ')
})

app.get('/todos', (req, res) =>{

    if(req.query.completed){
        return res.json(todos.filter(todo => todo.completed.toString() === req.query.completed));
    }

    res.json(todos)
    
})
app.get('/todos/:id', (req, res) =>{
    let todo = todos.find(todo => todo.id == req.params.id)
    
    if(!todo) return res.status(404).send('Не найдено')

    res.json(todo)
})

app.listen(8080, () => console.log('server is working'));
