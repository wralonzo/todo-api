const { Task } = require("../models");

// constant to manage this controller
const TaskController = {
  /**
   * Get all tasks
   * @returns {Array} task list [].
   */
  getAllTasks: async (req, res) => {
    try {
      const tasks = await Task.findAll();
      res.json(tasks);
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
