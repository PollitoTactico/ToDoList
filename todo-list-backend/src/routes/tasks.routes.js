const express = require('express');
const router = express.Router();
const {
    createTask,
    getAllTasks,
    updateTaskStatus,
    deleteTask,
} = require('../controllers/tasks.controller');

// Crear una nueva tarea
router.post('/tasks', createTask);

// Listar todas las tareas
router.get('/tasks', getAllTasks);

// Actualizar el estado de una tarea
router.patch('/tasks/:id', updateTaskStatus);

// Eliminar una tarea
router.delete('/tasks/:id', deleteTask);

module.exports = router;
