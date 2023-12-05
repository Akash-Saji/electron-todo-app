"use strict";

var express = require('express');

var router = express.Router();

var Todo = require("../model/todomodel");
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


router.get('/', function _callee(req, res) {
  var todoData;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Todo.find());

        case 3:
          todoData = _context.sent;
          res.json(todoData);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(500).send('Internal Server Error');

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
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

router.post('/', function _callee2(req, res) {
  var todo, newTodoData;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          todo = new Todo({
            name: req.body.name
          });
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(todo.save());

        case 4:
          newTodoData = _context2.sent;
          res.status(201).json(newTodoData);
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          res.status(500).send('Internal Server Error');

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 8]]);
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

router.put('/:id', function _callee3(req, res) {
  var todoId, todo, updatedTodo;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          todoId = req.params.id;
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(Todo.findById(todoId));

        case 4:
          todo = _context3.sent;

          if (todo) {
            _context3.next = 7;
            break;
          }

          return _context3.abrupt("return", res.status(404).json({
            error: 'Todo not found'
          }));

        case 7:
          todo.name = req.body.name;
          _context3.next = 10;
          return regeneratorRuntime.awrap(todo.save());

        case 10:
          updatedTodo = _context3.sent;
          res.json(updatedTodo);
          _context3.next = 17;
          break;

        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](1);
          res.status(500).send('Internal Server Error');

        case 17:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 14]]);
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

router["delete"]('/:id', function _callee4(req, res) {
  var todoId, result;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          todoId = req.params.id;
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(Todo.findByIdAndDelete(todoId));

        case 4:
          result = _context4.sent;

          if (result) {
            _context4.next = 7;
            break;
          }

          return _context4.abrupt("return", res.status(404).json({
            error: 'Todo not found'
          }));

        case 7:
          res.json({
            message: 'Todo deleted successfully'
          });
          _context4.next = 13;
          break;

        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](1);
          res.status(500).send('Internal Server Error');

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 10]]);
});
module.exports = router;