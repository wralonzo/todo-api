const express = require("express");
const TaskController = require("../controllers/taskController");
const authMiddleware = require("../shared/middleware/authMiddleware");

const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get all tasks
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: The list of the tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 */
router.get("/", authMiddleware, TaskController.getAllTasks);
router.post("/",  TaskController.createTask);
router.put("/:id", authMiddleware, TaskController.updateTask);
router.delete("/:id", authMiddleware, TaskController.deleteTask);

module.exports = router;
