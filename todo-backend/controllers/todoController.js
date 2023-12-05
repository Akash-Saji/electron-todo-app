// controllers/todoController.js
const Todo = require("../model/todomodel");
const { validateTodo } = require("../validations/todoValidation");

exports.getTodos = async (req, res) => {
    try {
        const todoData = await Todo.find();
        res.json(todoData);
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
};

exports.createTodo = async (req, res) => {
    try {
        // Validate the request body
        const { error } = validateTodo(req.body);

        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        // Create a new todo
        const todo = new Todo({
            name: req.body.name,
        });

        const newTodoData = await todo.save();
        res.status(201).json(newTodoData);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

exports.updateTodo = async (req, res) => {
    const todoId = req.params.id;

    try {
        // Validate the request body
        const { error } = validateTodo(req.body);

        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const todo = await Todo.findById(todoId);

        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }

        todo.name = req.body.name;
        const updatedTodo = await todo.save();

        res.json(updatedTodo);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

exports.deleteTodo = async (req, res) => {
    const todoId = req.params.id;

    try {
        const result = await Todo.findByIdAndDelete(todoId);

        if (!result) {
            return res.status(404).json({ error: 'Todo not found' });
        }

        res.json({ message: 'Todo deleted successfully' });
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
};