"use strict";

// controllers/todoController.js
var Todo = require("../model/todomodel");

var _require = require("../validations/todoValidation"),
    validateTodo = _require.validateTodo;

exports.getTodos = function _callee(req, res) {
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
};

exports.createTodo = function _callee2(req, res) {
  var _validateTodo, error, todo, newTodoData;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          // Validate the request body
          _validateTodo = validateTodo(req.body), error = _validateTodo.error;

          if (!error) {
            _context2.next = 4;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            error: error.details[0].message
          }));

        case 4:
          // Create a new todo
          todo = new Todo({
            name: req.body.name
          });
          _context2.next = 7;
          return regeneratorRuntime.awrap(todo.save());

        case 7:
          newTodoData = _context2.sent;
          res.status(201).json(newTodoData);
          _context2.next = 15;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          res.status(500).send('Internal Server Error');

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

exports.updateTodo = function _callee3(req, res) {
  var todoId, _validateTodo2, error, todo, updatedTodo;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          todoId = req.params.id;
          _context3.prev = 1;
          // Validate the request body
          _validateTodo2 = validateTodo(req.body), error = _validateTodo2.error;

          if (!error) {
            _context3.next = 5;
            break;
          }

          return _context3.abrupt("return", res.status(400).json({
            error: error.details[0].message
          }));

        case 5:
          _context3.next = 7;
          return regeneratorRuntime.awrap(Todo.findById(todoId));

        case 7:
          todo = _context3.sent;

          if (todo) {
            _context3.next = 10;
            break;
          }

          return _context3.abrupt("return", res.status(404).json({
            error: 'Todo not found'
          }));

        case 10:
          todo.name = req.body.name;
          _context3.next = 13;
          return regeneratorRuntime.awrap(todo.save());

        case 13:
          updatedTodo = _context3.sent;
          res.json(updatedTodo);
          _context3.next = 21;
          break;

        case 17:
          _context3.prev = 17;
          _context3.t0 = _context3["catch"](1);
          console.error(_context3.t0);
          res.status(500).send('Internal Server Error');

        case 21:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 17]]);
};

exports.deleteTodo = function _callee4(req, res) {
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
};