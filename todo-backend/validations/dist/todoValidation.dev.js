"use strict";

var Joi = require('joi');

var todoValidationSchema = Joi.object({
  name: Joi.string().required()
});

var validateTodo = function validateTodo(data) {
  return todoValidationSchema.validate(data);
};

module.exports = {
  validateTodo: validateTodo
};