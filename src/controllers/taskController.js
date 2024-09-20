const { Task } = require("../models");

// constant to manage this controller
const TaskController = {
  /**
   * Get all tasks
   * @returns {Array, page, page} task list [].
   */
  getAllTasks: async (req, res) => {
    try {
      // Recibir los parámetros de la paginación desde la query del request
      const { page = 1, pageSize = 10 } = req.query;
      const limit = parseInt(pageSize); // Cantidad de elementos por página
      const offset = (parseInt(page) - 1) * limit; // Punto de inicio

      // Usar limit y offset para paginar los resultados
      const { count, rows: tasks } = await Task.findAndCountAll({
        limit,
        offset,
      });

      // Retornar los resultados paginados y la cantidad total de tareas
      res.json({
        totalTasks: count, // Total de tareas en la base de datos
        totalPages: Math.ceil(count / limit), // Total de páginas calculado
        currentPage: parseInt(page), // Página actual
        tasks, // Tareas de la página actual
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  /**
   * Register task
   * @param {Object} items for model task
   * @returns {object} task has been created.
   */
  createTask: async (req, res) => {
    try {
      const task = await Task.create(req.body);
      console.log(req.body);
      res.status(201).json(task);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  },

  /**
   * update task
   * @param {Object} items for model task
   * @returns {object} task has been updated.
   */
  updateTask: async (req, res) => {
    try {
      await Task.update(req.body, {
        where: { id: req.params.id },
      });
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  /**
   * delete task
   * @param {id param} items for model task
   * @returns {object} task has been updated.
   */
  deleteTask: async (req, res) => {
    try {
      await Task.destroy({
        where: { id: req.params.id },
      });
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = TaskController;
