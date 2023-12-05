const express = require('express');
const router = express.Router();
const Todo = require("../model/todomodel");

/**
 * @swagger
 * components:
 *   schemas:
 *     Todo:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *       example:
 *         name: Example Todo
 *     NotFoundError:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *       example:
 *         error: Todo not found
 */
/**
 * @swagger
 * /todo:
 *   get:
 *     summary: Get all todos
 *     tags: [Todo]
 *     responses:
 *       '200':
 *         description: A successful response
 *       '500':
 *         description: Internal Server Error
 */

router.get('/', async (req, res) => {
    try {
        const todoData = await Todo.find();
        res.json(todoData);
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

/**
 * @swagger
 * /todo:
 *   post:
 *     summary: Create a new todo
 *     tags: [Todo]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       '201':
 *         description: Todo created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       '500':
 *         description: Internal Server Error
 */

router.post('/', async (req, res) => {
    const todo = new Todo({
        name: req.body.name,
    });

    try {
        const newTodoData = await todo.save();
        res.status(201).json(newTodoData);
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

/**
 * @swagger
 * /todo/{id}:
 *   put:
 *     summary: Update a todo by ID
 *     tags: [Todo]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Todo ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       '200':
 *         description: Todo updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       '404':
 *         description: Todo not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NotFoundError'
 *       '500':
 *         description: Internal Server Error
 */

router.put('/:id', async (req, res) => {
    const todoId = req.params.id;

    try {
        const todo = await Todo.findById(todoId);

        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }

        todo.name = req.body.name;
        const updatedTodo = await todo.save();

        res.json(updatedTodo);
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

/**
 * @swagger
 * /todo/{id}:
 *   delete:
 *     summary: Delete a todo by ID
 *     tags: [Todo]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Todo ID
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Todo deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       '404':
 *         description: Todo not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NotFoundError'
 *       '500':
 *         description: Internal Server Error
 */

router.delete('/:id', async (req, res) => {
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
});

module.exports = router;
