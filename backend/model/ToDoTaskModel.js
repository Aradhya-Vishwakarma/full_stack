const {default: mongoose} = require('mongoose');
const ToDoTaskSchema = require('../schemas/ToDoTaskSchema');
const ToDoTaskModel = mongoose.model('ToDoTask', ToDoTaskSchema);
module.exports = ToDoTaskModel;