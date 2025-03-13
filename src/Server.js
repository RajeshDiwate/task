const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

let tasks = [];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});
app.post("/tasks", (req, res) => {
  const newtask = { id: Date.now(), text: req.body.text, completed: false };
  tasks.push(newtask);
  res.status(201).json(newtask);
});

app.put("/tasks", (req, res) => {
  const task = tasks.find((t) => t.id == req.params.id);
  if (task) {
    task.completed = req.body.completed;
    req.json(task);
  } else {
    res.status(404);
  }
});

app.delete("taska/:id", (req, res) => {
  tasks = tasks.filter((t) => t.id != req.params.id);
  res.json({ message: "task is deleted" });
});

const PORT = 5000;

app.listen(PORT, () => console.log(`server is running ${PORT}`));
