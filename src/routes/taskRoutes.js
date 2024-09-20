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

/**
 * @swagger
 * /:
 *   POST:
 *     summary: Create a new tasks
 *     tags: [Tasks]
 *     responses:
 *       201:
 *         description: The list of the tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 */
router.post("/", authMiddleware, TaskController.createTask);

/**
 * @swagger
 * /:
 *   Put:
 *     summary: update task
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
router.put("/:id", authMiddleware, TaskController.updateTask);

/**
 * @swagger
 * /:
 *   delete:
 *     summary:delete task
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
router.delete("/:id", authMiddleware, TaskController.deleteTask);

module.exports = router;
