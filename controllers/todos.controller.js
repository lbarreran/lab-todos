const { StatusCodes } = require('http-status-codes');
const createError = require('http-errors');
const Todo = require('../models/Todo.model');

module.exports.getTodos = (req, res, next) => {
  Todo.find()
    .then((todos) => {
      res.status(StatusCodes.OK).json(todos)
    })
    .catch(next) 
}

module.exports.createTodos = (req, res, next) => {
  Todo.create(req.body)
    .then(createdTodo => {
      res.status(StatusCodes.CREATED).json(createdTodo)
    })
    .catch(next)
}

module.exports.getTodosDetail = (req, res, next) => {
  Todo.findById(req.params.id)
    .then((todo) => {
      if (!todo) {
        next(createError(StatusCodes.NOT_FOUND, 'To-do not found'))
      } else {
        res.status(StatusCodes.OK).json(todo)
      }
    })
    .catch(next)
}

module.exports.deleteTodos = (req, res, next) => {
  Todo.findByIdAndDelete(req.params.id)
    .then((todo) => {
      if (!todo) {
        next(createError(StatusCodes.NOT_FOUND, 'To-do not found'))
      } else {
        res.status(StatusCodes.NO_CONTENT).json();
      }
    })
    .catch(next)
}

module.exports.editTodos = (req, res, next) => {
  Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(editedTodo => {
      res.json(editedTodo);
    })
    .catch(next)
}