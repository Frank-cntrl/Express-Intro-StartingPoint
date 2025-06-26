const express = require("express");
const router = express.Router();
const { Task } = require("../dummy-database");

// GET all tasks
router.get("/", (req, res) => {
  const task = Task.findAll();
  res.json(task);
});

// GET a single task by id

// Patch a task by id
router.patch("/:id", (req,res) => {
  const id = Number(req.params.id);
  const task = req.body;
  const updatedTask = Task.update(id, task);
  res.json(updatedTask);
});

// Delete a task by id
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const removeTask = Task.delete(id);
  res.status(200).json(removeTask);
});

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
