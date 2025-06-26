const express = require("express");
const router = express.Router();
const { Task } = require("../dummy-database");

// GET all tasks
router.get("/", (req, res) => {
  // Replace this with your code!
  res.status(501).send("Not implemented");
});

// GET a single task by id
router.get("/", (req, res) => {
  const task = Task.findAll();
  res.json(task);
});

// Patch a task by id

// Delete a task by id

// Create a new task
router.post("/", (req, res) => {
  const { title, description, userId } = req.body;
  const newTask = Task.create({
    title,
    description,
    completed: false,
    userId: Number(userId),
  });
  res.status(201).json(newTask);
});

module.exports = router;
