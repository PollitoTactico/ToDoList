const tasks = require('../models/tasks.model');

// Crear una nueva tarea
const createTask = (req, res) => {
    const { title, description } = req.body;
    const newTask = {
        id: tasks.length + 1, // Generar un ID único
        title,
        description,
        createdAt: new Date(),
        status: 'pending', // Estado inicial
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
};

// Listar todas las tareas
const getAllTasks = (req, res) => {
    res.json(tasks);
};

// Actualizar el estado de una tarea
const updateTaskStatus = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const task = tasks.find((t) => t.id === parseInt(id));

    if (!task) return res.status(404).json({ message: 'Tarea no encontrada' });

    task.status = status;
    res.json(task);
};

// Eliminar una tarea
const deleteTask = (req, res) => {
    const { id } = req.params;
    const index = tasks.findIndex((t) => t.id === parseInt(id));

    if (index === -1) return res.status(404).json({ message: 'Tarea no encontrada' });

    tasks.splice(index, 1);
    res.json({ message: 'Tarea eliminada exitosamente' });
};

module.exports = {
    createTask,
    getAllTasks,
    updateTaskStatus,
    deleteTask,
};
