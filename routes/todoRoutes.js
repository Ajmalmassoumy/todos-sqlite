const express = require('express');
const router = express.Router();
const todoModel = require('../models/todoModel');

// GET all todos
router.get('/', (req, res) => {
  todoModel.getAllTodos((err, rows) => {
    if (err) return res.status(500).json({ message: 'DB error', error: err });
    res.json(rows);
  });
});

// GET a single todo
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todoModel.getTodoById(id, (err, todo) => {
    if (err) return res.status(500).json({ message: 'DB error', error: err });
    if (!todo) return res.status(404).json({ message: 'Todo item not found' });
    res.json(todo);
  });
});

// POST a new todo
router.post('/', (req, res) => {
  const { name, priority, isFun } = req.body;
  if (!name) return res.status(400).json({ message: 'Name is required' });

  todoModel.addTodo({ name, priority, isFun }, (err, newTodo) => {
    if (err) return res.status(500).json({ message: 'Insert failed', error: err });
    res.status(201).json(newTodo);
  });
});

// DELETE a todo
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todoModel.deleteTodo(id, (err, success) => {
    if (err) return res.status(500).json({ message: 'Delete failed', error: err });
    if (!success) return res.status(404).json({ message: 'Todo item not found' });
    res.json({ message: `Todo item ${id} deleted.` });
  });
});

module.exports = router;
