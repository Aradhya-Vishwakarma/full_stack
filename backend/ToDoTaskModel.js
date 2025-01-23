const { default: mongoose } = require("mongoose");
const ToDoTaskSchema = require("./schemas/ToDoTaskSchema");
const Task = mongoose.model("Task", ToDoTaskSchema);

module.exports = Task;