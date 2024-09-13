const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let todos = [
    { id: 1, task: "Learn Docker" },
    { id: 2, task: "Build REST API" },
];

// Get all todos
app.get("/todos", (req, res) => {
    res.json(todos);
});

// Get a specific todo
app.get("/todos/:id", (req, res) => {
    const todo = todos.find((t) => t.id == req.params.id);
    if (todo) {
        res.json(todo);
    } else {
        res.status(404).json({ error: "Todo not found" });
    }
});

// Create a new todo
app.post("/todos", (req, res) => {
    const newTodo = { id: todos.length + 1, task: req.body.task };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// Update a todo
app.put("/todos/:id", (req, res) => {
    const todo = todos.find((t) => t.id == req.params.id);
    if (todo) {
        todo.task = req.body.task;
        res.json(todo);
    } else {
        res.status(404).json({ error: "Todo not found" });
    }
});

// Delete a todo
app.delete("/todos/:id", (req, res) => {
    const todoIndex = todos.findIndex((t) => t.id == req.params.id);
    if (todoIndex >= 0) {
        todos.splice(todoIndex, 1);
        res.status(204).end();
    } else {
        res.status(404).json({ error: "Todo not found" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
