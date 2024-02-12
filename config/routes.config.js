const router = require('express').Router();
const todosController = require('../controllers/todos.controller');

router.get('/', (req, res, next) => res.json({ ok: true }));

/* Todos */

router.get('/todos', todosController.getTodos);
router.post('/todos', todosController.createTodos);
router.get('/todos/:id', todosController.getTodosDetail);
router.delete('/todos/:id', todosController.deleteTodos);
router.put('/todos/:id', todosController.editTodos);

module.exports = router;